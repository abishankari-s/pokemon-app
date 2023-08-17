import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import  { StoreOptions }  from 'vuex';

Vue.use(Vuex);
interface IItem{
  details:any,
  name:string,
  url:string
}


interface RootState {
  pokemon: IItem[];
  sortOption: string;
  searchOption:string;
  searchPokemon : IItem[];
}

const store:  StoreOptions <RootState> = {

// export default new Vuex.Store({
  state: {
    pokemon:[],
    sortOption : "",
    searchOption:"",
    searchPokemon:[]
  },
  mutations: {
    SET_POKEMON(state, pokemon) {
      state.pokemon = pokemon;
      //state.searchPokemon=pokemon;
    },
    SET_SEARCH_POKEMON(state) {
      state.searchPokemon = state.pokemon;
      //state.searchPokemon=pokemon;
    },
    SET_SORTED_POKEMON_DETAIL(state, sortOption) {
      state.sortOption = sortOption; 
      if(state.searchPokemon.length==0&&state.searchOption=="")
      state.searchPokemon=state.pokemon;
        state.searchPokemon.sort((a, b) => {
          if (state.sortOption === 'name') {
            return a.name.localeCompare(b.name);
          } else if (state.sortOption === 'height') {
            return parseFloat(a.details.height) - parseFloat(b.details.height);
          } else if (state.sortOption === 'weight') {
            return parseFloat(a.details.weight) - parseFloat(b.details.weight);
          } else {
            return parseFloat(a.details.order) - parseFloat(b.details.order)
          }
          return 0;
        });
    },
    SET_SEARCH_POKEMON_DETAIL(state, searchOption) {
      state.searchOption = searchOption; 
      const query = state.searchOption.toLowerCase();
      const filteredCards = state.pokemon.filter(card =>
        card.name.toLowerCase().includes(query) ||
        (card.details.height >= parseFloat(query) && card.details.height <= parseFloat(query)) ||
        (card.details.weight >= parseFloat(query) && card.details.weight <= parseFloat(query))
      );
      state.searchPokemon=filteredCards;
    },
  },
  actions: {
    async fetchPokemonAndDetails({ commit }) {
      try {
        const itemsResponse = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        const items = itemsResponse.data.results;

        const detailsPromises = items.map(async (item: { name: any; }) => {
          const detailsResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`);
          return {
            ...item,
            details: detailsResponse.data,
          };
        });

        const itemsWithDetails = await Promise.all(detailsPromises);

        commit('SET_POKEMON', itemsWithDetails);
      } catch (error) {
        console.error('Error fetching items and details:', error);
      }
    }
  }
};

export default new Vuex.Store<RootState>(store);
