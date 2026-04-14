import LanguageSelector from "./language-selector";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { setUserLocale } from "@/src/lib/locale";
import { Settings } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SettingsModal() {
  const t = useTranslations("SetupPhase");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-6 right-2 z-10"
        >
          <Settings className="size-6" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("settings")}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <Label className="text-lg font-semibold text-white">
            {t("language")}
          </Label>
          <LanguageSelector
            triggerClassName="h-14 rounded-2xl"
            onLanguageChange={locale => setUserLocale(locale)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
