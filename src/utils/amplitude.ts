import { logAmplitudeEvent } from "@navikt/nav-dekoratoren-moduler";

export const logNavigereEvent = () => {
  logAmplitudeEvent({
    origin: "k9-innsyn-dine-pleiepenger-mikrofrontend",
    eventName: "navigere",
    eventData: {
      komponent: "k9-innsyn-dine-pleiepenger-mikrofrontend",
    },
  });
};
