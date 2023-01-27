import { test } from "../fixture/test";
import { HomePage } from "../pages/Home";
import { SearchPage } from "../pages/Search";

const searchTerm = "sythetic";

test(`Test 2: Search for incorrect term: "${searchTerm}"`, async ({ page }) => {
  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);

  await homePage.goTo();
  await homePage.searchFor(searchTerm);
  await searchPage.verifyNoResultsWereFoundFor(searchTerm);
});
