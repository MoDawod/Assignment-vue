<template>
  <div>
    <ul v-if="ships[0]">
      <li v-for="(ship, index) in ships" :key="index">{{ ship.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    computed:{
        ships(){
            return this.$store.state.ships; 
        }
    }
};
</script>

<style>
li{
    text-align: left;
}
</style>
