<template>
  <div class="form">
      <h3>:: REGISTAR ::</h3>
      <form @submit.prevent="submit">
          <span>email: </span>
          <input type="email" v-model="email">
          <br><br>
          <span>Password: </span>
          <input type="password" v-model="password">
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
            email:'',
            password:''
        }
    },
    methods:{
        submit(){
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCsLGuksL21X3vwXt6RdrWyXjx153gSVdI',{
                email:this.email,
                password: this.password,
                returnSecureToken:true

            })
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