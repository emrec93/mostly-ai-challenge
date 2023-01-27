// Home.ts
import { expect, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  locators = {
    navbar: {
      platform: 'li:has-text("Platform")',
      syntheticData: 'li:has-text("Synthetic Data")',
      resources: 'li:has-text("Resources")',
      company: 'li:has-text("Company")',
    },
  };

  async goTo() {
    await this.page.goto("/");
  }

  async verifyIfBookmarksAreVisible() {
    for (const [key, value] of Object.entries(this.locators.navbar)) {
      console.log(`\nLooking for ${key} bookmark\n`);
      (await this.page.waitForSelector(value)).isVisible();
    }
  }
}
