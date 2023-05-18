before(()=>{
  cy.fixture('example.json').as('test_data')
})

it('Reading files using fixture', () => {
  cy.fixture('example').then(data=> {
    cy.log(data.name)
    cy.log(data.email)
    cy.log(data.body)
  })

  //cy.log(this.test_data.name)
});

it('Reading file using readFile()', ()=>{
  cy.readFile('./cypress/fixtures/example.json').then(data=> {
    cy.log(data.name)
    cy.log(data.email)
  })
})

it('Writing file using writeFile()', ()=>{
  cy.writeFile('./cypress/fixtures/myCreatedFile.json', {"name": "Serhii", "age": 29})
  cy.writeFile('./cypress/fixtures/myCreatedFile.json', ',', {flag: 'a+'})
  cy.writeFile('./cypress/fixtures/myCreatedFile.json', {"role": "AQA", "language": "Eng"}, {flag: 'a+'})
})