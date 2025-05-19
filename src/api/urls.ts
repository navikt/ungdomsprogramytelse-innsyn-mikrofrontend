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

const INNSYN_UNGDOMSYTELSE_DELTAKER_URL: Record<Environment, string> = {
  local: "https://ungdomsytelse-deltaker.intern.dev.nav.no/ungdomsytelse-deltaker",
  development: "https://ungdomsytelse-deltaker.intern.dev.nav.no/ungdomsytelse-deltaker",
  production: "https://www.nav.no/ungdomsytelse-deltaker", // TODO: Avlar dette før prod.
};

export const innsynUngdomsytelsedDltakerUrl = INNSYN_UNGDOMSYTELSE_DELTAKER_URL[getEnvironment()];
