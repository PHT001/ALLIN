"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn } from "@/lib/utils";

interface Question {
  id: string;
  type: string;
  question: string;
  options: string[];
  order: number;
}

interface QuizResult {
  score: number;
  passed: boolean;
  total: number;
  correct: number;
  xpEarned: number;
  questions: Array<{
    question: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    explanation?: string;
  }>;
}

type Phase = "intro" | "quiz" | "results";

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [lessonTitle, setLessonTitle] = useState("");

  useEffect(() => {
    fetch(`/api/quizzes/${params.lessonId}`)
      .then((r) => r.json())
      .then((data) => {
        setQuestions(data.questions || []);
        setLessonTitle(data.lessonTitle || "");
      })
      .catch(() => {});
  }, [params.lessonId]);

  const currentQ = questions[currentIdx];
  const progress = questions.length > 0 ? Math.round(((currentIdx + 1) / questions.length) * 100) : 0;

  async function submitQuiz() {
    setSubmitting(true);
    try {
      const res = await fetch("/api/quiz-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonSlug: params.lessonId,
          answers,
        }),
      });
      const data = await res.json();
      setResult(data);
      setPhase("results");
    } catch {
      alert("Erreur lors de la soumission");
    }
    setSubmitting(false);
  }

  // INTRO
  if (phase === "intro") {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <GlassCard className="p-10">
          <div className="text-5xl mb-6">📝</div>
          <h1 className="text-2xl font-bold mb-3">Quiz — {lessonTitle}</h1>
          <p className="text-text-secondary mb-2">{questions.length} questions</p>
          <p className="text-sm text-text-tertiary mb-8">Score minimum : 80% pour valider la leçon</p>
          <Button onClick={() => setPhase("quiz")} glow disabled={questions.length === 0}>
            Commencer le quiz
          </Button>
        </GlassCard>
      </div>
    );
  }

  // RESULTS
  if (phase === "results" && result) {
    return (
      <div className="max-w-2xl mx-auto py-12">
        <GlassCard className="p-10 text-center mb-8">
          <div className="text-5xl mb-4">{result.passed ? "🎉" : "😕"}</div>
          <h2 className="text-2xl font-bold mb-2">
            {result.passed ? "Quiz validé !" : "Pas cette fois..."}
          </h2>
          <p className={cn(
            "text-4xl font-black my-4",
            result.passed ? "text-success" : "text-danger"
          )}>
            {result.score}%
          </p>
          <p className="text-sm text-text-secondary mb-2">
            {result.correct}/{result.total} réponses correctes
          </p>
          {result.passed && result.xpEarned > 0 && (
            <p className="text-white font-semibold">+{result.xpEarned} XP</p>
          )}
          <div className="flex gap-4 justify-center mt-8">
            {result.passed ? (
              <Button href="/lessons" size="sm">
                Continuer &rarr;
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setPhase("intro");
                  setCurrentIdx(0);
                  setAnswers({});
                  setResult(null);
                }}
                size="sm"
              >
                Réessayer
              </Button>
            )}
          </div>
        </GlassCard>

        {/* Review */}
        <h3 className="text-lg font-bold mb-4">Détail des réponses</h3>
        <div className="space-y-3">
          {result.questions.map((q, i) => (
            <GlassCard key={i} className={cn("p-5", q.isCorrect ? "border-success/30" : "border-danger/30")}>
              <p className="text-sm font-semibold mb-2">Q{i + 1}. {q.question}</p>
              <p className="text-xs">
                <span className="text-text-tertiary">Ta réponse : </span>
                <span className={q.isCorrect ? "text-success" : "text-danger"}>{q.userAnswer}</span>
              </p>
              {!q.isCorrect && (
                <p className="text-xs mt-1">
                  <span className="text-text-tertiary">Bonne réponse : </span>
                  <span className="text-success">{q.correctAnswer}</span>
                </p>
              )}
              {q.explanation && (
                <p className="text-xs text-text-tertiary mt-2 italic">{q.explanation}</p>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    );
  }

  // QUIZ
  if (!currentQ) return null;

  return (
    <div className="max-w-2xl mx-auto py-8">
      <ProgressBar value={progress} size="sm" className="mb-8" />

      <p className="text-sm text-text-tertiary mb-6">
        Question {currentIdx + 1} sur {questions.length}
      </p>

      <GlassCard className="p-8 mb-8">
        <h2 className="text-lg font-bold mb-6">{currentQ.question}</h2>

        <div className="space-y-3">
          {currentQ.options.map((option) => (
            <button
              key={option}
              onClick={() => setAnswers({ ...answers, [currentQ.id]: option })}
              className={cn(
                "w-full text-left p-4 rounded-xl border transition-all text-sm cursor-pointer",
                answers[currentQ.id] === option
                  ? "border-white/30 bg-white/[0.06] text-white font-semibold"
                  : "border-glass-border bg-glass-bg text-text-secondary hover:border-glass-border-hover"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </GlassCard>

      <div className="flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
          disabled={currentIdx === 0}
        >
          &larr; Précédent
        </Button>

        {currentIdx < questions.length - 1 ? (
          <Button
            size="sm"
            onClick={() => setCurrentIdx(currentIdx + 1)}
            disabled={!answers[currentQ.id]}
          >
            Suivant &rarr;
          </Button>
        ) : (
          <Button
            size="sm"
            glow
            onClick={submitQuiz}
            disabled={!answers[currentQ.id] || submitting}
          >
            {submitting ? "Envoi..." : "Valider le quiz"}
          </Button>
        )}
      </div>
    </div>
  );
}
