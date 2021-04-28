import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favoritos:[],
    venda:[{
      'nome':'akita',
      'preco':800,
      'foto':'https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jgp'
    },
    {
      'nome':'husky',
      'preco':600,
      'foto':'https://images.dog.ceo/breeds/akita/Akita_Inu_in_Riga_1.jgp'
    },
    {
      'nome':'husky',
      'preco':600,
      'foto':'https://images.dog.ceo/breeds/akita/Akita_Inu_in_Riga_1.jgp'
    },
    {
      'nome':'husky',
      'preco':600,
      'foto':'https://images.dog.ceo/breeds/akita/Akita_Inu_in_Riga_1.jgp'
    },
    {
      'nome':'boxer',
      'preco':600,
      'foto':'https://images.dog.ceo/breeds/akita/Akita_Inu_in_Riga_1.jgp'
    },
  
  ]
  },
  mutations: {
    //favoritos
  },
  actions: {
  },
  modules: {
  },
  getters:{
    racaVenda: state =>{
      return [...new Set(state.venda.map(x=>x.nome))]
    }
  }
})
