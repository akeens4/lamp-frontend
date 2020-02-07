 <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/vee-validate/2.1.1/vee-validate.js"></script>
 <script>
   Vue.use(VeeValidate);
 </script>

<template>
    <div class="row" id="register_wrapper">        
      <div class="col-md-5" id="register_frame-col1">
        
            <div class="col-md-6">   
                <img src="./semicolon-logo.svg" id="semi-logo">
            </div>
        

          <form id="register_fil">
              <h1 class="shift">Create Password</h1><br /><br />
            
            <div class="form-group" id="register_bigform1">
              <input v-model="Password" 
              type="password"  autocomplete="new-password" class="form-control"
               name="password" 
               placeholder="Password">
               <input type="hidden" name="username">
            </div><br />
            
            <div class="form-group" id="register_bigform1">
                
                <input 
                 type="password" class="form-control"
                  name="confirmPassword" autocomplete="new-password"  placeholder="Confirm Password">
                   

                  <input type="hidden" name="username">
            </div>
           
                
              
            <div class="form-group">
            <button @keypress.enter="createPassword" type="submit" id="register_submit"  class="btn">Submit</button>
           
            </div>


                    <!-- ERRORS -->
                <!-- <div class="alert alert-danger" v-show="errors.any()">
                    <div v-if="errors.has('password')">
                        {{ errors.first('password') }}
                    </div>
                    <div v-if="errors.has('confirmPassword')">
                        {{ errors.first('confirmPassword') }}
                    </div>
                </div> -->
          </form>
        </div>

        <div class="col-md-7" id="register_frame-col2"> 
                    
              <button type="submit" class="btn" id="register_partner"> <a href="http://semicolon.africa/">  Partner with us</a></button>
        
       

        </div>

        <ul v-for="applicant of applicants" :key="applicant.id">
        <li >{{applicant.username}}</li>
        <li >{{applicant.firstName}}</li>
        <li >{{applicant.lastName}}</li>
        <li >{{applicant.email}}</li>
        <li >{{applicant.password}}</li>

    </ul>
    </div>
</template>

<script>

 import axios from 'axios';

const baseURL = "http://localhost:8083/lamp-web/getApplicant"
export default {

    name:'app',
 data(){
   return{
     applicants: [],
     Username: '',
     FirstName:'',
     LastName:'',
     Email: '',
     Password: ''

    
   }
 },
 
 async created(){
   
   try{
     const res = await axios.get(baseURL);
     this.applicants= res.data;
   }
   catch(e){
    console.error(e);
   }
  //  console.log("help");
  
 },

  methods:{
    async createPassword(){
      console.log("help");
      
      const baseUrl1 = "http://localhost:8083/lamp-web/updateApplicant/6"
      
        const res = await axios.post(baseUrl1,{password: this.Password});
          console.log("help");
      
          this.applicants= [...this.applicants, res.data];
          this.Password = "";
          
      
        console.error(e);
      
    }

  }
};
 </script>
<style src="./createPassword.css" scoped></style>