describe('kumpulan test case (testSuite)', function(){


    it ('tc-1', function(){
    cy.visit('https://www.demoblaze.com/index.html');
    cy.contains('Sign up').click({force:true});
    cy.get('#signin2').click({force:true});
    cy.get('#sign-username').type('vio').should('have.value', 'vio');
    cy.get('#sign-password').type('password.').should('have.value','password.')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
    
    
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
     })