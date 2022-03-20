<template>
    <div>
        
            <!-- <h1>Hi.... Destination </h1>
            {{$route.params}} -->
            <!-- <p>destination==> :{{popularDestination}}</p> -->
            <!-- <p>Name :{{name.firstName}} {{name.lastName}}</p> -->
            
        

        <section v-if="destination" class="destination">
            <h1>{{destination.name}}</h1>
            <GoBack/>
            <div class="destination-details">
                <img :src="`/images/${destination.image}`" :alt="destination.id">
                <p>{{destination.description}}</p>
            </div>
        </section>
        <section class="experiences">
            <h2>Top Experiences in {{destination.name}}</h2>
            <!-- <ExperienceCard
                v-for="experience in destination.experiences"
                :key="experience.slug"
                :experience="experience"
            /> -->
            <div class="cards">
                <router-link 
                    v-for="experience in destination.experiences"
                    :key="experience.slug" 
                    :to="{name:'experience.show',params:{experienceSlug:experience.slug}}"
                >
                    
                    <ExperienceCard :experience="experience"></ExperienceCard>
                </router-link>
            </div>

            <router-view/>

        </section>
    </div>
</template>

<script>
import sourceData from '../../src/data.json'
import ExperienceCard from '../components/ExperienceCard.vue'
import GoBack from '../components/GoBack.vue'
export default {

    // props:['id','slug'],
    props:{
        id:{
            type:Number,
            required:true
        }
    },
    // props:{
    //     name:{
    //         type: Object,
    //         required: true,
    //     }
    // },
    // props:['name'],
    // props:['popularDestination'],
    // props:{
    //     popularDestination:{
    //         type:Boolean,
    //         required:true
    //     }
    // },

    components:{ExperienceCard,GoBack},


    
    // data(){
    //     console.log("🦚🦚🦚",this.popularDestination);
        
    //     // return{
    //     //     destination:null
    //     // }
    // },
    computed:{
        // destinationId(){
        //     return parseInt(this.$route.params.id)
        // },

        destination(){
            return sourceData.destinations.find(destination=>destination.id === this.id)
        }
    },

    // methods:{
    //     async mainData(){
    //         const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)

    //         this.destination = await response.json()
    //     }
    // },

    // async created() {
    //     // const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)

    //     // this.destination = await response.json()
    //     this.mainData()

    //     // this.$watch(
    //     //     ()=>this.$route.params,
    //     //     // async ()=>{
    //     //     //     const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)

    //     //     //     this.destination = await response.json()
    //     //     // }
    //     //     this.mainData
    //     // )
    // },

    // display first experience details dynamically when user enter the destination
    // created(){
    //     if(this.$route.name === 'destination.show'){
    //         const firstExperience = this.destination.experiences[0]
    //         this.$router.replace({name: 'experience.show', params: {experienceSlug: firstExperience.slug} })
    //     }
    // }
}

</script>