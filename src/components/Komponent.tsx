import { ChevronRightIcon } from "@navikt/aksel-icons";
import { BodyLong, Heading } from "@navikt/ds-react";
import { innsynUngdomsytelsedDltakerUrl } from "../api/urls";
import UngdomsprogrammetIcon from "../icons/UngdomsprogrammetIcon";
import { logNavigereEvent } from "../utils/amplitude";
import styles from "./Komponent.module.css";

interface Props {
  tittel: string;
  undertittel: string;
}

const Komponent = ({ tittel, undertittel }: Props) => {
  return (
    <a className={styles.container} href={innsynUngdomsytelsedDltakerUrl} onClick={logNavigereEvent}>
      <div className={styles.ikonOgTekstContainer}>
        <div aria-hidden>
          <UngdomsprogrammetIcon />
        </div>
        <div>
          <Heading size="small" level="2">
            {tittel}
          </Heading>
          <BodyLong size="medium">{undertittel}</BodyLong>
        </div>
      </div>
      <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="1.5rem" />
    </a>
  );
};

export default Komponent;
