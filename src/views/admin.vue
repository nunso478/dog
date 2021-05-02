<template>
  <div class="form">
      <h3>:: venda de caes ::</h3>
      <form @submit.prevent="submit">
          <span>Raça<a href=""></a>: </span>
          <input type="name" v-model="name">
          <br><br>
          <span>preço: </span>
          <input type="preco" v-model="preco">
          <br> <br>
          <button type="submit">Enviar</button>
      </form>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            name:'',
            preco:''
        }
    },
    methods:{
        submit(){
            axios.put('https://dog-vue-58c6c-default-rtdb.firebaseio.com/.json?auth='+ this.$store.state.user.idToken,
            [...this.$store.state.venda,{
                name:this.name,
                preco: this.preco,
                foto:'',
                email: this.$store.user.email

            }])
                .then(
                    res => console.log(res)
                )
                .catch(
                    res => console.log(res)
                )
        }
    }
}
</script>

<style>
.form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
</style>