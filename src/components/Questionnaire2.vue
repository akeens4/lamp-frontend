<template>
<div class="container formquest">
    <h2>Questionnaire</h2>
  <form @submit.prevent = "addPost">

  <div class="form-group">
      <select id="inputState" class="form-control select1" >
          <option selected>What programming languages are you familiar with?</option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    <div class="form-group">
      <select id="inputState" class="form-control select1" >
          <option selected>What databases are you familiar with?</option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>

    <div class="form-group">
      <select id="inputState" class="form-control select1" >
          <option selected>What operating system are you familiar with?</option>
        <option>Married</option>
        <option>Single</option>
        <option>Divorced</option>
      </select>
    </div>

    <div class="row">
        <div class="form-group col">
    
            <input type="text" class="form-control input1" id="apply-program" placeholder="Why did you apply for this program?" >
    
        </div>
    </div>
  <div class="row subbtn">
      <div class="col">
        <router-link to="/Questionnaire1" id="routerlink1"><button type="submit" class="btn btn-outline-danger">&larr; Back</button></router-link>
      </div>
        <pagination></pagination>

      <div class="col text-right">
        <button type="submit" class="btn btn-danger">Submit &rarr;</button>
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