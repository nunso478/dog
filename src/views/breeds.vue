<template>
  <div class="hello">
      <div v-for="(item, index) in resultados" :key="index">
     <h3>{{index}}</h3>
     <button @click="navega(index)">{{index}}</button>
  </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    data(){
    return{
      resultados:"",
      pesquisa:""
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
            console.log(res);
          }
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
</style>
