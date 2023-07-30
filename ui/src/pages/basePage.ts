import { expect, Page } from "@playwright/test";

export class BasePage {
    protected url!: string;

    constructor(protected readonly page: Page) { }

    public async visitPage() {
        await this.page.goto(this.url)
    }

    public waitUntilUrlContains(url: string) {
        expect(this.page.url()).toContain(url);
    }

    public async waitUntilTitleContains(title: string | RegExp) {
        await expect(this.page).toHaveTitle(title);
    }

    public getAcceptCookiesButton() {
        return this.page.locator(`button#onetrust-accept-btn-handler`);
    }

    public getElementByLocator(locator: string) {
        return this.page.locator(locator);
    }

}