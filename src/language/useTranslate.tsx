import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

const text = {
  overskrift: {
    nb: "Ungdomsprogrammet",
    nn: "Ungdomsprogrammet",
    en: "Youth Program",
  },
  underoverskrift: {
    nb: "Oversikt over saken din",
    nn: "Oversikt over saka di",
    en: "Overview of your case",
  },
};

export default function useTranslate(id: keyof typeof text) {
  const language = useContext(LanguageContext);
  return text[id][language];
}
