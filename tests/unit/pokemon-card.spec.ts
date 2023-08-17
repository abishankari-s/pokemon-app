import { mount, createLocalVue } from '@vue/test-utils';
import PokemonCards from '../../src/components/pokemon-cards/pokemon-cards.vue'; // Adjust the path accordingly

const localVue = createLocalVue(); // Create a local Vue instance for testing

describe('PokemonCards', () => {
  let wrapper:any;
  
  beforeEach(() => {
    wrapper = mount(PokemonCards, {
      localVue,
      mocks: {
        $store: {
          state: {
            searchPokemon: [], // Mock your store's state as needed
            pokemon:[{ name: 'bulbasaur',
            "url":"https://pokeapi.co/api/v2/pokemon/1",
             details: { height: 0.7, weight: 6.9, 
             "sprites":{
             "other": {
                        "dream_world": {
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
                            "front_female": null
                        },
                        "home": {
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
                            "front_female": null,
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
                            "front_shiny_female": null
                        },
                        "official-artwork": {
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
                        }
                    }
             },
             "abilities": [
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
                        ] } }],
            //{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/","details":{"height":100,"weight":7}},
            //{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/","details":{"height":70,"weight":3}}], // Mock your store's state as needed
            sortOption: 'default', // Mock your store's state as needed
            searchOption: '', // Mock your store's state as needed
          },
          dispatch: jest.fn(),
          commit: jest.fn(),
        },
        $router: {
          push: jest.fn(),
        },
      },
    });
  });
  
  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('computed cardRows returns correct value', () => {
    const cardRows = wrapper.vm.cardRows;
    expect(cardRows).toEqual([[{ name: 'bulbasaur',
    "url":"https://pokeapi.co/api/v2/pokemon/1",
     details: { height: 0.7, weight: 6.9, 
     "sprites":{
     "other": {
                "dream_world": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
                    "front_female": null
                },
                "home": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
                    "front_shiny_female": null
                },
                "official-artwork": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
                }
            }
     },
     "abilities": [
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
                ] } }]]); 
  });
  
  it('navigateToPokemon method navigates to correct route', () => {
    wrapper.vm.navigateToPokemon('bulbasaur');
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('bulbasaur');
  });
});
