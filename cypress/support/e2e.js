// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import 'cypress-mochawesome-reporter/register';

import lp from '../support/pageObjects/LoginPage'

/**
 * 
 * function to login to pricelabs in which methods are being called from login page class
 */

function login (username,password){
    //login to price labs account
    cy.visit(Cypress.env("baseUrl"));
    lp.setUserName(username);
    lp.setPassword(password);
    lp.clickSignIn();

}

//custom command for login to application (calling login function and verifying successful login )

Cypress.Commands.add('loginToPL' , (username,password) =>{
    login(username,password);
    cy.url().should('include', 'pricing')
})

// Alternatively you can use CommonJS syntax:
// require('./commands')