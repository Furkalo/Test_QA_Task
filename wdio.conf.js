export const config = {
  runner: "local",
  specs: ["./test/features/*.feature"],

  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "cucumber",
  reporters: ["spec"],
  cucumberOpts: {
    require: ["./test/step-definitions/login.steps.js"],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    name: [],
    snippets: true,
    source: true,
    strict: false,
    tagExpression: "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
};
