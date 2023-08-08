import { SIGN_UP_URL, confirmationMessage, defaultTimer, lengthErrorElement, takenUsernameErrorElement } from "../support/constants";
import { SIGN_UP_FIELDS } from "../support/types";
import { BasePage } from "./basePage";
import { Page } from "@playwright/test";

export class SignUpPage extends BasePage {
  constructor(page: Page) {
    super(page)

    this.url = SIGN_UP_URL
  }


  public async getInputFieldByName(field: SIGN_UP_FIELDS) {
    return this.page.locator(`#new_user_${field}`)
  }


  public getContinueButton() {
    return this.page.locator(`button[data-qa-selector = "new_user_register_button"]`)
  }

  public getLengthError() {
    return this.page.locator(lengthErrorElement)
  }

  public getUsernameError() {
    return this.page.locator(takenUsernameErrorElement)
  }

  public getConfirmationMessage() {
    return this.page.locator(confirmationMessage)
  }

  public async fillFirstNameField(firstName: string,) {
    await (await this.getInputFieldByName(SIGN_UP_FIELDS.FIRST_NAME)).type(firstName, { delay: defaultTimer });
  }

  public async performSignUp(firstName: string, lastName: string, username: string, email: string, password: string) {
    await this.fillFirstNameField(firstName);
    await (await this.getInputFieldByName(SIGN_UP_FIELDS.LAST_NAME)).type(lastName, { delay: defaultTimer });
    await (await this.getInputFieldByName(SIGN_UP_FIELDS.USERNAME)).type(username, { delay: defaultTimer });
    await (await this.getInputFieldByName(SIGN_UP_FIELDS.EMAIL)).type(email, { delay: defaultTimer });
    await (await this.getInputFieldByName(SIGN_UP_FIELDS.PASSWORD)).type(password, { delay: defaultTimer });
    await this.getContinueButton().click()
  }

  public async cleanSignUpInputFields() {
    await (await this.getInputFieldByName(SIGN_UP_FIELDS.FIRST_NAME)).fill('')
    await (await this.getInputFieldByName(SIGN_UP_FIELDS.LAST_NAME)).fill('')
    await (await this.getInputFieldByName(SIGN_UP_FIELDS.USERNAME)).fill('')
    await (await this.getInputFieldByName(SIGN_UP_FIELDS.EMAIL)).fill('')
    await (await this.getInputFieldByName(SIGN_UP_FIELDS.PASSWORD)).fill('')
  }

}