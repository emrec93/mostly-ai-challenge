import { test } from "../fixture/test";
import { HomePage } from "../pages/Home";

test("Test 1: Verify bookmarks are visible", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goTo();
  await homePage.verifyIfBookmarksAreVisible();
});
