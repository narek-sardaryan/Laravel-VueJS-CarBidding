<template>
    <div>
        {{auctions}}
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Auctions",
        data() {
            return {
                auctions: []
            }
        },
        created: function () {
            this.fetchAuctions();
        },
        methods: {
            fetchAuctions(){
                axios.get('/fetchauctions').then(response => {
                    this.auctions = response.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>
