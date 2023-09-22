const { generateUser } = require('../support/generateUser');

describe('Demoblaze', () => {
  before(() => {
    cy.visit('');
  });

  it('should provide an ability to sign up', () => {
    const user = generateUser();
    cy.visit('');
    cy.get('#signin2').click();
    cy.get('#sign-username').type(user.username); 
    cy.get('#sign-password').type(user.password);
    cy.get('.btn').contains('Sign up').click();
    
    cy.on('window:alert', (confirmText) => {
      expect(confirmText).to.equal('Sign up successful.');
    });
  });

  it('should provide an ability to login', () => {
    const username = 'loginTest';
    const password = 'login1234';

    cy.visit('');
    cy.get('#login2').click();

    cy.wait(1000);
    cy.get('#loginusername').type(username);
    cy.get('#loginpassword').type(password);

    cy.get('[onclick="logIn()"]').click();
  });

  it('should provide an ability to add product Samsung Galaxy s6  to the cart', () => {
    cy.login();
    cy.contains('.list-group-item', 'Phones').click();
    cy.contains('.hrefch', 'Samsung galaxy s6').click();
    cy.contains('.btn-success', 'Add to cart').click();
    cy.on('window:aler', (str) => {
      expect(str).to.equal('Product added');
    });
  });
})
