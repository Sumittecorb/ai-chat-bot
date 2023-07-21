const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isDevlopment =
    phase === PHASE_PRODUCTION_BUILD && process.env.SERVER_MODE === "1";
  const env = {
    RESTURL_SESSIONS: (() => {
      if (isDev)
        return {
          BASE_URL: process.env.NEXT_BASE_URL,
          STRIPE_KEY: process.env.NEXT_STRIPE_KEY,
          REDIRECT_URL: process.env.NEXT_REDIRECT_URL,
        };
      if (isDevlopment)
        return {
         BASE_URL: process.env.NEXT_BASE_URL,
          STRIPE_KEY: process.env.NEXT_STRIPE_KEY,
          REDIRECT_URL: process.env.NEXT_REDIRECT_URL,
        };

      return "RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
  };
  const compress = true;
  return {
    env,
    compress,
  };
};
