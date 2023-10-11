import React from "react";
import { BodyLong, Heading } from "@navikt/ds-react";
import { ChevronRightIcon, PersonTallShortIcon } from "@navikt/aksel-icons";
import { innsynDinePleiepengerUrl } from "../api/urls";
import styles from "./Komponent.module.css";

interface Props {
  tittel: string;
  undertittel: string;
}

const Komponent = ({ tittel, undertittel }: Props) => {
  return (
    <a className={styles.container} href={innsynDinePleiepengerUrl}>
      <div className={styles.ikonOgTekstContainer}>
        <div aria-hidden>
          <PersonTallShortIcon title="a11y-title" fontSize="3rem" />
        </div>
        <div>
          <Heading size="small" level="2">
            {tittel}
          </Heading>
          <BodyLong size="medium">{undertittel}</BodyLong>
        </div>
      </div>
      <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="24px" />
    </a>
  );
};

export default Komponent;
