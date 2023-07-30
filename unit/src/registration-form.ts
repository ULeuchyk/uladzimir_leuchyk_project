import { EmailError, 
    NameError,
     PasswordError, 
     RepeatPasswordError, 
     emailPattern, 
     latinLettersAndSpacesPattern, 
     minPasswordLength, 
     passwordPattern } from "./constants/constants";


export class RegistrationForm {

    constructor(protected name: string, protected email: string, protected password: string, protected repeatPassword: string ) {
  
    }

    public submitButton(): string {
     let errorMessage = '';

      if (!this.name.match(latinLettersAndSpacesPattern)) {
        errorMessage += NameError + "\n";
      }
      if (!this.email.match(emailPattern)) {
        errorMessage += EmailError + "\n";
      }
      if (this.password.length < minPasswordLength || !this.password.match(passwordPattern)) {
        errorMessage += PasswordError + "\n";
      }
      if (this.repeatPassword !== this.password) {
        errorMessage += RepeatPasswordError;
      }
      if (errorMessage) {
      return errorMessage = errorMessage.trim();
    }
      else {

      return `Congratulations! New user ${this.name} is created`;
    }
  }
}


    const reg = new RegistrationForm("a", "sadadadepae@mail.cr", "11Word1@", "11Word1@")
console.log(reg.submitButton())