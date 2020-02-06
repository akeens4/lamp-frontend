<template>  
<div id='app'>
    
    <Applicant />

</div>
</template>

<style src="./components/Applicant.css" scoped>  
    
</style>

<script>

  import Applicant from './components/Applicant.vue'

    export default {
      name: 'app',
      components: {
       Applicant,
     
      }
    }
</script>