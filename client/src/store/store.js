import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    getAllArticles: function (state) {
      axios.get('http://localhost:3000/article/')
      .then(articles => {
        console.log(articles);
        state.articles.push(articles)
      })
    }
  }
})