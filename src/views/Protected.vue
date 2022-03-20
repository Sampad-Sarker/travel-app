<template>
  <!-- <h1>
      Protected Page
  </h1>
  <br> -->

  <div>
    <h1>Greetings, {{username}}</h1>
    <button @click="logout">Logout</button>
    <hr>
    <router-link :to="{name: 'invoices'}">
      <button>Invoices</button>
    </router-link>
  </div>

</template>

<script>
export default {
data(){
    return {
      username: window.user
    }
  },
  methods:{
    logout(){
      window.user = null
      // this.$router.push({name: 'home'})
      // this.$router.push('/')
      // this.$router.push({name: 'home',hash:'#logout'})
      this.$router.push({name: 'home',query:{logout:null}})
      // this.$router.replace({name: 'home',query:{logout:null}})

      
      
    }
  }
}
</script>

<style>

</style>