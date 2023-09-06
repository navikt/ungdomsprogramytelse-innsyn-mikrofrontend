import React from "react";
import { LinkPanel } from "@navikt/ds-react";
import "./Komponent.css";
import { PersonTallShortIcon } from "@navikt/aksel-icons";

interface Props {
  tittel: string;
  undertittel: string;
}

const Komponent = ({ tittel, undertittel }: Props) => {
  return (
    <div className="komponent">
      <LinkPanel border href={import.meta.env.VITE_INNSYN_DINE_PLEIEPENGER_URL}>
        <LinkPanel.Title>
          <div className="flex items-center space-x-4">
            <div className="text-6xl flex-shrink-0 grid place-content-center">
              <PersonTallShortIcon title="a11y-title" fontSize="3rem" />
            </div>
            <div>
              <LinkPanel.Title id="AboutExpansionCardTitle">{tittel}</LinkPanel.Title>
            </div>
          </div>
        </LinkPanel.Title>
        <LinkPanel.Description>{undertittel}</LinkPanel.Description>
      </LinkPanel>
    </div>
  );
};

export default Komponent;
