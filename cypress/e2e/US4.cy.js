describe('User Story 4. Top Deals', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      })
    it('searches for products', () => {
        cy.get('.search-keyword').type('cucumber')
        cy.get('.search-button').click()
    })

})