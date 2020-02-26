<template>  
<div id='app'>
    
    <transition name="fade">
       <router-view></router-view>
    </transition>
    <!-- <Applicant /> -->

</div>
</template>

<script>

  // import Applicant from './components/Applicant.vue'

    export default {
      name: 'app',
      components: {
      // Applicant,
     
      }
    }
</script>