import React from "react";
import { BodyLong, Heading, LinkPanel } from "@navikt/ds-react";
import "./Komponent.css";

interface Props {
  tittel: string;
  undertittel: string;
}

const Komponent = ({ tittel, undertittel }: Props) => {
  return (
    <div className="komponent">
      <LinkPanel border href="https://sif-innsyn.intern.dev.nav.no/familie/sykdom-i-familien/soknad/innsyn/">
        <LinkPanel.Title>{tittel}</LinkPanel.Title>
        <LinkPanel.Description>{undertittel}</LinkPanel.Description>
      </LinkPanel>
    </div>
  );
};

export default Komponent;
