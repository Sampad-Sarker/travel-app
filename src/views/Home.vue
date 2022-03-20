<template>
  <!-- <h1>HOME PAGE</h1> -->
  <!-- {{destinations}} -->

  <div class="home">
    <h1>All destinations</h1>

     <!-- <button @click="triggerRouterError">Trigger Router Error</button> -->

    <div class="destinations">
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{name:'destination.show',params:{id:destination.id,slug:destination.slug}}"
    >
      {{destination.name}}
      
      <img :src="`/images/${destination.image}`" :alt="destination.name">


    </router-link>
  </div>

  </div>
  
</template>

<script>
// import sourceData from '@/data.json'
import sourceData from '../../src/data.json'
import {isNavigationFailure, NavigationFailureType} from "vue-router"

export default{
  
  
  data(){
    //console.log(sourceData)
    return{
      destinations:sourceData.destinations
    }
  },

  // methods:{
  //   async triggerRouterError(){
  //     const navigationFailure = await this.$router.push('/')
  //     if(isNavigationFailure(navigationFailure, NavigationFailureType.duplicated)){
  //       console.log("to🛺",navigationFailure.to)
  //       console.log("from🛸",navigationFailure.from)
  //     }else{
  //       // all is well
  //     }
  //   }
  // }

}
</script>

<style>

</style>