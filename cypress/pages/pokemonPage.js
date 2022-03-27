class PokemonPage {

    elements = {
        btnListPokemon: () => cy.contains('.btn-primary', 'Show all pokemons'),
        btnNewPokemon: () => cy.contains('.btn-primary', 'Create new pokemon'), 
        inputID: () => cy.get('#idInput'),
        inputName: () => cy.get('#nameInput'),
        inputColor: () => cy.get('#colorInput'),
        inputLevel: () => cy.get('#levelInput'),
        btnCreateNewPokemon: () => cy.contains('.btn-primary', 'Create new Pokemon'),
        titlePokemons: () => cy.contains('Pokemons'),
        titleNewPokemon: () => cy.contains('New Pokemon'),
        newPokemon: () => cy.contains('Charmander'),
        titleOfPage: () => cy.contains('Capsule Corp - Tracking System')

    }

    listPokemons(){
        this.elements.btnListPokemon().click()
    }

    newPokemon(){
        this.elements.btnNewPokemon().click()
    }

    createNewPokemon(id,name,color,level){
        this.elements.btnNewPokemon().click()
        this.elements.inputID().type(id)
        this.elements.inputName().type(name)
        this.elements.inputColor().type(color)
        this.elements.inputLevel().type(level)
        this.elements.btnCreateNewPokemon().click

    }

}

module.exports = new PokemonPage();
