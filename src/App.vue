<script setup lang="ts">
import MyPokemon from "./components/my-pokemon.vue";
import ViewVue from "./ViewVue.vue";
</script>

<template>
  <h2>Hello World</h2>
  <ViewVue element="div">Hello from view</ViewVue>
  <br />
  <my-pokemon></my-pokemon>
</template>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
