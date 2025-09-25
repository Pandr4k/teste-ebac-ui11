///<refence types="cypress"/>  
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')

        cy.get('#tab-title-additional_information > a').should('exist')
    });

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain' , produto)
    });

    it('Deve visitar a página do produto', () => {
        
    });

    it('Deve adcionar produto ao carrinho', () => {
        
    });
});