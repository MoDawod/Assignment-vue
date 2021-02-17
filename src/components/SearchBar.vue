<template>
  <div>
    <form>
      <input
        type="text"
        placeholder="Search"
        v-model="searchQuery"
        @input="fetchShips"
      />
      <button>
        <img
          v-if="searchQuery"
          src="../assets/cross.svg"
          @click="handleClick"
          class="icon"
        />
        <img v-else src="../assets/magnifying-glass.svg" alt="" class="icon" />
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleClick() {
      this.searchQuery = "";
    },
    fetchShips() {
      if (this.searchQuery) {
        setTimeout(() => {
          let url = "http://localhost:4000/api/ships/" + this.searchQuery;
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              if (data[0]) this.$store.commit("updateShips", data);
              else this.$store.commit("deleteShips");
            });
        }, 200);
      } else {
        this.$store.commit("deleteShips");
      }
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: row;
  border: 1px solid grey;
  padding: 5px;
  max-width: 300px;
}

input {
  flex-grow: 2;
  border: none;
}

input:focus,
input:active {
  outline: none;
  border-color: transparent;
}

button {
  border: none;
  background-color: white;
}

.button:active,
.button:focus {
  outline: none;
}

.icon {
  width: 30px;
  height: 30px;
}
</style>
