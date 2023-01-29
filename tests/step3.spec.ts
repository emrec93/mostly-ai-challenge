import { test } from "../fixture/test";
import { HomePage } from "../pages/Home";
import { ContactPage } from "../pages/Contact";
import { devices } from "@playwright/test";
import { deviceName } from "../functions/global";

// Array of devices to use for tests
const deviceType = [devices["iPhone 11 Pro"], devices["Desktop Chrome"]];

// Test to run on each device type's viewport
deviceType.forEach((device) => {
  test(`Test 3: Contact form - ${deviceName(device)} viewport`, async ({ page, browserName }) => {
    const homePage = new HomePage(page);
    const contactPage = new ContactPage(page);

    // Set viewport to device type viewport
    await homePage.setViewportSize(device.viewport);

    await homePage.goTo();

    if (device.isMobile) {
      homePage.expandHamburgerMenu();
      homePage.expandSubmenu();
    }

    await homePage.navigateToContactPage();
    await contactPage.enterFormDetails();
    await contactPage.hoverOverSendMessageButton(browserName); // passing browser name for screenshot
  });
});
