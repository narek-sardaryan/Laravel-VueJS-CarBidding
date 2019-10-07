import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'

Vue.use(Vuex);

export default new Vuex.Store({
    fetchAuction(id) {
        // axios.get('/auction/'+id).then(response => {
        //     this.auctions = response.data;
        // })
        console.log(id+' dfsdf');
    }
})
