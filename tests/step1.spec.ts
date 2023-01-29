import { test } from "../fixture/test";
import { HomePage } from "../pages/Home";
import { devices } from "@playwright/test";
import { deviceName } from "../functions/global";

// Array of devices to use for tests
const deviceType = [devices["Desktop Chrome"], devices["iPhone 11 Pro"]];

// Test to run on each device type's viewport
deviceType.forEach((device) => {
  test(`Test 1: Verify bookmarks are visible - ${deviceName(device)} viewport`, async ({ page }) => {
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
