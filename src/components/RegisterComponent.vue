<template>
    <div class="row" id="register_wrapper">        
      <div class="col-md-5" id="register_frame-col1">
        <div class="row">
          <img src="./semicolon-logo.svg" class="col-LG-6 img">
        </div>

          <form id="register_fil" v-on:submit="submitApplication" method="POST">
            <div class="form-row">         
              <div class="form-group col-md-6" style="padding-right:12px;">
                <!-- <label for="inputEmail4">Firstname</label> -->
                <input type="text" class="form-control register_input1"  name="firstName" id="firstName" v-model="firstName" placeholder="First Name">
              </div>
              <div class="form-group col-md-6" style="padding-left:12px;">
                <!-- <label for="inputEmail4">Lastname</label> -->
                <input type="text" class="form-control register_input2" name="lastName" id="lastName" v-model="lastName" placeholder="Last Name">
              </div>        
            </div>
            <div class="form-group" id="register_bigform1">
              <input type="text" class="form-control" name="userName" id="userName" v-model="userName" placeholder="Username">
            </div>
            
            <div class="form-row">
            <div class="form-group col-md-11" id="register_bigform1">
                <!-- <label for="inputEmail4">Email</border-color: red;label> -->
                <input type="email" class="form-control" name="email" id="email" v-model="email" placeholder="Email Address">
            </div>
            <input type="checkbox" class="form-control" name="verified" id="verified" v-model="verified" style="width:2rem"/>
            </div>
              <div  class="form-group" id="register_bigform">
              <!-- <label for="inputPhone">Phonenumber</label> -->
              <input type="text" class="form-control"  placeholder="Phone Number" name="phone" id="phone" v-model="phone">
            </div>
            <div  class="form-group" id="register_bigform">
              <!-- <label for="inputPhone">Phonenumber</label> -->
              <input type="date" class="form-control"  placeholder="Date of Birth" name="dob" id="dob" v-model="dob">
            </div>
            <div class="form-group" id="register_bigform">
              <!-- <label for="inputState">Gender</label> -->
              <select id="gender" class="form-control" name="gender"  placeholder="Gender" > 
                <option selected  >Gender</option>
                <option>Male</option>
                <option>Female</option>
                
              </select>
            </div>
            <div  class="form-group" id="register_bigform">
              <!-- <label for="inputPhone">Phonenumber</label> -->
              <input type="password" class="form-control"  placeholder="Password" name="password" id="password" v-model="password">
            </div>
            <!-- <div class="form-group" id="register_bigform"> -->
              <!-- <label for="inputState">Age Range</label> -->
              <!-- <select id="inputState" class="form-control">
                <option selected>Age Range</option>
                <option>Below 15</option>
                <option>15-20</option>
                <option>20-30</option>
                <option>30-40</option>
                <option>above 40</option>
              </select> -->
            <!-- </div> -->
            <div class="form-group">
            <button type="submit" id="register_submit" class="btn"><a href="./submit" v-on:click = "submit">Apply</a></button>
           
            </div>
          </form>
        </div>

        <div class="col-md-7" id="register_frame-col2"> 
           <!-- <div class="col"> -->
          
              <button type="submit" class="btn" id="register_partner"> <a href="http://semicolon.africa/">  Partner with us</a></button>
        
        <!-- </div> -->

        </div>
      </div>
</template>

<script>

  import axios from 'axios'
//    let axiosConfig = {
//    headers: {
//        'Content-Type': 'application/json;charset=UTF-8',
 
//    }
//  };
  
  export default {
    name: 'Register',
    mounted() {
      console.log('Component mounted.')
    },
    data() {
      return {
        userName: '',
        firstName: '',
        lastName:  '',
        email: '',
        verified: '',
        dob: '',
        gender: '',
        phone: '',
        password:''        

      }
    },
    methods: {

       submitApplication() {
        
       return axios.post('http://localhost:8083/lamp-web/apply', {
        username: this.userName,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        verified: this.verified,
        date_of_birth: this.dob,
        gender: this.gender,
        phone: this.phone,
        password:this.password

      }).then(function(res){console.log(res)}).catch(function(err){console.log(err.data)})

  }  
    },
     

  }

</script>

<style src="./Register.css" scoped></style>