<template>
    <div>
        {{auctions}}
    </div>
</template>

<script>

    export default {
        name: "Auctions",
        data() {
            return {
                auctions: [],
                id: this.$router.currentRoute.params['id']
            }
        },
        created: function () {
            this.fetchAuction();
        },
        methods: {
            fetchAuction() {
                axios.get('/auction/'+this.id).then(response => {
                    this.auctions = response.data;
                })
            }
        },
        watch: {
            $route(toR, fromR) {
                this.id = toR.params['id'];
            }
        }
    }
</script>

<style scoped>

</style>
