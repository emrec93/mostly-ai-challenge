import { test as base } from "@playwright/test";
import { setAuthState } from "../functions/global";

export const test = base.extend({
  page: async ({ browser }, use) => {
    const context = await browser.newContext(setAuthState());
    const page = await context.newPage();
    await use(page);
    await page.goto("/");
  },
});
