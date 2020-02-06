// App.vue

<template>  
<div id='app'>
    <transition name="fade">
      <router-view></router-view>
    </transition>
</div>
</template>

<style src="./components/Register.css" scoped>  
    
</style>

<script>
    export default {
      name: 'app',
    }
</script>