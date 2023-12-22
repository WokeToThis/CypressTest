describe('User Story 3. Search for Products', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      })
    it('searches for products', () => {
        cy.get('.search-keyword').type('cucumber')
        cy.get('.search-button').click()
    })

})