///<refence types="cypress"/>  

describe('Funcionalidade cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o cadastro com sucesso', () => {
        
        cy.get('.woocommerce-form > .button').click()
        
    });
});