<template>
  <div class="card-container">
    <div class="card-container__sort-select">
      <label>Sort by:</label>
      <select v-model="sortOption">
        <option value="default">Default</option>
        <option value="name">Name</option>
        <option value="height">Height</option>
        <option value="weight">Weight</option>
      </select>
      <label>Search :</label>
      <input v-model="searchOption" placeholder="Search cards" />
    </div>
    <br>
    <div v-if="cardRows.length == 0" class="card-container__empty-row">
      <h2> No Pokemon for this result</h2>
    </div>
    <div v-for="(row, index) in cardRows" :key="index" class="card-container__card-row">
      <div v-for="item in row" :key="item.name" class="card-container__card-row__card">
        <img :src=item.details.sprites.other.home.front_default :alt="item.name" @click="navigateToPokemon(item.name)">
        <p class="card-container__card-row__card__card-title">{{ item.name }}</p>
        <div class="card-container__card-row__card__card-descrp">
          <p> <b>Height : </b>{{ item.details.height }}</p>
          <p> <b> Weight : </b>{{ item.details.weight }}</p>
          <p> <b>Abilties : </b></p>
          <ul>
            <li v-for="abilityValue in item.details.abilities" :key="abilityValue.ability.name">{{
              abilityValue.ability.name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import "./styles/pokemon-cards.scss"

export default {
  name:"pokemonCards",
  computed: {
    cardRows() {
      let items = this.$store.state.searchPokemon;
      if (items.length == 0 && this.searchOption.length == 0) {
        items = this.$store.state.pokemon;
        console.log(this.sortOption)
        this.$store.commit('SET_SORTED_POKEMON_DETAIL', this.sortOption);
      }
      const itemsPerRow = 4;
      const rows = [];
      for (let i = 0; i < items.length; i += itemsPerRow) {
        rows.push(items.slice(i, i + itemsPerRow));
      }
      return rows;
    },
    sortOption: {
      get() {
        return this.$store.state.sortOption;
      },
      set(value: string) {
        this.$store.commit('SET_SORTED_POKEMON_DETAIL', value);
      },
    },
    searchOption: {
      get() {
        return this.$store.state.searchOption;
      },
      set(value: string) {
        this.$store.commit('SET_SEARCH_POKEMON_DETAIL', value);
      },
    },
  },
  methods: {
    navigateToPokemon(pokemon: string) {
      this.$router.push(pokemon)
    }

  }
};
</script>
  