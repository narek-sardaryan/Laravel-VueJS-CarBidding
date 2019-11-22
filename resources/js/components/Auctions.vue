<template>
    <div>
        <Cube v-if="slider.length == 0"></Cube>
        <header-component v-if="slider.length > 0"></header-component>
        <slider v-if="slider.length > 0" :sliders="this.slider"></slider>
<!--        <statistic v-if="slider.length > 0"></statistic>-->
        <filters v-if="slider.length > 0" :allcars="allcars"></filters>
        <cars-root @page="getResultsPagein($event)" :cars="this.auctioncars" v-if="slider.length > 0"></cars-root>
        <footer-component v-if="slider.length > 0"></footer-component>
    </div>
</template>

<script>

    export default {
        name: "Auctions",
        data() {
            return {
                allcars: [],
                cars: [],
                offsetCars: [],
                slider: [],
                filters: [],
                auctioncars: [],
                id: this.$router.currentRoute.params['id']
            }
        },
        created: function () {
            this.fetchAuctionCars(this.id);
            this.fetchSlider();
            this.getResults(1, this.id);
        },
        methods: {
            fetchAuctionCars() {
                axios.get('/fetchcarsall').then(response => {
                    return this.allcars = response.data;
                })
            },
            getResults(page, id) {
                if (typeof page === 'undefined') {
                    page = 1;
                }

                axios.get('/auction/' + id + '/?page=' + page)
                    .then(response => {
                        return this.auctioncars = response;
                    })
            },
            getResultsPagein(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }

                axios.get('/auction/' + this.id + '/?page=' + page)
                    .then(response => {
                        return this.auctioncars = response;
                    })
            },
            fetchSlider() {
                axios.get('/fetchslider').then(response => {
                    this.slider = response.data;
                })
            },
        },
        watch: {
            $route(toR, fromR) {
                this.id = toR.params['id'];
                this.getResults(1, this.id);
            },
        }
    }

</script>

<style scoped>

</style>
