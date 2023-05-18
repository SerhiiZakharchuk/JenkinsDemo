import { LoginPage } from './pages/loginPage.cy';

const baseUrl = 'https://opensource-demo.orangehrmlive.com/';
const userName = 'Admin';
const password = 'admin123';
const loginPage = new LoginPage();

describe('All Login Tests', () => {
  beforeEach(() => {
    cy.log('I`m inside e2e file');
    cy.visit(baseUrl);
  });

  it('Login test 1', () => {
    loginPage.enterUsername(userName);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
  });

  it('Login test 2', () => {
    loginPage.enterUsername('admin');
    loginPage.enterPassword(password);
    loginPage.clickLogin();
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
  });
});
