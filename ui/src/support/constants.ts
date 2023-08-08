import { generateRandomString } from "./utils"

export const BASE_URL = "https://about.gitlab.com/"
export const SIGN_UP_URL = "https://gitlab.com/-/trial_registrations/new"
export const defaultTimer = 50
export const searchButton = `//button[contains(@aria-label ,'Search')]`
export const confirmationMessage = `//div[contains(text(), "You must confirm your email within 1 days of signing up. If you do not confirm your email in this timeframe, your account will be deleted and you will need to sign up for GitLab again.")]`
export const homePageTitle = "The DevSecOps Platform | GitLab"
export const newsletterPageTitle = "Contact | GitLab"
export const searchObject = "API"
export const validFirstName = "Vola"
export const validLastName = "Dominos"
export const validUsername = generateRandomString(10)
export const validEmail = generateRandomString(5)+"@tesdfsadfsdfst.gultest"
export const validPassword = "1234TYdas"
export const tooLongFirstname = generateRandomString(128)
export const alreadyTakenUsername = 'Bear'
export const lengthErrorElement = `//div[@class ="col form-group"]//p[@class = 'gl-field-error']`
export const lengthErrorText = "First name is too long (maximum is 127 characters)" 
export const takenUsernameErrorElement = `//li[contains(text(), 'Username has already been taken')]`



  
 