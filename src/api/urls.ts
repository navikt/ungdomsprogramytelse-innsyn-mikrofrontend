const currentUrl = window.location.href;

type Environment = "production" | "development" | "local";

const ENVIRONMENTS: Record<Environment, string> = {
  production: "www.nav.no",
  development: "www.intern.dev.nav.no",
  local: "", // This can be an empty string since we default to "local" if none match
};

const getEnvironment = (): Environment => {
  for (const [env, url] of Object.entries(ENVIRONMENTS)) {
    if (currentUrl.includes(url)) {
      return env as Environment;
    }
  }
  return "local";
};

const INNSYN_DINE_PLEIEPENGER_URL: Record<Environment, string> = {
  local: "https://dine-pleiepenger.intern.dev.nav.no/familie/sykdom-i-familien/soknad/innsyn",
  development: "https://dine-pleiepenger.intern.dev.nav.no/familie/sykdom-i-familien/soknad/innsyn",
  production: "https://www.nav.no/familie/sykdom-i-familien/soknad/innsyn",
};

export const innsynDinePleiepengerUrl = INNSYN_DINE_PLEIEPENGER_URL[getEnvironment()];
