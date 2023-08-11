import { SIGN_UP_URL, confirmationMessageLocator, defaultTimer, lengthErrorLocator, takenUsernameErrorLocator } from "../support/constants";
import { SIGN_UP_FIELDS } from "../support/types";
import { BasePage } from "./basePage";
import { Locator, Page } from "@playwright/test";

export class SignUpPage extends BasePage {
  constructor(page: Page) {
    super(page)

    this.url = SIGN_UP_URL
  }


  public getInputFieldByName(field: SIGN_UP_FIELDS) {
    return this.page.locator(`#new_user_${field}`)
  }


  public getContinueButton() {
    return this.page.locator(`button[data-qa-selector = "new_user_register_button"]`)
  }

  public getLengthErrorLocator():Locator {
    return this.page.locator(lengthErrorLocator)
  }

  public getUsernameErrorLocator():Locator {
    return this.page.locator(takenUsernameErrorLocator)
  }

  public getConfirmationMessage() {
    return this.page.locator(confirmationMessageLocator)
  }

  public async fillSignUpFields(firstName: string, lastName: string, username: string, email: string, password: string) {
    await (await this.getInputFieldByName(SIGN_UP_FIELDS.FIRST_NAME)).type(firstName, { delay: defaultTimer });
    await (await this.getInputFieldByName(SIGN_UP_FIELDS.LAST_NAME)).type(lastName, { delay: defaultTimer });
    await (await this.getInputFieldByName(SIGN_UP_FIELDS.USERNAME)).type(username, { delay: defaultTimer });
    await (await this.getInputFieldByName(SIGN_UP_FIELDS.EMAIL)).type(email, { delay: defaultTimer });
    await (await this.getInputFieldByName(SIGN_UP_FIELDS.PASSWORD)).type(password, { delay: defaultTimer });
  }

  public async clickContinueButton() {
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