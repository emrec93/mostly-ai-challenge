import { expect, Page } from "@playwright/test";
import { devices } from "@playwright/test";

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
      hamburgerMenuIcon: "#code_block-3032-16",
      arrow: ".arrow-added",
    },
  };

  async goTo() {
    // Go to home page
    await this.page.goto("/");
  }

  async setViewportSize(viewport: { width: number; height: number }) {
    // Set viewport to desired device
    await this.page.setViewportSize(viewport);
  }

  async expandHamburgerMenu() {
    await this.page.locator(this.locators.submenu.hamburgerMenuIcon).click();
  }

  async verifyIfBookmarksAreVisible() {
    // Check visibility of all bookmarks
    for (const [key, value] of Object.entries(this.locators.navbar)) {
      const bookmark = await this.page.waitForSelector(value);
      expect(await bookmark.isVisible()).toBeTruthy();
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
    const width = this.page.viewportSize()?.width as number;
    if (width > 767) {
      for (const [key, value] of Object.entries(this.locators.navbar)) {
        await this.page.locator(value).first().hover();
      }
    }

    // Click to navigate to the contact page
    await this.page.getByRole("link", { name: this.locators.submenu.contactPage }).click();
  }

  async expandSubmenu() {
    await this.page.locator(this.locators.submenu.arrow).nth(3).click();
  }
}
