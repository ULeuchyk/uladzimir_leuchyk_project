import { BASE_URL } from "../support/constants";
import { BasePage } from "./basePage";
import { Page } from "@playwright/test";
import { NavigationBar } from "./elements/navigationBar";

export class NewsletterPage extends BasePage {
    public navigationBar: NavigationBar;
    constructor(page: Page) {
        super(page);
        this.navigationBar = new NavigationBar(page);
        this.url = `${BASE_URL}company/contact/`
    }
}
