<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>:: :: DESTAQUES</h3>
    <div v-if="$store.state.info.length > 0" class="breeds">
      <div v-for="(item,index) in $store.getters.racaVenda" :key="index">
        <app-card largura="200px">
          <img :src="item.foto" width="90" alt="">
          <div>{{item.name}}</div>
        </app-card>
      </div>
    </div>
  <br>
    <HelloWorld msg="Raças de Cães"/>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
     
  }                      
}
</script>
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