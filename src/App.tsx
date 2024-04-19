import "@navikt/ds-css";
import Komponent from "./components/Komponent";
import useTranslate from "./language/useTranslate.jsx";

function App() {
  return (
    <section>
      <Komponent undertittel={useTranslate("overskrift")} tittel={useTranslate("underoverskrift")} />
    </section>
  );
}

export default App;
