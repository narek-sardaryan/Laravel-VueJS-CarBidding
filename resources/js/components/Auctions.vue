<template>
    <div>
        <Cube v-if="slider.length == 0"></Cube>
        <header-component v-if="slider.length > 0"></header-component>
        <slider v-if="slider.length > 0" :sliders="this.slider"></slider>
        <statistic v-if="slider.length > 0"></statistic>
        <filters v-if="slider.length > 0" :allcars="allcars"></filters>
        <div class="container-fluid" v-if="slider.length > 0">
            <div class="container container-back" v-if="auctioncars.length != 0">
                <div class="row cars-root">
                    <div class="col-md-4 cars-article" v-for="(auction, index) in auctioncars.data.data">
                        <router-link :to="'/cars/'+auction.id" :key="auction.id">
                            <div class="row">
                                <div class="col-md-12 text-hover">
                                    <img :src="'/img/'+auction.mainpics" :alt="auction.name">
                                    <div class="car-informacion-article">
                                        <div class="inform-text-article">
                                            <div class="drop-text">
                                                <div class="row">
                                                    <div class="col">
                                                        <p>{{auction.name}} | {{auction.year}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Текущая цена | {{auction.currentPrice}} ₽</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Начало торгов | {{auction.auctionStart}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Завершение торгов: | {{auction.endOfAuction}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="article-price">
                                   {{auction.currentPrice}}₽
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <pagination :data="auctioncars.data" @pagination-change-page="getResultsPagein"></pagination>
            </div>
            <div class="container container-back" v-if="auctioncars.length == 0">
                <div class="row cars-root">
                    <div class="col-md-8 notfoundtxt">
                        <h1>По вашему запросу ничего не найдено</h1>
                    </div>
                    <div class="col-md-2 notfoundimg">
                        <img src="/img/design_img/27-272926_confused-clipart-confused-person-confused-png.png"
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
