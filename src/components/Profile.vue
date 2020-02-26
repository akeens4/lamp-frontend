<template>
<div id = "profile">
    
  <div class="container-fluid wrapper">  
      
      <Navbar />
    <div class="container-fluid conbox">
        <div class="row">
            <div class="col-sm-2 conboxCol">
                <img src="./bak.svg">
            </div>
            <div class="col-sm-7 conboxCol">
                
            </div>
            <div class="col-sm-3 conboxCol">
                
            </div>
        </div>
        <div class="row conboxCol2">
            <div class="col-sm-2 menu">
                
               <p class="pa" ><a href="./profile" v-on:click="profile"><span> <img src="./summary.svg" class="spanImg">Summary </span></a></p>
                <p> <a href="./profiles" v-on:click="profiles"><span> <img src="./info.svg" class="spanImg">Full Info </span></a></p>
                <p><a href="./aptitude" v-on:click="aptitude"><span> <img src="./apt.svg" class="spanImg">Aptitude Test </span></a></p>
                <p><a href="./activity" v-on:click="activity"><span> <img src="./act.svg" class="spanImg">Activity Log </span></a></p>
                <p style="padding-top: 3rem;"><a href="./applicant" v-on:click="applicant"><span> <img src="./Scul.svg" class="spanImg" >Back to Records </span></a></p>
                

                </div>
            <div class="col-sm-7 first">                
                <div class="row ">
                    <div class="col-sm-1">
                    </div>
                    <div class="col-sm-10 profiles_row">
                        <h6 id="full">Full Info</h6>
                        <div class="row appl">
                        <div class="col-sm-6 ">
                            <h6>First Name</h6>
                            <p id="details">Omotolani{{firstname}}</p>
                            
                        </div>
                        <div class="col-sm-6 " >
                            <h6>Last Name</h6>
                            <p id="details">Ligali{{lastname}}</p>
                        </div>
                        </div>
                        <div class="row appl">
                        <div class="col-sm-6 ">
                            <h6>Email Address</h6>
                            <p id="details">joshval.lj@gmail.com{{email}}</p>
                            
                        </div>
                        <div class="col-sm-6 " >
                            <h6>Age Range</h6>
                            <p id="details">15-25 years{{age}}</p>
                        </div>
                        </div>
                        <div class="row appl">
                        <div class="col-sm-6 ">
                            <h6>Gender</h6>
                            <p id="details">Female{{gender}}</p>
                            
                        </div>
                        <div class="col-sm-6 " >
                            <h6>Date of Birth</h6>
                            <p id="details">30-09-1999{{dob}}</p>
                        </div>
                        </div>
                        <div class="row appl">
                        <div class="col-sm-6 ">
                            <h6>State of Origin</h6>
                            <p id="details">Lagos State{{origin}}</p>
                            
                        </div>
                        <div class="col-sm-6 " >
                            <h6>State of Residence</h6>
                            <p id="details">Lagos State{{residence}}</p>
                        </div>
                        </div>
                        <div class="row appl">
                        <div class="col-sm-6 ">
                            <h6>Higher Institution</h6>
                            <p id="details">Lagos State University{{institution}}</p>
                            
                        </div>
                        <div class="col-sm-6 " >
                            <h6>Course of Study</h6>
                            <p id="details">Physics{{course}}</p>
                        </div>
                        </div>
                        <div class="row appl">
                        <div class="col-sm-6 ">
                            <h6>University Grade</h6>
                            <p id="details">First Class{{grade}}</p>
                            
                        </div>
                        <div class="col-sm-6 " >
                            <h6>Marital Status</h6>
                            <p id="details">Single{{marital}}</p>
                        </div>
                        </div>
                        <div class="row appl">
                        <div class="col-sm-6 ">
                            <h6>Secondary School</h6>
                            <p id="details">Our Lady{{secondary}}</p>
                            
                        </div>
                        <div class="col-sm-6 " >
                            <h6>Graduation Year</h6>
                            <p id="details">2017{{graduation}}</p>
                        </div>
                        </div>
                        <div class="row appl">
                        <div class="col-sm-6 ">
                            <h6>Programming Languages</h6>
                            <p id="details">Java, Python, Html/CSS{{programming_language}}</p>
                            
                        </div>
                        <div class="col-sm-6 " >
                            <h6>Databases</h6>
                            <p id="details">MYSQL,Hadoop{{databases}}</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-1">
                    </div>
                
                </div>
              
                
            </div>
            <div class="col-sm-3">
                <div class="row wrap3">
                    <div class="col-sm-3">
                    </div>
                    <div class="col-sm-6">
                        <h6 class="app">APP20109</h6>
                        <img class="img-fluid" src="./pix.svg">
                        <h5 >Ligali Omotolani{{applicantId}}</h5>
                        <button type="button" class="btn btn-outline-warning but" >Applicant</button>
                    </div>
                    <div class="col-sm-3">
                        <P></P>
                    </div>
                    
                </div>
           
                <div class="row wrap2">
                    <div class="col-sm-8">
                        <p><span> <img src="./invi.svg" class="deci">Invite for Interview </span></p>
                        <p><span> <img src="./add.svg" class="deci">Add/View Comments </span></p>
                        <p><span> <img src="./dec.svg" class="deci">Make Decision </span></p>
                    </div>
                    <div class="col-sm-4">
                        <P></P>
                    </div>
                    
                </div>
            </div>
        </div>
        
        
    </div>
  </div>
</div>         
</template>

<script>
    import Navbar from "./Navbar"
    import Vue from 'vue';
    import Vuetify from "vuetify";
    Vue.use(Vuetify);
    import axios from 'axios'
        export default {
            name:'profiles',
            components: {
            Navbar,
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

            created() {
                axios.get(`http://localhost:8083/lamp-web/getApplicant/6`)
                .then(response => {
                this.applicants = response.data
                })
            },
            profiles:
                function(){
                this.$refs.form.profiles()
                },
            profile:
                function(){
                this.$refs.form.profile()
                },
            aptitude:
                function(){
                this.$refs.form.aptitude()
                },
            activity:
                function(){
                this.$refs.form.activity()
                },
            applicant:
                function(){
                this.$refs.form.applicant()
                }

           
        }
        

    </script>


<style src="./Register.css" scoped>

</style>