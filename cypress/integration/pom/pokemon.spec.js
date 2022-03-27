import pokemonPage from '../../pages/pokemonPage'

describe('POM Implementation', () => {

    beforeEach(() => {
        cy.visit('https://emblue-qa-challenge.vercel.app/')
    });

    it('List Pokemons in the system', () => {
        pokemonPage.listPokemons();
        pokemonPage.elements.titlePokemons().should('have.text', 'Pokemons')
    });

    it('Create new pokemon', () => {
        pokemonPage.createNewPokemon('2','Charmander','Orange','13');
    });

    it('Validate pokemon created', () => {
        pokemonPage.listPokemons();
        pokemonPage.elements.newPokemon().should('have.text', 'Charmander')
    });



})

