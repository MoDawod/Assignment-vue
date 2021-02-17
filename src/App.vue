<template>
  <div id="app">
    <div><h2> Hurtigruten Assigment </h2></div>
    <SearchBar></SearchBar>
    <searchResults></searchResults>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import SearchResults from './components/SearchResults.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    SearchResults
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
