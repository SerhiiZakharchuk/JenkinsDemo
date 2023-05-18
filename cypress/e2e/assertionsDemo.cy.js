it('Assertions Demo', () => {
  cy.visit('https://example.cypress.io')
  cy.contains('get').click()
  cy.get('#query-btn')
    .should('contain', 'Button')
    .and('have.class', 'query-btn')
    .and('be.visible')
    .and('be.enabled')

  expect(true).to.be.true

  let name = 'cypress'
  expect(name).to.be.equal('cypress')

  assert.equal('5', 4+1, 'Equal!')
  assert.strictEqual('5', 4+1, 'Equal!')
})