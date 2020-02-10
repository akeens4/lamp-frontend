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
                
                <p class="pa"><span> <img src="./summary.svg" class="spanImg">Summary </span></p>
                <p><span> <img src="./info.svg" class="spanImg">Full Info </span></p>
                <p><span> <img src="./apt.svg" class="spanImg">Aptitude Test </span></p>
                <p><span> <img src="./act.svg" class="spanImg">Activity Log </span></p>
                <p style="padding-top: 3rem;"><span> <img src="./Scul.svg" class="spanImg" >Back to Records </span></p>
                

                </div>
            <div class="col-sm-7 first">                
                <div class="row ">
                    <div class="col-sm-1">
                    </div>
                    <div class="col-sm-10 row1">
                        <h6 id="prog">Progress</h6>
                        <div class="row appl">
                        <div class="col-sm-4 ">
                            <p>Application Status: Applicant</p>
                            <img src="./stat.svg" class="imgs">
                        </div>
                        <div class="col-sm-6 " >
                            <p >Tuition Paid: NGN 50,000</p>
                            <img src="./stat.svg" class="imgs">
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-1">
                    </div>
                
                </div>
                <div class="row ">
                    <div class="col-sm-1">
                    </div>
                    <div class="col-sm-10">
                        <div class="row">
                            <div class="col-sm-5 inner">              
                                <h6 id="prog">Bio</h6>
                                <div class="row bioRow">
                                    <div class="col-sm-6">
                                       <h6>First Name</h6>
                                       <p id="details">Omotolani{{firstname}}</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <h6>Last Name</h6>
                                       <p id="details">Ligali{{firstname}}</p>
                                    </div>

                                </div>
                                <div class="row bioRow">
                                    <div class="col-sm-6">
                                       <h6>Email</h6>
                                       <p id="details">Ligalit@gmail.com{{email}}</p>
                                    </div>
                                </div>
                                <div class="row bioRow">
                                    <div class="col-sm-6">
                                       <h6>Gender</h6>
                                       <p id="details">Female{{gender}}</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <h6>Age Range</h6>
                                       <p id="details">15-20{{dob}}</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-sm-2">              
                                
                            </div>                            
                            <div class="col-sm-5 inner">              
                                <h6 id="prog">More info</h6>
                                <div class="row bioRow">
                                    <div class="col-sm-6">
                                       <h6>State of Origin</h6>
                                       <p id="details">Ogun{{origin}}</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <h6>State of Residence</h6>
                                       <p id="details">Lagos{{residence}}</p>
                                    </div>

                                </div>
                                <div class="row bioRow">
                                    <div class="col-sm-6">
                                       <h6>Higher Institution</h6>
                                       <p id="details">OAU{{institute}}</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <h6>Course of Study</h6>
                                       <p id="details">Animal Production{{study}}</p>
                                    </div>
                                </div>
                                <div class="row bioRow">
                                    <div class="col-sm-6">
                                       <h6>University Grade</h6>
                                       <p id="details">First class{{grade}}</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <h6>Marital Status</h6>
                                       <p id="details">Single{{status}}</p>
                                    </div>

                                </div>
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
            name:'profile',
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
           
        }
        

    </script>


<style src="./Register.css" scoped>

</style>