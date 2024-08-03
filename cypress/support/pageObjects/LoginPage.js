import basePage from "../pageObjects/BasePage"

/**
 * Represents the login page of PriceLabs application
 * This class encapsulates methos and elements specific to login functionality.
 */

class LoginPage{

   //elements on Login page
   elements={
        
        usernameTextBox : () => cy.get('#user_email'),
        passwordTextBox : () => cy.get('#user_password'),
        signInBtn : () => cy.get('[value="Sign in"]'),
    }



   //operations :::

   /**
    * 
    * Type username into the username input box 
    */

    setUserName(username){
        basePage.fillTextBox(this.elements.usernameTextBox(),username)
    }

    /**
    * 
    * Type password into the password input box 
    */

    setPassword(password){
        basePage.fillTextBox(this.elements.passwordTextBox(),password)
    }

     /**
    * 
    * click sign in button  
    */

     clickSignIn(){
        basePage.clickOnWebElement(this.elements.signInBtn())
    }
   
   
   }
   
   export default new LoginPage