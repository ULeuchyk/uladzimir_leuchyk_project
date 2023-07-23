import { expect, test } from "@playwright/test"
import { PageFactory } from "../src/pages/pageFactory"
import {  BUTTON_SIGN, COMPANY_DROP_DOWN, MENU_BUTTONS_WITHOUT_DROP_DOWN, MENU_BUTTONS_WITH_DROP_DOWN, PAGES, SIGN_UP_FIELDS } from "../src/support/types"
import { SIGN_UP_URL, alreadyTakenUsername, homePageTitle, lengthErrorElement, lengthErrorText, newsletterPageTitle, searchObject, takenUsernameErrorElement, tooLongFirstname, validEmail, validFirstName, validLastName, validPassword, validUsername, verifyButton } from "../src/support/constants"
import { HomePage } from "../src/pages/homePage";
import { NewsletterPage } from "../src/pages/newsletterPage";
import { SignUpPage } from "../src/pages/signUpPage";


test.describe.configure({mode: "serial"});

let homePage: HomePage;
let newsletterPage: NewsletterPage;
let signUpPage: SignUpPage;


test.describe("GitLab general tests", async () => {
   test.beforeAll(async({browser}) => {
    const page = await browser.newPage();
    homePage = PageFactory.getPage(page, PAGES.HOME)  as HomePage;
    newsletterPage = PageFactory.getPage(page, PAGES.NEWSLETTER)  as NewsletterPage;
    signUpPage = PageFactory.getPage(page, PAGES.SIGNUP) as SignUpPage;

   })
        
  
    test("Should display Home page title correctly", async() => {
        await homePage.visitPage();
        await (await homePage.getAcceptCookiesButton()).click();
        await (await homePage.navigationBar.getSimpleNavigationButtonByInnerText(MENU_BUTTONS_WITHOUT_DROP_DOWN.HOME)).click();
        await homePage.waitUntilTitleContains(homePageTitle);
    })

     test("Should correctly display Newsletter page from Company drop-down list", async() => {
        await (await homePage.navigationBar.getExtendedNavigationButtonByInnerText(MENU_BUTTONS_WITH_DROP_DOWN.COMPANY)).hover();
        await (await homePage.navigationBar.getDropDownButtonByInnerText(COMPANY_DROP_DOWN.NEWSLETTER)).click();
        await newsletterPage.waitUntilTitleContains(newsletterPageTitle);
    })

    test("Should search item correctly", async() => {
        await newsletterPage.navigationBar.searchFor(searchObject);
        await newsletterPage.waitForSearchResultsVisibility(searchObject);
    })

    test("Should open Sign Up page correctly", async() => {
        await (await newsletterPage.navigationBar.getSignButton(BUTTON_SIGN.UP)).click();
        signUpPage.waitUntilUrlContains(SIGN_UP_URL)
    })
})
    test.describe("GitLab SignUp tests", async () => {
        test.beforeEach(async({browser}) => {
            await signUpPage.clearInputField(await signUpPage.getInputFields(SIGN_UP_FIELDS.FIRST_NAME))
            await signUpPage.clearInputField(await signUpPage.getInputFields(SIGN_UP_FIELDS.LAST_NAME))
            await signUpPage.clearInputField(await signUpPage.getInputFields(SIGN_UP_FIELDS.USERNAME))
            await signUpPage.clearInputField(await signUpPage.getInputFields(SIGN_UP_FIELDS.EMAIL))
            await signUpPage.clearInputField(await signUpPage.getInputFields(SIGN_UP_FIELDS.PASSWORD))
        })

    test("Should display warning message if First name has more than 127 letter", async() => {
        await signUpPage.fillFirstNameField(tooLongFirstname)
        const errorMessage = await signUpPage.getTextOfElement(lengthErrorElement);
        expect(errorMessage).toContain(lengthErrorText)
    })

    test("Should display error message if Username is already taken", async() => {
        await signUpPage.performSignUp(validFirstName, validLastName, alreadyTakenUsername, validEmail, validPassword)
        await signUpPage.waitForElementVisibility(takenUsernameErrorElement)
    })

    test("Should register new user", async() => {
        await signUpPage.performSignUp(validFirstName, validLastName, validUsername, validEmail, validPassword)
        await signUpPage.waitForElementVisibility(verifyButton)
    })
})