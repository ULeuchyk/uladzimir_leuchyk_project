import { Page } from "@playwright/test";
import { PAGES } from "../support/types";
import { HomePage } from "./homePage";
import { NewsletterPage } from "./newsletterPage";
import { SignUpPage } from "./signUpPage";

export class PageFactory {
    static getPage(page: Page, pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return new HomePage(page);
            case PAGES.NEWSLETTER:
                return new NewsletterPage(page);
            case PAGES.SIGNUP:
                return new SignUpPage(page);
            default:
                return new HomePage(page);

        }
    }
}