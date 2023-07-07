describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1200, 720)
    cy.visit('https://service.damastage.com/#/dplogin')
    cy.get(':nth-child(1) > label').type("nareshtwo")
    cy.get(':nth-child(2) > label').type("P@ssw0rd123")
    cy.get('#login-form > :nth-child(3) > .btn').click()
    cy.get('.space-even > :nth-child(1)')
    cy.get('.card-footer > .btn').click()
    cy.get('form.ng-pristine > .ng-invalid').type("1")
    cy.get('[name="otp2"]').type("1")
    cy.get('[name="otp3"]').type("1")
    cy.get('[name="otp4"]').type("1")
    cy.get('[name="otp5"]').type("1")
    cy.get('[name="otp6"]').type("1")
    cy.get('.card-footer').click()
    cy.contains('nareshtwo')


  })
})