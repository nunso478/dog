<template>
<div style="display: flex">
  <div class="breed">
     <div v-for="(item, index) in resultados" :key="index">
       <app-card largura="520px">
         {{item}} &emsp;<button @click="marcaFavourito(item)">&#9829;</button>
         <br /> <br /> 
      </app-card>
      
     <img :src="item" alt="">
     
    </div>
  </div>
  <app-card class="favoritos" cor="grey">
    <p>favoritos</p>
    <div div v-for="(item, index) in $store.state.favoritos" :key="index">
      <app-card cor="white"  >
         <img :src="item" width="150" alt="" @click="desmarcaFavoritos(index)">
      </app-card>
    </div>
  </app-card>
</div>
</template>
<script>
import axios from "axios"
import appCard from '@/components/app-card.vue'
import { bus } from '../main'
export default {
  components:{
    appCard
     
     
  },
    data(){
    return{
      resultados:"",
      pesquisa:"",
      favoritos:[]
      
    }
  },
  methods:{
    marcaFavourito(item){
      //this.favoritos.push(item);
      this.$store.commit('marcaFavourito',item);
    },
    desmarcaFavoritos(index){
      //this.favoritos.splice(index,1);
          this.$store.commit('desmarcaFavoritos',index);
    },
    carregaInfo(query){
      //axios.get('https://images-api.nasa.gov/search?q=earth&media_type=image')
      axios.get('https://dog.ceo/api/breed/'+ query +'/images')
        .then(
          res =>{
            this.resultados = res.data.message //res.data.collection.items
            console.log(this.resultados);
          }
        )
    },
    carregaBreed(breed){
      //axios.get('https://images-api.nasa.gov/search?q=earth&media_type=image')
     return axios.get('https://dog.ceo/api/breed/'+ breed +'/images/random')
        .then(
          res => res.data.message //res.data.collection.items
         
          
        )
    }
  },
 created (){
      this.carregaInfo(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/*.breed{
 
}*/
.favoritos{
  width: 250px;
  font-weight: 700;
  color: white;
}
</style>
