<template>
<div style="display: flex">
  <div class="breed">
     <div v-for="(item, index) in $store.state.favoritos" :key="index">
       <app-card largura="520px">
         <div v-if="!!$store.getters.racaVenda.find((res)=>item.includes(res.name))">
         <button>$$$ comprar $$$</button>
         </div>
         <br /> <br /> 
      </app-card>
      
     <img :src="item" width="500" alt="">
     
    </div>
  </div>
 
</div>
</template>
<script>
import axios from "axios"
import appCard from '@/components/app-card.vue'
import { bus } from '../main'
export default {
  components:{
    appCard
     
     
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
.favoritos{
  width: 250px;
  font-weight: 700;
  color: white;
}
</style>
