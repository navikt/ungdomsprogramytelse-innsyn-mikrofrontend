const isProduction = window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("www.intern.dev.nav.no");

export const getEnvironment = () => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};

type EnvUrl = { development: string; production: string; local: string };

const INNSYN_DINE_PLEIEPENGER_URL: EnvUrl = {
  local: "https://sif-innsyn.intern.dev.nav.no/familie/sykdom-i-familien/soknad/innsyn",
  development: "https://sif-innsyn.intern.dev.nav.no/familie/sykdom-i-familien/soknad/innsyn",
  production: "https://www.nav.no/familie/sykdom-i-familien/soknad/innsyn",
};

export const innsynDinePleiepengerUrl = INNSYN_DINE_PLEIEPENGER_URL[getEnvironment()];
