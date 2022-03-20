<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <h1>app</h1>
   <br> -->
  <TheNavigation />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link> 
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>

  </div> -->

  <div class="container">
    
    <!-- <router-view ></router-view> -->

    <!-- left sidebar -->

    <!-- <router-view name="LeftSidebar" class="view left-sidebar"></router-view> -->
    <router-view v-slot="{ Component }" name="LeftSidebar" class="view left-sidebar">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>


    <!-- main -->
    <router-view :key="$route.path" class="main-view"></router-view>

    <!-- <router-view v-slot="{ Component }" class="main-view">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view> -->

    

  </div>
</template>



<script>
import TheNavigation from "./components/TheNavigation.vue";
export default {
  components: { TheNavigation },
};
</script>


<style lang="css">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
.container{
  display: flex;
}
.left-sidebar{
  width: 20%;
}
.main-view{
  width: 100%;
}
</style>
