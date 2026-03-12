"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LessonSectionContent } from "@/components/lesson/LessonSectionContent";

interface LessonData {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  videoUrl: string | null;
  pdfUrl: string | null;
  exercise: string | null;
  duration: string;
  order: number;
  moduleTitle: string;
  moduleOrder: number;
  hasQuiz: boolean;
  quizPassed: boolean;
  status: string;
  prevSlug: string | null;
  nextSlug: string | null;
}

export default function LessonPage() {
  const params = useParams();
  const [lesson, setLesson] = useState<LessonData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/lessons/${params.lessonId}`)
      .then((r) => r.json())
      .then((data) => {
        setLesson(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [params.lessonId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold mb-2">Leçon introuvable</h2>
        <p className="text-text-secondary mb-6">Cette leçon n&apos;existe pas ou tu n&apos;y as pas accès.</p>
        <Button href="/lessons">Retour aux leçons</Button>
      </div>
    );
  }

  const showUpsell = lesson.order === 10;

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-0">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-white/70 font-semibold mb-2">
          Module {lesson.moduleOrder} — {lesson.moduleTitle}
        </p>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
          Leçon {lesson.order} : {lesson.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-text-tertiary">
          <span>{lesson.duration}</span>
          {lesson.quizPassed && <Badge className="text-xs">Quiz validé ✓</Badge>}
        </div>
      </div>

      {/* Single-column content with inline animations */}
      <GlassCard className="p-4 sm:p-6 md:p-8 !overflow-visible mb-8">
        <LessonSectionContent
          content={lesson.content}
          lessonSlug={lesson.slug}
        />
      </GlassCard>

      {/* PDF download */}
      {lesson.pdfUrl && (
        <GlassCard className="p-6 mb-8 flex items-center justify-between">
          <div>
            <p className="font-semibold text-sm">Résumé de la leçon (PDF)</p>
            <p className="text-xs text-text-tertiary">Télécharge le résumé pour réviser</p>
          </div>
          <Button variant="secondary" size="sm" href={lesson.pdfUrl}>
            Télécharger
          </Button>
        </GlassCard>
      )}

      {/* Exercise */}
      {lesson.exercise && (
        <GlassCard className="p-6 mb-8 border-white/20">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <span>🛠️</span> Exercice pratique
          </h3>
          <div
            className="text-sm text-text-secondary leading-relaxed"
            dangerouslySetInnerHTML={{ __html: lesson.exercise }}
          />
        </GlassCard>
      )}

      {/* Upsell after lesson 10 */}
      {showUpsell && (
        <GlassCard className="p-8 mb-8 border-white/30 text-center">
          <h3 className="text-xl font-bold mb-3">Tu veux aller plus vite ?</h3>
          <p className="text-sm text-text-secondary mb-6">
            Passe à la formule One-to-One et bénéficie d&apos;un accompagnement personnalisé.
          </p>
          <Button href="/formations" variant="primary" size="sm">
            Découvrir le One-to-One
          </Button>
        </GlassCard>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/10">
        {lesson.prevSlug ? (
          <Button href={`/lessons/${lesson.prevSlug}`} variant="ghost" size="sm">
            &larr; Leçon précédente
          </Button>
        ) : <div />}

        {lesson.hasQuiz && !lesson.quizPassed ? (
          <Button href={`/quiz/${lesson.slug}`} glow>
            Passer le Quiz &rarr;
          </Button>
        ) : lesson.nextSlug ? (
          <Button href={`/lessons/${lesson.nextSlug}`}>
            Leçon suivante &rarr;
          </Button>
        ) : (
          <Button href="/congratulations">
            Terminer le parcours 🎉
          </Button>
        )}
      </div>
    </div>
  );
}
