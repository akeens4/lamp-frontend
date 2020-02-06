<template>

<div id = "applicant">
    <Navbar />
    <ejs-grid :dataSource="applicants"
     :allowPaging="true"
      :pageSettings=pageSettings >

      <e-columns>
        <e-column field="username" headerText="Username" textAlign="Right">
        </e-column>
        <e-column field="firstName" headerText="First Name"></e-column>
        <e-column field="lastName" headerText="Last Name"></e-column>
        <e-column field="email" headerText="Email"></e-column>
        <e-column field="date_of_birth" headerText="Date of Birth"></e-column>
        <e-column field="phone" headerText="Phone Number"></e-column> 
      </e-columns>
    
    </ejs-grid>
</div>
      

</template>

<script>
  import Navbar from './Navbar';
  import Vue from 'vue';
  import { GridPlugin, Page, Sort } from '@syncfusion/ej2-vue-grids';
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
           pageSettings: { pageSize: 5 }
           }
         },

        created() {
            axios.get(`http://localhost:8085/lamp-web/getApplicant`)
            .then(response => {
              this.applicants = response.data
            })
        },
        provide: {
          grid: [Page]
        }          
    }
    

</script>

<style>
    @import url(https:cdn.syncfusion.com/ej2/material.css);
</style>