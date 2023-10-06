import { ServiceAuth, ServiceOS, createAzurePlaywrightConfig } from "@azure/playwright";
import { defineConfig } from "@playwright/test";
import config from "./playwright.config";

export default defineConfig(
  config,
  createAzurePlaywrightConfig(config, {
    exposeNetwork: "<loopback>",
    connectTimeout: 3 * 60 * 1000, // 3 minutes
    os: ServiceOS.LINUX,
    serviceAuthType: ServiceAuth.ACCESS_TOKEN,
  })
);
