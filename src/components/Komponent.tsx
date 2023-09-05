import React from "react";
import { LinkPanel } from "@navikt/ds-react";
import "./Komponent.css";

interface Props {
  tittel: string;
  undertittel: string;
}

const Komponent = ({ tittel, undertittel }: Props) => {
  return (
    <div className="komponent">
      <LinkPanel border href={import.meta.env.VITE_INNSYN_DINE_PLEIEPENGER_URL}>
        <LinkPanel.Title>{tittel}</LinkPanel.Title>
        <LinkPanel.Description>{undertittel}</LinkPanel.Description>
      </LinkPanel>
    </div>
  );
};

export default Komponent;
