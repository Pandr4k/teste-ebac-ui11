/// <reference types ="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Detalhes daconta', () => {
    beforeEach('', () => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })    
    });

    it('Deve completar detalhes da conta com sucesso', () => {
         const firstName = faker.person.firstName();
         const lastName = faker.person.lastName();
         const displayName = `${firstName}_${lastName}`;
        cy.detalhesConta(firstName , lastName, displayName)
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados')
    });
});