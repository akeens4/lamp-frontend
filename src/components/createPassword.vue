 <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/vee-validate/2.1.1/vee-validate.js"></script>
 <script src="vuelidate/dist/vuelidate.min.js"></script>

<script src="vuelidate/dist/validators.min.js"></script>
Vue.use(window.vuelidate.default)
<template>
    <div class="row" id="register_wrapper">        
      <div class="col-md-5" id="register_frame-col1">
        
            <div class="col-md-6">   
                <img src="./semicolon-logo.svg" id="semi-logo">
            </div>
        

          <form @submit.prevent="validateForm" autocomplete="off" id="register_fil" v-on:submit="createPassword" method="PUT">
              <h1 class="shift">Create Password</h1><br /><br />
            
            <div class="form-group" id="register_bigform1">
              <input 
              type="password" class="form-control"
               name="password" v-model="form.password"
               placeholder="Password">
               <p v-if="$v.form.password.$invalid" class="error-message">Please enter your password</p>
               <p v-if="$v.form.password.strongPassword" class="error-message">Strong passwords need to have a letter, a number, a special character, and be more than 6 characters long.</p>
             
            </div><br />
            
            <div class="form-group" id="register_bigform1">
                
                <input 
                 type="password" class="form-control"
                  name="confirmPassword" v-model="form.confirmPassword"   placeholder="Confirm Password">
                   <p v-if="$v.form.confirmPassword.$invalid" class="error-message">Please enter your password to confirm </p>

            </div>
           
                
              
            <div class="form-group">
            <button :disabled="$v.form.$invalid" type="submit" id="register_submit"  class="btn">Submit</button>
           
            </div>


            
          </form>
        </div>

        <div class="col-md-7" id="register_frame-col2"> 
                    
              <button type="submit" class="btn" id="register_partner"> <a href="http://semicolon.africa/">  Partner with us</a></button>

        </div>

    </div>
</template>


<script >

 import axios from 'axios';
import { required, minLength,sameAs } from 'vuelidate/lib/validators'
 
export default {

    name:'create',
     mounted() {
      console.log('Component mounted.')
    },
 data(){
   return{
      form: {
                password: null,
                confirmPassword: null
            }
   }
 },
 
 validations:{
   form:{

     password:{
       required,
       strongPassword(password){
         return (
          /[a-z]/.test(password) && // checks for a-z
          /[0-9]/.test(password) && // checks for 0-9
          /\W|_/.test(password) && // checks for special char
          password.length >= 6
        );
       }
       
     },
     confirmPassword:{
       required,
       sameAs:sameAs('password')
      
     }
   }
 },


  methods:{

    validateForm(){

            if(!this.$v.form.$invalid){
                console.log('Form Submitted', this.form)
            }else{
                console.log('Invalid form')
            }
           
        },
     createPassword(){
      
        return axios.put('http://localhost:8083/lamp-web/createPassword/6',{
           
            password:this.form.password
        })
        
        .then(function(res){console.log(res)}).catch(function(err){console.log(err.data)})
         
      
    
      
    }

  }
};
 </script>
<style src="./createPassword.css" scoped></style>