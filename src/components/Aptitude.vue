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
            name:'Aptitude',
            components: {
            Navbar,
            },
            data() {
            return {
            }
            },

            created() {
                axios.get(`http://localhost:8083/lamp-web/getApplicant/{id}`)
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