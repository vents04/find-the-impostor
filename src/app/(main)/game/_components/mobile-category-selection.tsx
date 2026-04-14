"use client";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { GameState, TranslationFunction } from "@/src/types/game";
import { ArrowLeft, Check } from "lucide-react";

interface MobileCategorySelectionProps {
  onBack: () => void;
  gameState: GameState;
  toggleCategory: (category: string) => void;
  t: TranslationFunction;
}

const categories = [
  { id: "animals", emoji: "🐾" },
  { id: "food", emoji: "🍕" },
  { id: "objects", emoji: "📦" },
];

export default function MobileCategorySelection({
  onBack,
  gameState,
  toggleCategory,
  t,
}: MobileCategorySelectionProps) {
  return (
    <div className="min-h-dvh">
      <Button
        variant="ghost"
        size="icon"
        onClick={onBack}
        className="absolute top-6 left-2 z-10"
      >
        <ArrowLeft className="size-6" />
      </Button>
      <div className="container mx-auto space-y-8 px-4 py-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-white">{t("categories")}</h1>
        </div>
        <div className="space-y-4">
          {categories.map(category => (
            <div key={category.id}>
              <Card
                className={`rounded-3xl p-0 ${
                  gameState.selectedCategories.includes(category.id)
                    ? "border-blue-500/50 bg-blue-500/20"
                    : "border-gray-700 bg-gray-900/50 hover:bg-gray-800/60"
                }`}
                onClick={() => toggleCategory(category.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{category.emoji}</div>
                    <div className="flex-1">
                      <div
                        className={`text-lg font-semibold ${
                          gameState.selectedCategories.includes(category.id)
                            ? "text-blue-400"
                            : "text-white"
                        }`}
                      >
                        {t(category.id)}
                      </div>
                    </div>
                    {gameState.selectedCategories.includes(category.id) && (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                        <Check className="size-4 text-white" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          <div className="pt-4">
            <Button
              onClick={onBack}
              disabled={gameState.selectedCategories.length === 0}
              className="h-14 w-full rounded-2xl bg-white text-lg font-semibold text-black hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
            >
              {t("done") || "Done"} ({gameState.selectedCategories.length})
            </Button>
          </div>

          {gameState.selectedCategories.length === 0 && (
            <div className="rounded-xl border border-red-900/30 bg-red-950/20 p-4">
              <p className="text-center text-sm text-red-400">
                {t("selectCategory")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
