import { expect, Page } from "@playwright/test";

export class SearchPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  locators = {
    headline: "h1 >> nth=0",
    searchedTerm: "h1 >> nth=1",
  };

  async verifyNoResultsWereFoundFor(string: string) {
    // Check both headers are visible
    await expect(this.page.locator(this.locators.headline)).toBeVisible();
    await expect(this.page.locator(this.locators.searchedTerm)).toBeVisible();

    // Check they text content is as expected
    expect(await this.page.locator(this.locators.headline).innerText()).toBe("Sorry, no results for:\n");
    expect(await this.page.locator(this.locators.searchedTerm).innerText()).toBe(string);
  }
}
