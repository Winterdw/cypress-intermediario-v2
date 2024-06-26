describe('Login', () => {
  beforeEach(()=>{    
    cy.visit('http://localhost')

  })
  it('login', () => {
    cy.login()
    cy.get('.qa-user-avatar').should('be.visible')
  })  
})