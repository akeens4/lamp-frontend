<template>
  <div class="container formquest">
        <h2>Questionnaire</h2>
    <form @submit.prevent = "addPost">
  
      <div class="row form-group">
        <input type="text" class="form-control input1" id="sec-school" placeholder="What secondary school did you attend?" :class="red">
      </div>
      <div class="form-group row">
        <input type="text" class="form-control input1" id="university" placeholder="What higher institution did you attend" >
      </div>
   
    <div class="row" >
   <div class="form-group col-md-offset-6">
      <input type="text" class="form-control inputSelect" id="course" placeholder="Course studied">
   </div>
   <div class="form-group col-md-offset-6">
       <input type="" class="form-control inputSelect" id="year" placeholder="Year Of Graduation">

       <vuejs-datepicker></vuejs-datepicker>
   </div>
    </div>

<div class="row">
  
<div class="form-group col-md-offset-6">
    <input type="text" class="form-control inputSelect" id="grade" placeholder="Graduation grade">
</div>
<div class="form-group col-md-offset-6">
      <select id="nysc" class="form-control inputSelect nyscyear" >
          <option selected>NYSC status</option>
        <option>Completed</option>
        <option>Incomplete</option>
      </select>
</div> 
</div>
  
    <div class="form-group row">
      <select id="currenjob" class="form-control input1" >
          <option selected >What are you doing currently?</option>
        <option>Married</option>
        <option>Single</option>
        <option>Divorced</option>
      </select>
    </div>
      <div class="row subbtn">
        <div class="col">
          <router-link to="/Questionnaire" id="routerlink1"><button type="submit" class="btn btn-outline-danger bt">&larr; Back</button></router-link>
        </div>
        <pagination></pagination>
        <div class="col text-right">
          <router-link to="/Questionnaire2" id="routerlink"> <button type="submit" class="btn btn-danger bt2" >Next &rarr;</button></router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
  export default{
    components: {
      Pagination
    },
    data(){
        return{
            post:{}
        }
    },
    methods:{
        addPost(){
          
            
        }
    }
}
</script>

<style src="./Questionnaire.css" scoped>
   
</style>