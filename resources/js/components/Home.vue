<template>
    <div>
        <Cube v-if="slider.length == 0"></Cube>
        <header-component v-if="slider.length > 0"></header-component>
        <slider v-if="slider.length > 0" :sliders="this.slider"></slider>
        <statistic v-if="slider.length > 0"></statistic>
        <filters v-if="slider.length > 0" :allcars="this.allcars"></filters>
        <div class="container-fluid" v-if="slider.length > 0">
            <div class="container container-back" v-if="cars.length != 0">
                <div class="row cars-root">
                    <div class="col-md-4 cars-article" v-for="(car, index) in cars.data.data">
                        <router-link :to="'/cars/'+car.id" :key="car.id">
                            <div class="row">
                                <div class="col-md-12 text-hover">
                                    <img v-lazy-src="'/img/'+car.mainpics" :alt="car.name">
                                    <div class="car-informacion-article">
                                        <div class="inform-text-article">
                                            <div class="drop-text">
                                                <div class="row">
                                                    <div class="col">
                                                        <p>{{car.name}} | {{car.year}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Текущая цена | {{car.currentPrice}} ₽</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Начало торгов | {{car.auctionStart}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Завершение торгов: | {{car.endOfAuction}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="article-price">
                                    <p>{{car.currentPrice}}₽</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <pagination :data="cars.data" @pagination-change-page="getResults"></pagination>
            </div>
            <div class="container container-back" v-if="cars.length == 0">
                <div class="row cars-root">
                    <div class="col-md-8 notfoundtxt">
                        <h1>По вашему запросу ничего не найдено</h1>
                    </div>
                    <div class="col-md-2 notfoundimg">
                        <img v-lazy-src="'/img/design_img/27-272926_confused-clipart-confused-person-confused-png.png'"
                             alt="notfound">
                    </div>
                </div>
            </div>
        </div>
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
