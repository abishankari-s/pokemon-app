<template>
    <div class="pokemon-app">
   <HeaderComponent :headerValue=headerValue></HeaderComponent>
   <PokemonCards></PokemonCards>
   </div>

</template>
<script lang="ts">
import Vue from "vue";
import HeaderComponent from "./header/header-component.vue";
import PokemonCards from "./pokemon-cards/pokemon-cards.vue";
   export default Vue.extend({
       name:"pokemon-main",
       components :{
           HeaderComponent,
           PokemonCards
       },
      data(){
       return{
       headerValue:"Pokemon application"
       };
      },
      created(){
        this.fetchItems();
    },
    methods: {
      fetchItems() {
        this.$store.dispatch('fetchPokemonAndDetails');
        console.log(this.$store.state.pokemon)
      }
    },
   })
</script>