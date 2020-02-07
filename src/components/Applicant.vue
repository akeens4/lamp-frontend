<template>

<div id = "applicant">
    <Navbar />
    <div class = "val"></div>
    
    <div class="container">
    <div class="row">
    <div class="col-sm-2 blue"> 
 <!--    <ul class="list-group">
  <li class="list-group-item active">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
      <h4>All Applicants</h4>
       <h4>Interviewing</h4>
       <h4>Interviewed</h4>
       <h4>Offered Admission</h4>
       <h4>Declined Admission</h4>
       <h4>Enrolled</h4> -->
    </div>
    <div class="col-sm-10">
    <ejs-grid :dataSource="applicants" :allowPaging="true"
     :allowSorting="true"
     :pageSettings=pageSettings
     :allowFiltering="true"

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
  import { GridPlugin, Page, Sort, Filter, Toolbar } from '@syncfusion/ej2-vue-grids';
  Vue.use(GridPlugin);
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
            axios.get(`http://localhost:8085/lamp-web/getApplicant`)
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
        
        margin-top: 50px !important;
        background: white;
        background: #FFFFFF;
    
    }

    .container {
      border: 1px solid white !important;
      box-shadow: 0px 15px 30px rgba(130, 130, 130, 0.15) !important;
      height: 459px;
      padding-top: 30px;
    }

    .blue {
      border: 0.5px solid black;
      position: absolute;
      left:15px;

    }

</style>