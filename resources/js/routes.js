import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Auctions from './components/Auctions.vue';

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
        }
    ],
    mode: 'history'
})
