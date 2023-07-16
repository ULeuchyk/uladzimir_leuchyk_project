import { EmailError, 
    NameError,
     PasswordError, 
     RepeatPasswordError, 
     emailPattern, 
     latinLettersAndSpacesPattern, 
     minPasswordLength, 
     passwordPattern } from "./constants/constants";


export class RegistrationForm {
   private name!: string;
   private email!: string; 
   private password!: string;
   private repeatPassword!: string;


    constructor(name: string, email: string, password: string, repeatPassword: string ) {
        this.name = name
        this.email = email
        this.password = password
        this.repeatPassword = repeatPassword
    }

    public setUserName () {
        if (this.name.match(latinLettersAndSpacesPattern)) {
          return("Name is Valid");
        } else {
            throw new Error(NameError);
        }
    }

    public setUserEmail () {
        if (this.email.match(emailPattern)) {
          return("Email is Valid");
        } else {
            throw new Error(EmailError);
        }
    }

    public setUserPassword () {
        if (this.password.length >= minPasswordLength && this.password.match(passwordPattern)) {
          return("Password is Valid");
        } else {
            throw new Error(PasswordError);
        }
    }

    public setRepeatPassword () {
        if((this.repeatPassword.length >= minPasswordLength && this.repeatPassword.match(passwordPattern)) && this.password === this.repeatPassword) {
          return("Password confirmed.");
        } else {
          throw new Error(RepeatPasswordError);
        }
    }
}


