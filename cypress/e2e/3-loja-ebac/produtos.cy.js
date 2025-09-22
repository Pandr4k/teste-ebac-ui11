///<refence types="cypress"/>  

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').eq(5).click()

        cy.get('#tab-title-additional_information > a').should('exist')
    });
});