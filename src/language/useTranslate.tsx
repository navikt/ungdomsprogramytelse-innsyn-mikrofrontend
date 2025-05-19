import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

const text = {
  overskrift: {
    nb: "Dine pleiepenger",
    nn: "Dine pleiepenger",
    en: "Your nursing allowance",
  },
  underoverskrift: {
    nb: "Naviger til dine pleiepenger",
    nn: "Naviger til dine pleiepenger",
    en: "Navigate to your nursing allowance",
  },
};

export default function useTranslate(id: keyof typeof text) {
  const language = useContext(LanguageContext);
  return text[id][language];
}
