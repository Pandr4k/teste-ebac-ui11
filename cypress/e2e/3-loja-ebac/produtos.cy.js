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

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain' , produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain' , 'Zeppelin Yoga Pant')
    });

    it.only('Deve adcionar produto ao carrinho', () => {
        let qntd = 5
        produtosPage.buscarProduto('Zeppelin Yoga Pant')
        produtosPage.addProdutoCarrinho('36', 'Blue', qntd)
        cy.get('.woocommerce-message').should('contain' ,`${qntd} × “Zeppelin Yoga Pant” foram adicionados no seu carrinho.` )
    });
});