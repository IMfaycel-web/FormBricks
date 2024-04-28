import { defineConfig, devices } from "@playwright/test";


require("dotenv").config({ path: ".env" });

export default defineConfig({
  testDir: "./apps/web/playwright",

  fullyParallel: true,


  retries: process.env.CI ? 2 : 0,

  timeout: 120000,


  maxFailures: process.env.CI ? undefined : 1, // Allow more failures in CI to avoid cascading shutdowns


  workers: process.env.CI ? 4 : undefined,


  reporter: [["html", { outputFolder: "playwright-report", open: "never" }]],
  /* Shared setting f all:/ */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://localhost:3000",

    trace: "on-first-retry",
    permissions: ["clipboard-read", "clipboard-write"],
    screenshot: "only-on-failure", // Capture screenshots only on test failure
    video: "retain-on-failure", // Optionally record video on failure
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      testMatch: "**/*.spec.ts",
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: "Mobile Chrome",
    //   use: { ...devices["Pixel 5"] },
    // },
    // {
    //   name: "Mobile Safari",
    //   use: { ...devices["iPhone 12"] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: "Microsoft Edge",
    //   use: { ...devices["Desktop Edge"], channel: "msedge" },
    // },
    // {
    //   name: "Google Chrome",
    //   use: { ...devices["Desktop Chrome"], channel: "chrome" },
    // },
  ],
});
