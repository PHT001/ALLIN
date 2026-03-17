// ═══════════════════════════════════════════════════
// MASTERCLASS — Claude Code : ton environnement de dev IA
// Re-exports from existing module with corrected module number (15)
// ═══════════════════════════════════════════════════

// Import the existing detailed Claude Code lessons
import { MODULE_3_LESSONS as RAW_LESSONS } from "./new_module_03_claude_code";

// Re-map to module 15 (masterclass 1) and prefix slugs to avoid conflicts
export const MASTERCLASS_CLAUDE_CODE_LESSONS = RAW_LESSONS.map((lesson) => ({
  ...lesson,
  module: 15,
  slug: lesson.slug.startsWith("mc-") ? lesson.slug : `mc-${lesson.slug}`,
}));
