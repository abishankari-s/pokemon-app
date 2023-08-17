import { mount, createLocalVue } from '@vue/test-utils';
import PokemonDetail from '../../src/components/pokemon-detail/pokemon-detail.vue'; // Adjust the path accordingly

const localVue = createLocalVue(); // Create a local Vue instance for testing

describe('PokemonDetail', () => {
  let wrapper:any;
  
  beforeEach(() => {
    wrapper = mount(PokemonDetail, {
      localVue,
      propsData: {
        pokemonName: 'bulbasaur', // Pass the required prop
      },
      mocks: {
        $store: {
          state: {
            searchPokemon: [
              { name: 'bulbasaur', details: { height: 0.7, weight: 6.9, "abilities": [
                {
                    "ability": {
                        "name": "overgrow",
                        "url": "https://pokeapi.co/api/v2/ability/65/"
                    },
                    "is_hidden": false,
                    "slot": 1
                },
                {
                    "ability": {
                        "name": "chlorophyll",
                        "url": "https://pokeapi.co/api/v2/ability/34/"
                    },
                    "is_hidden": true,
                    "slot": 3
                }
            ] } }
            ],
          },
        },
        $router: {
          push: jest.fn(),
        },
      },
    });
  });
  
  it('computed pokemonDetail returns correct value', () => {
    const expectedPokemonDetail = [
      { name: 'bulbasaur', details: { height: 0.7, weight: 6.9, "abilities": [
        {
            "ability": {
                "name": "overgrow",
                "url": "https://pokeapi.co/api/v2/ability/65/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "chlorophyll",
                "url": "https://pokeapi.co/api/v2/ability/34/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ] } }
    ];
    
    const pokemonDetail = wrapper.vm.pokemonDetail;
    expect(pokemonDetail).toEqual(expectedPokemonDetail);
  });
  
  it('backNavigation method navigates to the correct route', () => {
    wrapper.vm.backNavigation();
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/');
  });
});
