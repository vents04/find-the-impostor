export type Locale = "en" | "de" | "bg";

export interface Language {
  value: Locale;
  label: string;
  flag: string;
  nativeName?: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  {
    value: "en",
    label: "English",
    flag: "🇺🇸",
    nativeName: "English",
  },
  {
    value: "de",
    label: "Deutsch",
    flag: "🇦🇹",
    nativeName: "Deutsch",
  },
  {
    value: "bg",
    label: "Български",
    flag: "🇧🇬",
    nativeName: "Български",
  },
  // {
  //   value: "fr",
  //   label: "Français",
  //   flag: "🇫🇷",
  //   nativeName: "Français"
  // },
];

export const getLanguageByLocale = (locale: Locale): Language | undefined => {
  return SUPPORTED_LANGUAGES.find(lang => lang.value === locale);
};

export const getLanguageLabel = (locale: Locale): string => {
  return getLanguageByLocale(locale)?.label || locale;
};

export const getLanguageFlag = (locale: Locale): string => {
  return getLanguageByLocale(locale)?.flag || "🌐";
};

export const isValidLocale = (locale: string): locale is Locale => {
  return SUPPORTED_LANGUAGES.some(lang => lang.value === locale);
};
