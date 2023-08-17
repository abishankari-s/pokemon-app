<template>
    <div class="selected-details">
      <button @click="backNavigation">Back</button>
      <h2>Welcome {{ pokemonName }}</h2>
      <div v-for="item in pokemonDetail" :key="item.name">
            <p> <b>Name :</b>{{ item.name }}</p>
            <p> <b>Height : </b>{{ item.details.height }}</p>
            <p> <b> Weight : </b>{{ item.details.weight }}</p>
            <p> <b>Abilties : </b></p>
            <ul>
                <li v-for="abilityValue in item.details.abilities" :key="abilityValue.ability.name">{{ abilityValue.ability.name }}</li>
            </ul>
      </div>
    </div>
  </template>
  <script lang="ts">
  import "./styles/pokemon-detail.scss";
  export default {
    name:"pokemonDetail",
    props: ['pokemonName'],
    computed:{
      pokemonDetail(){
        const items = this.$store.state.searchPokemon;
        //console.log(typeof(this.pokemonName))
        let val = items.filter(function(obj) {
        return obj.name == "bulbasaur";
        });
        
        return val;
      }
    },
    methods:{
      backNavigation(){
        this.$router.push("/")
      }
    }
    
  }
  </script>