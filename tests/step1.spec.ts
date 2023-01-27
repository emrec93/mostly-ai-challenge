import { test } from "@playwright/test";

test("Test 1: Verify bookmarks are visible", async ({ page }) => {
  await page.goto("/");
});
