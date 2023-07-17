
import { RegistrationForm } from '../src/registration-form';
import {
  NameError,
  PasswordError,
  RepeatPasswordError,
  validName,
  validEmail,
  validRepeatPassword,
  invalidName,
  invalidEmail,
  invalidRepeatPassword,
  invalidShortPassword,
  validPasswordMoreThenEightCharacters,
  validNameWithSpaces,
  validPasswordEightCharacters,
  invalidPasswordWithoutSpecialSymbol,
  invalidPasswordWithoutCapital,
  invalidPasswordWithoutdigit,
  EmailError,
} from '../src/constants/constants';

describe('RegistrationForm Positive Tests', () => {
  let registrationForm: RegistrationForm;

  beforeEach(() => {
    registrationForm = new RegistrationForm(
      validName,
      validEmail,
      validPasswordMoreThenEightCharacters,
      validRepeatPassword
    );
  });

  it('should validate a valid name', () => {
    const name = registrationForm.setUserName();
    expect(name).toBe('Name is Valid');
  });

  it('should validate a valid email', () => {
    const email = registrationForm.setUserEmail();
    expect(email).toBe('Email is Valid');
  });

  it('should validate a valid password', () => {
    const password = registrationForm.setUserPassword();
    expect(password).toBe('Password is Valid');
  });

  it('should validate a matching repeat password', () => {
    const repeatPass = registrationForm.setRepeatPassword();
    expect(repeatPass).toBe('Password confirmed.');
  });

  it('should validate a valid name with spaces', () => {
    registrationForm = new RegistrationForm(
      validNameWithSpaces,
      validEmail,
      validPasswordMoreThenEightCharacters,
      validRepeatPassword
    );
    const name = registrationForm.setUserName();
    expect(name).toBe('Name is Valid');
  });

  it('should validate a valid password with the length = 8 characters', () => {
    registrationForm = new RegistrationForm(
        validName,
        validEmail,
        validPasswordEightCharacters,
        validRepeatPassword
      );
    const password = registrationForm.setUserPassword();
    expect(password).toBe('Password is Valid');
  });
  
  it('should throw an error for a name that contains digits', () => {
    registrationForm = new RegistrationForm(
      invalidName,
      validEmail,
      validPasswordMoreThenEightCharacters,
      validRepeatPassword
    );
    expect(() => {
      registrationForm.setUserName();
    }).toThrow(NameError);
  });

  it('should throw an error for an email without "at" symbol ', () => {
    registrationForm = new RegistrationForm(
      validName,
      invalidEmail,
      validPasswordMoreThenEightCharacters,
      validRepeatPassword
    );
    expect(() => {
      registrationForm.setUserEmail();
    }).toThrow(EmailError);
  });

  it('should throw an error for a password without an uppercase letter', () => {
    registrationForm = new RegistrationForm(
      validName,
      validEmail,
      invalidPasswordWithoutCapital,
      validRepeatPassword
    );
    expect(() => {
      registrationForm.setUserPassword();
    }).toThrow(PasswordError);
  });

  it('should throw an error for a password without a digit', () => {
    registrationForm = new RegistrationForm(
      validName,
      validEmail,
      invalidPasswordWithoutdigit,
      validRepeatPassword
    );
    expect(() => {
      registrationForm.setUserPassword();
    }).toThrow(PasswordError);
  });

  it('should throw an error for a password without a special symbol', () => {
    registrationForm = new RegistrationForm(
      validName,
      validEmail,
      invalidPasswordWithoutSpecialSymbol,
      validRepeatPassword
    );
    expect(() => {
      registrationForm.setUserPassword();
    }).toThrow(PasswordError);
  });

  it('should throw an error for a short password', () => {
    registrationForm = new RegistrationForm(
      validName,
      validEmail,
      invalidShortPassword,
      validRepeatPassword
    );
    expect(() => {
      registrationForm.setUserPassword();
    }).toThrow(PasswordError);
  });

  it('should throw an error for non-matching passwords', () => {
    registrationForm = new RegistrationForm(
      validName,
      validEmail,
      validPasswordMoreThenEightCharacters,
      invalidRepeatPassword
    );
    expect(() => {
      registrationForm.setRepeatPassword();
    }).toThrow(RepeatPasswordError);
  });
});