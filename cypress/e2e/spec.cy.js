describe('template spec', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/cart')
    for (let i = 1; i <= 29; i++) {
      const aliasName = `addToCartButton${i}`; //this is for the add to cart button
      const numInput = `quantityInput${i}`; //this is for quantity
      const decrement = `decrementLink${i}`; //this is the minus sign
      const increment = `incrementLink${i}`; //this is the minus sign
      
      cy.get(`.product:nth-child(${i}) .product-action button`).as(aliasName); //we get every element that has add to cart button
      cy.get(`.product:nth-child(${i}) .stepper-input input.quantity`).as(numInput); //every quantity
      cy.get(`.product:nth-child(${i}) .stepper-input a.decrement`).as(decrement);
      cy.get(`.product:nth-child(${i}) .stepper-input a.increment`).as(increment);
    }
  })
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    // cy.get('.product:nth-child(2) .product-action button').click();

    cy.get('.product:first .product-action button').as('firstAddToCartButton');

    cy.get('@firstAddToCartButton').click();




    cy.get('@addToCartButton3').click();
    cy.get('@quantityInput20').clear().type('3'); //testing to see if that's right
    cy.get('@decrementLink20').click();
    cy.get('@incrementLink21').click();
    
  })



  it("US-2", () =>{

    cy.get('@addToCartButton3').click();
    cy.get('@quantityInput20').clear().type('3'); //testing to see if that's right
    cy.get('@decrementLink20').click();
    cy.get('@incrementLink21').click();
    cy.get(".cart-icon").click()
    // cy.get("PROCCEED TO CHECKOUT").click()
    // cy.get("productCartTables").children().length()
  })
})


