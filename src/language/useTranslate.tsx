import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

const text = {
  overskrift: {
    nb: "Din ungdomsytelse",
    nn: "Din ungdomsytelse",
    en: "Your youth allowance",
  },
  underoverskrift: {
    nb: "Naviger til din ungdomsytelse",
    nn: "Naviger til din ungdomsytelse",
    en: "Navigate to your youth allowance",
  },
};

export default function useTranslate(id: keyof typeof text) {
  const language = useContext(LanguageContext);
  return text[id][language];
}
