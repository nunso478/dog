import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "axios"
export default new Vuex.Store({
  state: {
    info:[],
    favoritos:[],
    venda:[{
      'name':'akita',
      'preco':800,
      'foto':'https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jgp'
    },
    {
      'name':'husky',
      'preco':600,
      'foto':'https://images.dog.ceo/breeds/akita/Akita_Inu_in_Riga_1.jgp'
    },
    {
      'name':'husky',
      'preco':600,
      'foto':'https://images.dog.ceo/breeds/akita/Akita_Inu_in_Riga_1.jgp'
    },
    {
      'name':'husky',
      'preco':600,
      'foto':'https://images.dog.ceo/breeds/akita/Akita_Inu_in_Riga_1.jgp'
    },
    {
      'name':'boxer',
      'preco':600,
      'foto':'https://images.dog.ceo/breeds/akita/Akita_Inu_in_Riga_1.jgp'
    },
  
  ]
  },
  mutations: {
     marcaFavourito(state, item){
       state.favoritos = [item,...state.favoritos]
       localStorage.setItem('favoritoLocal',JSON.stringify(state.favoritos))
     },
     desmarcaFavoritos(state,index){
       state.favoritos.splice(index,1);
       localStorage.setItem('favoritoLocal',JSON.stringify(state.favoritos))
     },
     carregaInfo(state,item){
       state.info = item
     },
     iniciaFavoritos(state,lista){
       state.favoritos = lista
     }
  },
  actions: {
    carregaInfo({commit}){
      let resultados=[]
      let breeds = []
      let carregaBreed = (breed)=>{
        //axios.get('https://images-api.nasa.gov/search?q=earth&media_type=image')
       return axios.get('https://dog.ceo/api/breed/'+ breed +'/images/random')
          .then(
            res => res.data.message //res.data.collection.items
          )
      }
      let infolocalstorage = localStorage.getItem('infolocal')
      if (!infolocalstorage){
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then(
          res =>{
            return res.data.message
          }
        )
        .then(
          res => {
            breeds=[...Object.keys(res)]

            return [...Object.keys(res)]
          }
        )
        .then(
          res=>{
            return axios.all([...res.map(x=>carregaBreed(x))]);
          }
        )
        .then(
          res=>{
           
            for (let [index,item] of res.entries()) {
              resultados.push(
                {
                 'name':breeds[index],
                 'photo':item
                }
              )
            }
            return resultados
          }
        )
        .then(
          res => commit('carregaInfo',resultados),
          localStorage.setItem('infolocal',JSON.stringify(resultados))
        )
      }
      else{
        commit('carregaInfo',JSON.parse(infolocalstorage))
      }
      //axios.get('https://images-api.nasa.gov/search?q=earth&media_type=image')
      

    },
    carregaFavouritos({commit}){
      const favoritoLocalStorage = localStorage.getItem('favoritoLocal')
      if (!favoritoLocalStorage){
        localStorage.setItem('favoritoLocal','[]')
      }
      else{
        commit('iniciaFavoritos',JSON.parse(favoritoLocalStorage))
      }
    }
  },
  modules: {
   
  
  },
  getters:{
    racaVenda: state =>{
      return [...new Set(state.venda.map(x=>x.nome))]
            .map(res =>{
              return{
                      'name': res,
                      'foto': state.info.find(item => item.name === res).photo
             } 
            })
    }
  }
})
