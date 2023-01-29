import { test } from "../fixture/test";
import { HomePage } from "../pages/Home";
import { devices } from "@playwright/test";

test.describe("Verify that bookmarks are visible on multiple device types", () => {
  // Array of devices to use for tests
  const deviceType = [devices["Desktop Chrome"], devices["iPhone 11 Pro"]];

  // Test to run on each device type
  deviceType.forEach((device, i) => {
    test(`Test 1: Verify bookmarks are visible - ${i}`, async ({ page }) => {
      const homePage = new HomePage(page);

      // Set viewport to device type viewport
      await homePage.setViewportSize(device.viewport);

      // Navigate to homepage
      await homePage.goTo();

      // If device is mobile, then expand the hamburger menu
      if (device.isMobile) {
        await homePage.expandHamburgerMenu();
      }

      // Verify if bookmarks are visible
      await homePage.verifyIfBookmarksAreVisible();
    });
  });
});
