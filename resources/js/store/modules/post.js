const axios = require('axios');
export default {
    actions: {
        async fetchAuctions() {
            const res = await fetch('auctions');
            const posts = await res.json();
        }
    },
    mutations: {
        updatePosts(state, posts) {

        }
    },
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts
        }
    },

}
