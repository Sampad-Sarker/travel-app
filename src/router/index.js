// import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '../../src/data.json'


const routes = [
  {path: '/', name: 'home', component: Home,alias:'/home'},
  // {path: '/home', redirect:'/'},

  {
    path:'/destination/:id/:slug',
    // path:'/destination',

    name:"destination.show",
    component:()=>import('../views/DestinationShow.vue'),
    // props:true,
    props:route=>{return {id:parseInt(route.params.id)}},
    // props: {
    //   name:{ firstName: "Evan" , lastName:'you'}
    // },
    // props:route=>{
    //   let popularDestinationId = ['1','3']
    //   return {popularDestination : popularDestinationId.includes(route.params.id) }
    // },
    beforeEnter: (to, from) => {
      const exist = sourceData.destinations.find(destination=>destination.id === parseInt(to.params.id))

      if(!exist){
        return{
          name:'notFound',

          //allow keeping the url while rendering a different page
          params: { pathMatch: to.path.split('/').slice(1) },
          // preserve existing query and hash if any
          query: to.query,
          hash: to.hash,
        }
      }
    },
    children:[
      {
        path:':experienceSlug',
        name:'experience.show',
        component:()=>import('../views/ExperienceShow.vue'),
        // props:route=>({experienceSlug:route.params.experienceSlug, id:parseInt(route.params.id)})
        props:route=>({...route.params, id:parseInt(route.params.id)})
      }
    ]

  },
  // {
  //   path:'/destination/:id/:slug/:experienceSlug',
  //   name:'experience.show',
  //   component:()=>import('../views/ExperienceShow.vue'),
  //   // props:route=>({experienceSlug:route.params.experienceSlug, id:parseInt(route.params.id)})
  //   props:route=>({...route.params, id:parseInt(route.params.id)})
  // },

  {
     path: '/:pathMatch(.*)*', 
     name: 'notFound', 
     component: ()=>import('../views/NotFound.vue') 
    
  },

  {
    path:'/protected',
    name:'protected',
    // component: ()=>import('../views/Protected.vue'),
    components:{
      default:()=>import('../views/Protected.vue') ,
      LeftSidebar:()=>import('../components/LeftSidebar.vue')
    },
    meta:{
      requiresAuth:true
    }
  },

  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/Login.vue')
  },
  {
    path: '/invoices',
    name: 'invoices',
    // component: ()=> import('@/views/Invoices.vue'),
    components:{
      default:()=>import('../views/Invoices.vue') ,
      LeftSidebar:()=>import('../components/LeftSidebar.vue')
    },
    meta:{
      requiresAuth: true,
    }
  },




]


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || {top:0,behavior:'smooth'}
    
    // return{
    //   // el: document.getElementById('main'),
    //   el: '#main',
    //   bottom: 0,
    // }
  }
  
  // scrollBehavior (to, from, savedPosition) {
  //   return savedPosition || new Promise((resolve)=>{
  //     setTimeout(()=> resolve({ top:0,behavior:'smooth'}), 1000)
  //   })
  // }

})

router.beforeEach((to, from)=>{
  if(to.meta.requiresAuth && !window.user){
    return {name: 'login', query:{ redirect: to.fullPath }}
  }
})

export default router