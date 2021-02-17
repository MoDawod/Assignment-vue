import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ships:[]
  },
  mutations: {
    updateShips: (state, arr) => {
      if(arr[0]) state.ships = arr;
    },
    deleteShips: state => state.ships = []
  },
  actions: {
  },
  modules: {
  }
})
