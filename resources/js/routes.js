import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Auctions from './components/Auctions.vue';
import ShowCar from './components/ShowCar.vue';
import About from './components/About.vue';
import SearchCar from './components/SearchCar.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Contacts from './components/Contacts.vue';
import Faq from './components/Faq.vue';
import Rules from './components/Rules.vue';

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            props: true
        },
        {
            path: '/auctions',
            component: Auctions
        },
        {
            path: '/cars/:id',
            component: ShowCar
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/searchcar',
            component: SearchCar,
            props: true
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
        {
            path: '/contacts',
            component: Contacts,
        },
        {
            path: '/faq',
            component: Faq,
        },
        {
            path: '/rules',
            component: Rules,
        },
    ],
    mode: 'history'
})
