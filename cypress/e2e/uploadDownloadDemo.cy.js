/// ＜reference types="cypress-downloadfile"/＞

it('File Upload Demo', () => {
  cy.visit('https://trytestingthis.netlify.app')
  cy.get('#myfile').attachFile('myPhoto.png')
})

it('File Download Demo', () => {
  cy.downloadFile('https://en.wikipedia.org/static/images/icons/wikipedia.png',  './cypress/fixtures' ,'wiki.png')
})