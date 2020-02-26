// main.js

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import Vuelidate from 'vuelidate'

import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)


Vue.config.productionTip = false;


import RegisterComponent from './components/RegisterComponent.vue';
import ProfileComponent from './components/ProfileComponent.vue';
import createPassword from './components/createPassword.vue';
import Applicant from './components/Applicant.vue';
import Profile from './components/Profile.vue';
import Aptitude from './components/Aptitude.vue';
import activity from './components/activity.vue';
import SubmitComponent from './components/SubmitComponent.vue';


const routes = [
  {
    name: 'applicant',
    path: '/applicant',
    component: Applicant
},
  {
    name: 'register',
    path: '/register',
    component: RegisterComponent
},
{
  name: 'password',
  path: '/password',
  component: createPassword
},
{
  name: 'profile',
  path: '/profile',
  component: ProfileComponent
},
{
  name: 'aptitude',
  path: '/aptitude',
  component: Aptitude
},
{
  name: 'activity',
  path: '/activity',
  component: activity
},
{
  name: 'profiles',
  path: '/profiles',
  component: Profile
},
{
  name: 'submit',
  path: '/submit',
  component: SubmitComponent
},
];

export default new Vuex.Store({
  module  : {},
  
})

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');

