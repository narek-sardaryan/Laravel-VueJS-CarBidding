/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import router from './routes.js';
import store from './store'
import VueAxios from 'vue-axios'
import VueAgile from 'vue-agile'
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(VueAgile);
Vue.use(VueAxios, axios);
Vue.use(VueRouter);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('header-component', require('./components/HeaderComponent.vue').default);
Vue.component('footer-component', require('./components/FooterComponent.vue').default);
Vue.component('home', require('./components/Home.vue').default);
Vue.component('register', require('./components/Register.vue').default);
Vue.component('auctions', require('./components/Auctions.vue').default);
Vue.component('faq', require('./components/Faq.vue').default);
Vue.component('about', require('./components/About.vue').default);
Vue.component('rules', require('./components/Rules.vue').default);
Vue.component('contacts', require('./components/Contacts.vue').default);
Vue.component('searchcar', require('./components/SearchCar.vue').default);
Vue.component('filtercars', require('./components/FilterCars.vue').default);
Vue.component('showcar', require('./components/ShowCar.vue').default);
Vue.component('Cube', require('./components/Cube.vue').default);
Vue.component('app', require('./components/app.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store
});
