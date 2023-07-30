import { defaultTimer, searchButton } from "../../support/constants"
import { Page } from "@playwright/test"
import { BUTTON_SIGN, COMPANY_DROP_DOWN, CONTACT_US_DROP_DOWN, MENU_BUTTONS_WITHOUT_DROP_DOWN, MENU_BUTTONS_WITH_DROP_DOWN } from "../../support/types";


export class NavigationBar {
   constructor(protected readonly page: Page) { }

   public async getSimpleNavigationButtonByInnerText(text: MENU_BUTTONS_WITHOUT_DROP_DOWN) {
      return this.page.locator(`//div[@class ='navigation']//a[contains(@name ,"${text}")]`)
   }

   public async getExtendedNavigationButtonByInnerText(text: MENU_BUTTONS_WITH_DROP_DOWN) {
      return this.page.locator(`//button[contains(@name ,"${text}")]`)
   }

   public async getDropDownButtonByInnerText(text: COMPANY_DROP_DOWN | CONTACT_US_DROP_DOWN) {
      return this.page.locator(`//span[@class='slp-text-body2'][text() = "${text}"]`)
   }

   public getSearchButton() {
      return this.page.locator(searchButton)
   }


   public async getSearchField() {
      await (this.getSearchButton()).click();
      return this.page.locator(`//div[@id="be-navigation-desktop"]//input[@placeholder="Search"]`);
   }

   public async searchFor(text: string) {
      const searchField = this.getSearchField();
      await (await searchField).type(text, { delay: defaultTimer });
      await this.page.keyboard.press("Enter");
   }

   public getSignButton(text: BUTTON_SIGN) {
      return this.page.locator(`//a[contains(@name ,"${text}")]`)
   }

   public getSearchResultTitle() {
      return this.page.locator(`//div[contains(@class, 'search-results__header--title')]`);
   }
}
