it('Google test', () => {
  cy.visit('https://google.com')
  cy.get('#APjFqb', {timeout: 5000}).type('Automation Step by Step{Enter}')
  cy.wait(2000)
  cy.get('.MUFPAc > :nth-child(2) > a').click()
  //cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
})