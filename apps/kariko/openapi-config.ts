import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "./swagger/kariko-swagger.json",
  apiFile: "./src/store/emptyApi.ts",
  apiImport: "emptySplitApi",
  outputFiles: {
    "./src/store/slices/apiCredentials.ts": {
      filterEndpoints: [/apicredentials/i],
      exportName: "apiCredentialsApi",
    },
    "./src/store/slices/goals.ts": {
      filterEndpoints: [/goals/i],
      exportName: "goalsApi",
    },
    "./src/store/slices/questionnaires.ts": {
      filterEndpoints: [/questionnaires/i],
      exportName: "questionnairesApi",
    },
    "./src/store/slices/careplans.ts": {
      filterEndpoints: [/careplans/i],
      exportName: "careplansApi",
    },
    "./src/store/slices/conversations.ts": {
      filterEndpoints: [/conversations/i],
      exportName: "conversationsApi",
    },
    "./src/store/slices/conversations.ts": {
      filterEndpoints: [/conversations/i],
      exportName: "conversationsApi",
    },
  },
};

export default config;
