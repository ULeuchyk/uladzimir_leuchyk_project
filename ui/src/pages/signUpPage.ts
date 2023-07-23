import { SIGN_UP_URL, defaultTimer } from "../support/constants";
import { SIGN_UP_FIELDS } from "../support/types";
import { BasePage } from "./basePage";
import { Locator, Page } from "@playwright/test";

export class SignUpPage extends BasePage {
    constructor(page: Page) {
super(page)

this.url = SIGN_UP_URL
    }


    public async getInputFields(field: SIGN_UP_FIELDS) { 
        return  this.page.locator(`#new_user_${field}`)
      }

    public async clearInputField(locator: string | Locator) {
        const inputElement = typeof locator === 'string' ? await this.page.locator(locator) : locator;
        await inputElement.fill('');
      }

    get getContinueButton() { 
        return  this.page.locator(`button[type = "submit"]`)
      }
      
    public async fillFirstNameField( firstName: string,) {
        await (await this.getInputFields(SIGN_UP_FIELDS.FIRST_NAME)).type(firstName, {delay:defaultTimer});
      }


    public async performSignUp( firstName: string, lastName: string, username: string, email: string, password: string ) {
    await (await this.getInputFields(SIGN_UP_FIELDS.FIRST_NAME)).type(firstName, {delay:defaultTimer});
    await (await this.getInputFields(SIGN_UP_FIELDS.LAST_NAME)).type(lastName, {delay:defaultTimer});
    await (await this.getInputFields(SIGN_UP_FIELDS.USERNAME)).type(username, {delay:defaultTimer});
    await (await this.getInputFields(SIGN_UP_FIELDS.EMAIL)).type(email, {delay:defaultTimer});
    await (await this.getInputFields(SIGN_UP_FIELDS.PASSWORD)).type(password, {delay:defaultTimer});
    await  this.getContinueButton.click()
      }





}