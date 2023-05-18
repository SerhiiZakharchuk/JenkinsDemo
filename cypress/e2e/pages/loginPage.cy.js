export class LoginPage {
  usernameLocator =
    ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
  passwordLocator =
    ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
  loginBtnLocator = '.oxd-button';

  enterUsername(username) {
    cy.get(this.usernameLocator).type(username);
  }

  enterPassword(password) {
    cy.get(this.passwordLocator).type(password);
  }

  clickLogin() {
    cy.get(this.loginBtnLocator).click();
  }
}
