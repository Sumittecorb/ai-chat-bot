const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isDevlopment =
    phase === PHASE_PRODUCTION_BUILD && process.env.SERVER_MODE === "1";
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.SERVER_MODE === "2";
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.SERVER_MODE === "3";
  const env = {
    RESTURL_SESSIONS: (() => {
      if (isDev)
        return {
          BASE_URL: "https://ai-chat-bot-v1nz.onrender.com/",
          DEVELOPMENT_ENV_VARIABLE: process.env.DEVELOPMENT_ENV_VARIABLE,
          ACTIONCABLE_URL: "ws://52.60.58.77:3000/cable",
          WEBSITE_URL: "http://52.60.58.77",
          STRIPE_KEY:
            "pk_test_51NNrKrSFPGceK1Mz303vBJkaxMgq3LGX6p2fbRo0PnycSIoiUsSgVwjTCBGJFY4BJrzH6YfKZev0mz3J1U8DgrhB00v55q5jkZ",
          NEXT_PUBLIC_API_BASE_URL: "https://ai-chat-bot-v1nz.onrender.com/",
        };
      if (isDevlopment)
        return {
          BASE_URL: "https://ai-chat-bot-v1nz.onrender.com/",
          DEVELOPMENT_ENV_VARIABLE: process.env.DEVELOPMENT_ENV_VARIABLE,
          ACTIONCABLE_URL: "ws://52.60.58.77:3000/cable",
          WEBSITE_URL: "http://52.60.58.77",
          STRIPE_KEY:
            "pk_test_51NNrKrSFPGceK1Mz303vBJkaxMgq3LGX6p2fbRo0PnycSIoiUsSgVwjTCBGJFY4BJrzH6YfKZev0mz3J1U8DgrhB00v55q5jkZ",
          NEXT_PUBLIC_API_BASE_URL: "https://ai-chat-bot-v1nz.onrender.com/",
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
module.exports = {
  async redirects() {
    return [
      {
        source: "/chat",
        destination: "/",
        permanent: true,
        has: [
          {
            type: "header",
            key: "Authorization",
          },
        ],
        // headers: [
        //   {
        //     key: 'Authorization',
        //     value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTY4YzU3YTc2ODY1ZDJmNTIyNWJiMCIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNjkwODg0NTUxLCJleHAiOjE2OTM0NzY1NTF9.gs6sucSYEToZkGat0Qf0uQ8ynd1FBwGm3Oii4jlSFo0',
        //   },
        // ],

      },
    ];
  },
};
