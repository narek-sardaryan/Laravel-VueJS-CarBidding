<template>
    <div>
        <Cube v-if="slider.length == 0"></Cube>
        <header-component v-if="slider.length > 0"></header-component>
        <slider v-if="slider.length > 0" :sliders="this.slider"></slider>
        <statistic v-if="slider.length > 0"></statistic>
        <filters v-if="slider.length > 0" :allcars="this.allcars"></filters>
        <cars-root @page="getResults($event)" :cars="this.cars" v-if="slider.length > 0"></cars-root>
        <footer-component v-if="slider.length > 0"></footer-component>
    </div>
</template>

<script>
    export default {
        name: "Home",
        props: ["carsall"],
        data() {
            return {
                cars: [],
                slider: [],
                allcars: [],
            }
        },
        created: function () {
            this.fetchCars();
            this.fetchs();
            this.getResults();
        },
        methods: {
            getResults(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }
                axios.get('/fetchcars?page=' + page)
                    .then(response => {
                        return response;
                    }).then(data => {
                    this.cars = data;
                });
            },
            fetchs() {
                axios.get('/fetchslider').then(response => {
                    this.slider = response.data;
                })
            },
            fetchCars() {
                axios.get('/fetchcarsall').then(response => {
                    this.allcars = response.data
                })
            },
        }
    }
</script>

<style scoped>

</style>
