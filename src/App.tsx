import useSWRImmutable from "swr/immutable";
import useTranslate from "./language/useTranslate.jsx";
import { fetcher } from "./api/api";
import { apiUrl } from "./api/urls";
import Komponent from "./components/Komponent";
import "@navikt/ds-css";

function App() {
  const { data } = useSWRImmutable(apiUrl, fetcher);

  return (
    <section>
      <Komponent undertittel={useTranslate("microfrontendSubtitle")} tittel={useTranslate("microfrontendTitle")} />
    </section>
  );
}

export default App;
