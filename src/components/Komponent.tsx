import React from "react";
import { BodyLong, Heading } from "@navikt/ds-react";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import { innsynDinePleiepengerUrl } from "../api/urls";
import styles from "./Komponent.module.css";
import PleiepengerIcon from "../icons/PleiepengerIcon";
import { logNavigereEvent } from "../utils/amplitude";

interface Props {
  tittel: string;
  undertittel: string;
}

const Komponent = ({ tittel, undertittel }: Props) => {
  return (
    <a className={styles.container} href={innsynDinePleiepengerUrl} onClick={logNavigereEvent}>
      <div className={styles.ikonOgTekstContainer}>
        <div aria-hidden>
          <PleiepengerIcon />
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
