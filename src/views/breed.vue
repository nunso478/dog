<template>
  <div class="breed">
     <div v-for="(item, index) in resultados"
     :key="index">
     <h3>{{item}}</h3>
     <img :src="item" alt="">
  </div>
  </div>
</template>
<script>
import axios from "axios"
import appCard from '@/components/app-card.vue'
export default {
  components:{
    appCard
     
  },
    data(){
    return{
      resultados:"",
      pesquisa:""
      
    }
  },
  methods:{
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
.breed{
  display: flex;
  flex-flow: row wrap;
}
</style>
