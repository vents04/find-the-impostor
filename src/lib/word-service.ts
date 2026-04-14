import { Locale } from "../config/language";
import { FALLBACK_WORDS_WITH_HINTS } from "@/src/data/fallbackwords";
import { WordWithHints } from "@/src/types/game";

export function getRandomWordWithHints(
  category: string,
  language: Locale,
  usedWords: string[],
): { word: WordWithHints; cycleReset: boolean } {
  const categoryKey =
    category.toLowerCase() as keyof (typeof FALLBACK_WORDS_WITH_HINTS)[typeof language];
  const allWords = FALLBACK_WORDS_WITH_HINTS[language]?.[categoryKey];

  if (!allWords || allWords.length === 0) {
    throw new Error(
      `No words available for category "${category}" in language "${language}"`,
    );
  }

  let pool = allWords.filter(w => !usedWords.includes(w.word));
  let cycleReset = false;

  if (pool.length === 0) {
    pool = allWords;
    cycleReset = true;
  }

  return {
    word: pool[Math.floor(Math.random() * pool.length)],
    cycleReset,
  };
}
