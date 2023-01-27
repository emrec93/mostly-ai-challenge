import { test } from "../fixture/test";
import { HomePage } from "../pages/Home";
import { ContactPage } from "../pages/Contact";

test(`Test 3: Contact form`, async ({ page, browserName }) => {
  const homePage = new HomePage(page);
  const contactPage = new ContactPage(page);

  await homePage.goTo();
  await homePage.navigateToContactPage();
  await contactPage.enterFormDetails();
  await contactPage.hoverOverSendMessageButton(browserName);
});
