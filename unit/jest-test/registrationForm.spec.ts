
import { RegistrationForm } from '../src/registration-form';
import {
  NameError,
  PasswordError,
  RepeatPasswordError,
  validName,
  validEmail,
  invalidName,
  invalidEmail,
  invalidRepeatPassword,
  invalidShortPassword,
  validPasswordMoreThenEightCharacters,
  validNameWithSpaces,
  validPasswordEightCharacters,
  invalidPasswordWithoutSpecialSymbol,
  invalidPasswordWithoutCapital,
  EmailError,
  invalidPasswordWithoutDigit
} from '../src/constants/constants';

describe('RegistrationForm Tests', () => {
  let registrationForm: RegistrationForm;

  it('should register new user with valid credentials', () => {
    registrationForm = new RegistrationForm(
      validName,
      validEmail,
      validPasswordMoreThenEightCharacters,
      validPasswordMoreThenEightCharacters
    );
    expect(registrationForm.submitForm()).toBe(`Congratulations! New user ${validName} is created`);
  });

  it('should register new user if entered name has spaces', () => {
    registrationForm = new RegistrationForm(
      validNameWithSpaces,
      validEmail,
      validPasswordMoreThenEightCharacters,
      validPasswordMoreThenEightCharacters
    );
    expect(registrationForm.submitForm()).toBe(`Congratulations! New user ${validNameWithSpaces} is created`);
  });

  it('should register new user if the password = 8 characters', () => {
    registrationForm = new RegistrationForm(
      validName,
      validEmail,
      validPasswordEightCharacters,
      validPasswordEightCharacters
    );
    expect(registrationForm.submitForm()).toBe(`Congratulations! New user ${validName} is created`);
  });

  it('should throw an error for a name that contains digits', () => {
    registrationForm = new RegistrationForm(
      invalidName,
      validEmail,
      validPasswordMoreThenEightCharacters,
      validPasswordMoreThenEightCharacters
    );
    expect(registrationForm.submitForm()).toBe(NameError);
  });

  it('should throw an error for an email without "at" symbol ', () => {
    registrationForm = new RegistrationForm(
      validName,
      invalidEmail,
      validPasswordMoreThenEightCharacters,
      validPasswordMoreThenEightCharacters
    );
    expect(registrationForm.submitForm()).toBe(EmailError);
  });

  it('should throw an error for a short password', () => {
    registrationForm = new RegistrationForm(
      validName,
      validEmail,
      invalidShortPassword,
      invalidShortPassword
    );
    expect(registrationForm.submitForm()).toBe(PasswordError);
  });

  it('should throw an error for non-matching passwords', () => {
    registrationForm = new RegistrationForm(
      validName,
      validEmail,
      validPasswordMoreThenEightCharacters,
      invalidRepeatPassword
    );
    expect(registrationForm.submitForm()).toBe(RepeatPasswordError);
  });

  it('should throw an error if name and email are invalid', () => {
    registrationForm = new RegistrationForm(
      invalidName,
      invalidEmail,
      validPasswordMoreThenEightCharacters,
      validPasswordMoreThenEightCharacters,
    );
    expect(registrationForm.submitForm()).toBe(NameError + "\n" + EmailError);
  });

  it('should throw an error if name and password are invalid', () => {
    registrationForm = new RegistrationForm(
      invalidName,
      validEmail,
      invalidPasswordWithoutDigit,
      invalidPasswordWithoutDigit
    );
    expect(registrationForm.submitForm()).toBe(NameError + "\n" + PasswordError);
  });

  it('should throw an error if email and password are invalid', () => {
    registrationForm = new RegistrationForm(
      validName,
      invalidEmail,
      invalidPasswordWithoutSpecialSymbol,
      invalidPasswordWithoutSpecialSymbol
    );
    expect(registrationForm.submitForm()).toBe(EmailError + "\n" + PasswordError);
  });

  it('should throw an error if name, email and password are invalid', () => {
    registrationForm = new RegistrationForm(
      invalidName,
      invalidEmail,
      invalidPasswordWithoutCapital,
      invalidPasswordWithoutCapital
    );
    expect(registrationForm.submitForm()).toBe(NameError + "\n" + EmailError + "\n" + PasswordError);
  });
});