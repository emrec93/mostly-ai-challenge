import { Page } from "@playwright/test";

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
    search: {
      searchBtn: 'button[aria-label="Open search"]',
      input: "Search...",
    },
    submenu: {
      contactPage: "Contact Do you have a question about synthetic data? Send us a message!",
    },
  };

  async goTo() {
    // Go to home page
    await this.page.goto("/");
  }

  async verifyIfBookmarksAreVisible() {
    // Check visibility of all bookmarks
    for (const [key, value] of Object.entries(this.locators.navbar)) {
      (await this.page.waitForSelector(value)).isVisible();
    }
  }

  async searchFor(string: string) {
    // Click search button
    await this.page.locator(this.locators.search.searchBtn).click();

    // Click search input
    await this.page.getByPlaceholder(this.locators.search.input).click();

    // Enter search term
    await this.page.getByPlaceholder(this.locators.search.input).fill(string);

    // Hit Enter on the keyboard
    await this.page.keyboard.press("Enter");

    // Wait for navigation
    await this.page.waitForURL(`/?s=${string}`);
  }

  async navigateToContactPage() {
    // Hover over each of the navbar list elements, otherwise submenu does not render
    for (const [key, value] of Object.entries(this.locators.navbar)) {
      await this.page.locator(value).first().hover();
    }

    // Click to navigate to the contact page
    await this.page.getByRole("link", { name: this.locators.submenu.contactPage }).click();
  }
}
