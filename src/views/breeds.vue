<template>
  <div class="breeds">
      <div v-for="(item, index) in resultados" :key="index">
    <app-card largura="200px">
      <router-link :to='"/breeds/"+item.name'>{{item.name}}</router-link>
      <button @click="navega(index)">{{index}}</button>
      <br>
      <img :src="item.photo" alt="">
      
    </app-card>
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
      pesquisa:"",
      breeds:[]
    }
  },
  methods:{
    navega(breed){
          this.$router.push('/breeds/'+ breed)
    },
    carregaInfo(){
      //axios.get('https://images-api.nasa.gov/search?q=earth&media_type=image')
      axios.get('https://dog.ceo/api/breeds/list/all')
        .then(
          res =>{
            this.resultados = res.data.message //res.data.collection.items
            console.log(this.resultados);
          
            return res.data.message
          }
        )
        .then(
          res => {
            this.breeds=[...Object.keys(res)]
            console.log(this.breeds);
            return [...Object.keys(res)]
          }
        )
        .then(
          res=>{
            return axios.all([...res.map(x=>this.carregaBreed(x))]);
          }
        )
        .then(
          res=>{
            this.resultados=[]
            for (let [index,item] of res.entries()) {
              this.resultados.push(
                {
                 'name':this.breeds[index],
                 'photo':item
                }
              )
            }
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
  mounted (){
    this.carregaInfo();
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
.breeds{
  display: flex;
  flex-flow: row wrap;
}
</style>
