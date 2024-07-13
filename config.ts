import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://docs.dify.ai/getting-started/cloud",
  match: "https://docs.dify.ai/getting-started/**",
  selector: "main",
  maxPagesToCrawl: 300,
  outputFileName: "dify-gettingstarted.json",
  maxTokens: 100000000,
};

