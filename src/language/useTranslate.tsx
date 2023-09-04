import { useContext } from "react";
import { LanguageContext, Language } from "./LanguageProvider";

type Text = {
  [key: string]: { [key in Language]: string };
};

const text: Text = {
  microfrontendTitle: {
    nb: "Dine pleiepenger",
    nn: "Dine pleiepenger",
    en: "Your nursing allowance",
  },
  microfrontendSubtitle: {
    nb: "Naviger til dine pleiepenger",
    nn: "Naviger til dine pleiepenger",
    en: "Navigate to your nursing allowance",
  },
};

export default function useTranslate(id: string) {
  const language = useContext(LanguageContext);
  return text[id][language];
}
