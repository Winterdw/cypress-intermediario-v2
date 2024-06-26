describe('Login', () => {
  beforeEach(()=>{    
    cy.visit('http://localhost')

  })
  it('successfully', () => {
    cy.login()
    

    cy.get('.qa-user-avatar').should('be.visible')
  })
})