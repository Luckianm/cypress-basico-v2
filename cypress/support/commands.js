Cypress.Commands.add('fillMandatoryFieldsAndSubmit', user => {
    cy.get('#firstName').type('Gustavo')
    cy.get('#lastName').type('Soares')
    cy.get('#email').type('gbsouzaofc@gmail.com')
    cy.get('#open-text-area').type('aaaaaaaaaaaaaaabbbbbbbbbbbbbbbbccccccccccsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssscc', {delay:0})
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
})