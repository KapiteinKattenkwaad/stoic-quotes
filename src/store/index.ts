import { createDirectStore } from 'direct-vuex'
import axios from 'axios'

const { store } = createDirectStore({
  state: {
    count: 0,
    quotes: [],
    randomQuotes: []
  },
  getters: {
    countString(state) {
      if (state.count === 0) return 'zero'
      if (state.count === 1) return 'once'
      return `${state.count} times`
    },
    getQuotes(state) {
      return state.quotes
    },
    getRandomQuote(state) {
      return state.randomQuotes
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    SET_QUOTES: (state, quotes) => (state.quotes = quotes),
    SET_RANDOM_QUOTE: state => {
      state.randomQuotes =
        state.quotes[Math.floor(Math.random() * state.quotes.length)]
    }
  },
  actions: {
    fetchMovies({ commit }) {
      axios({
        method: 'get',
        url: 'src/assets/quotes.json'
      }).then(response => {
        commit('SET_QUOTES', response.data)
        console.log('quotes', response.data)
      })
    }
  }
})

export default store.original

export type Store = typeof store
export const useStore = (): Store => store
