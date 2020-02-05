<template>
<div class="container formquest">
    <h2>Questionnaire</h2>
  <form @submit.prevent = "addPost">
  <div class="row">
  <div class="form-group col-6">
    <!-- <label for="exampleInputEmail1">Email address</label> -->
    <input type="text" class="form-control input2" id="date-of-birth" placeholder="Date of birth" >
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group col-6">
    <!-- <label for="">Password</label> -->
    <input type="text" class="form-control input2" id="state-of-origin" placeholder="State Of Origin">
  </div>
  </div>
  <div class="row">
  <div class="form-group col-6">
    <!-- <label for="exampleInputEmail1">Email address</label> -->
    <input type="text" class="form-control input2" id="state-of-residence" placeholder="State Of Residence">
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group col-6">
    <!-- <label for="">Password</label> -->
    <input type="text" class="form-control input2" id="country-of-residence" placeholder="Country Of Residence">
  </div>
  </div>
  <div class="form-group">
      <select id="inputState" class="form-control select1" >
          <option selected>Able to commit to the program, full time?</option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    <div class="form-group">
      <select id="inputState" class="form-control select1" >
          <option selected>Able to relocate to Lagos for the program?</option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>

    <div class="form-group">
      <select id="inputState" class="form-control select1" >
          <option selected style="color:red;">What's your marital status?</option>
        <option>Married</option>
        <option>Single</option>
        <option>Divorced</option>
      </select>
    </div>
  <div class="row subbtn">
      <div class="col">
        <button type="submit" class="btn btn-outline-danger">&larr;  Back</button>
      </div>
      <pagination></pagination>
      <div class="col text-right">
       <router-link to="/Questionnaire1" id="routerlink"> <button type="submit" class="btn btn-danger" > Next &rarr;</button></router-link>
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
            post:{},
            
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