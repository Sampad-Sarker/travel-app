<template>
   <div id="nav">
    <!-- <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link> 
    <AppLink to="/brazil">Brazil</AppLink>
    <AppLink to="/panama">Panama</AppLink>
    <AppLink to="/hawaii">Hawaii</AppLink>
    <AppLink to="/jamaica">Jamaica</AppLink> -->

    <AppLink id="logo" to="/">চলো না ঘুরে আসি...🧳✈</AppLink> 
    <AppLink to="/">Home</AppLink> 
    <AppLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{name:'destination.show',params:{id:destination.id,slug:destination.slug}}"
    >
      {{destination.name}}
      
    </AppLink>
    <AppLink to="https://www.tripadvisor.com/">TripAdvisor</AppLink>
    <AppLink :to="{name: 'protected'}">Dashboard</AppLink>

  </div>
</template>

<script>
import sourceData from '../../src/data.json'

export default {
   data(){
    //console.log(sourceData)
    return{
      destinations:sourceData.destinations
    }
  }
}
</script>

