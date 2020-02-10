<template>

<div id = "applicant">
    <Navbar />
    <div class = "val"></div>
    
    <div class="container">
    <div class="row">
    <div class="col-sm-2 blue">
     <div class="space"></div> 
     <div class="row">
     <img src="../assets/apple.png" class="size" height="30" width="30"><h6 class="row-1">All Applicants</h6>
     <h6 class="row-1">Interviewing</h6>
     <h6 class="row-1">Interviewed</h6>
     <h6 class="row-1">Offered Admission</h6>
     <h6 class="row-1">Declined Admission</h6>
     <h6 class="row-1">Enrolled</h6>
     </div>

    </div>
    <div class="col-sm-10">
    <ejs-grid :dataSource="applicants" 
    :allowPaging="true"
    :pageSettings=pageSettings
     :allowSorting="true"
     
       >
      <e-columns>
      <e-column></e-column>
        <e-column field="username" headerText="Username" textAlign="Right"></e-column>
        <e-column field="firstName" headerText="First Name"></e-column>
        <e-column field="lastName" headerText="Last Name"></e-column>
        <e-column field="email" headerText="Email"></e-column>
        <e-column field="date_of_birth" headerText="Date of Birth"></e-column>
        <e-column field="phone" headerText="Phone Number"></e-column> 
      </e-columns>
    
    </ejs-grid>
    
    </div>
    
    </div>
    </div>
  
</div>
      

</template>

<script>
  import Navbar from './Navbar';
  import Vue from 'vue';
  import Vuetify from "vuetify";
  import { GridPlugin, Page, Sort, Filter, Toolbar } from '@syncfusion/ej2-vue-grids';
  Vue.use(GridPlugin);
  Vue.use(Vuetify);
   import axios from 'axios'
    export default {
        name:'applicant',
        components: {
          Navbar,
        },
         data() {
           return {
           applicants: [],
           pageSettings: { pageSize: 7 },
            toolbar: ['Add', 'Edit', 'Delete', 'Update']
           }
         },

        created() {
            axios.get(`http://localhost:8083/lamp-web/getApplicant`)
            .then(response => {
              this.applicants = response.data
            })
        },
        provide: {
          grid: [Page,Sort, Filter, Toolbar]
        }          
    }
    

</script>

<style>
    @import url(https:cdn.syncfusion.com/ej2/material.css);

      .val {
        margin-top: 10px !important;
        background: white;
        background: #FFFFFF;
    }

    .container {
      border: 1px solid white !important;
      box-shadow: 0px 15px 30px rgba(130, 130, 130, 0.15) !important;
      height: 450px;
      padding-top: 30px;
      width: 400px;
    }

    .blue {
      border: 0.5px solid #EFEFEF;
      position: absolute;
      left:15px;
    }

    .space {
      position: relative;
       bottom:30px;
    }
    .row-1 {
      margin-top: 10px;
      margin-left: 20px;
      padding: 8.8px;
      color: #431288;
      font-family: IBM Plex Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 23px;
    }

    .size {

      position: relative;
      top: 15px;
      left: 7px;

    }

</style>