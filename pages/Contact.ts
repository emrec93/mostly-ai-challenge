import { expect, Page } from "@playwright/test";

export class ContactPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  locators = {
    form: {
      fnameInputPlaceholder: "John",
      lnameInputPlaceholder: "Smith",
      emailPlaceholder: "john.smith@company.com",
      numberPlaceholder: "Mobile phone number*",
      organisationPlaceholder: "Your Organization*",
      combobox: "combobox",
      country: "Country/Region*",
      method: "How did you hear about MOSTLY AI?*",
      marketingLabel: "Marketing offers and updates.*",
      sendMsgBtn: '[value="SEND MESSAGE"]',
      heading: "h2",
    },
  };

  async fillName(fname: string, lname: string) {
    await this.page.getByPlaceholder(this.locators.form.fnameInputPlaceholder, { exact: true }).fill(fname);
    await this.page.getByPlaceholder(this.locators.form.lnameInputPlaceholder, { exact: true }).fill(lname);
  }

  async fillEmail(email: string) {
    await this.page.getByPlaceholder(this.locators.form.emailPlaceholder).fill(email);
  }

  async fillNumber(number: string) {
    await this.page.getByLabel(this.locators.form.numberPlaceholder).fill(number);
  }

  async fillOrganisation(organisation: string) {
    await this.page.getByLabel(this.locators.form.organisationPlaceholder).fill(organisation);
  }

  async selectCountry(country: string) {
    await this.page.getByRole("combobox", { name: this.locators.form.country }).selectOption(country);
  }

  async selectmethod(option: string) {
    await this.page.getByRole("combobox", { name: this.locators.form.method }).selectOption(option);
  }

  async fillMessageBox(msg: string) {
    await this.page
      .getByPlaceholder(
        "How can we help you? Drop us a few lines so we can put you in touch with our specialist on your topic."
      )
      .fill(msg);
  }

  async checkLabel() {
    await this.page.getByLabel(this.locators.form.marketingLabel).check();
  }

  async enterFormDetails() {
    // Hovering over the heading completes the rendering of the form for some reason, doesn't load otherwise
    await this.page.locator(this.locators.form.heading).hover();

    // Fill name and surname
    await this.fillName("John", "Doe");

    // Fill email
    await this.fillEmail("john.doe@company.com");

    // Fill number
    await this.fillNumber("0777777777");

    // Fill organisation
    await this.fillOrganisation("my-organisation");

    // Select country
    await this.selectCountry("United Kingdom");

    // Select method
    await this.selectmethod("Other");

    // Fill message box
    await this.fillMessageBox("This is a test message");

    // Check label
    await this.checkLabel();
  }

  async hoverOverSendMessageButton(browserName: string) {
    // Capture send message button
    const btn = this.page.locator(this.locators.form.sendMsgBtn);

    // Screenshot before hover
    await btn.screenshot({ path: `./screenshots/btn-before-${browserName}.png` });

    // Hover over button
    await btn.hover();

    // Screenshot after hover
    await btn.screenshot({ path: `./screenshots/btn-after-${browserName}.png` });
  }
}
