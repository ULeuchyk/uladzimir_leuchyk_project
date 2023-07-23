import { expect, Page } from "@playwright/test";

export class BasePage {
    protected url!: string;

    constructor(protected readonly page: Page) {}

    public async visitPage() {
        await this.page.goto(this.url)
    }
      
    public waitUntilUrlContains (url: string) {
        expect(this.page.url()).toContain(url);
    }

    public async waitForElementVisibility(locator: string) {
        await this.page.waitForSelector(locator, { state: 'visible' });
     }

    public async waitUntilTitleContains(title: string | RegExp) {
       await expect(this.page).toHaveTitle(title);
    }
   
    public async getAcceptCookiesButton(){
        return this.page.locator(`button#onetrust-accept-btn-handler`);
    }

    public async getTextOfElement(locator:string) {
        const elementText = await this.page.waitForSelector(locator);
        const textOfElement = await elementText?.textContent();
        return textOfElement;
    }

    public async waitForSearchResultsVisibility(text: string){
        await this.page.waitForSelector(`//div[contains(@class, 'search-results__header--title')][contains(text(), "${text}")]`, { state: 'visible' });
    }
}