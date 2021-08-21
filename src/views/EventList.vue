<template>
  <div class="events">
    <img alt="Vue logo" src="../assets/logo.png" />
    <EventCard v-for=" event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

//import axios from 'axios';
//non serve più in quanto l'ho dichiarato nel EventService.js

import EventService from '@/services/EventService.js'
export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data(){
    return {
       events:null
    }
  },
  created(){

    
    //per fare la chiamata axios quando il componente viene creato
    //utilizzo il componente.js EventService con il suo metodo per fare la chiamata axios
   EventService.getEvents().then(response=>{
      //console.log('events:',response.data);
      this.events = response.data;
    }).catch(error=>{
      console.error(error);
    })
  }
};
</script>
<style scoped>
  .events{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>