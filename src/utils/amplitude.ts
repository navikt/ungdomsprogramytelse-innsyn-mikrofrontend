import { logAmplitudeEvent } from "@navikt/nav-dekoratoren-moduler";

export const logNavigereEvent = () => {
  logAmplitudeEvent({
    origin: "ungdomsprogramytelse-innsyn-mikrofrontend",
    eventName: "navigere",
    eventData: {
      komponent: "ungdomsprogramytelse-innsyn-mikrofrontend",
    },
  });
};
