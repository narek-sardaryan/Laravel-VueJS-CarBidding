<template>
    <div class="container-fluid">
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
                                <div class="inform_txt_responsive">
                                    <p class="inform_txt_p">{{car.name}} | {{car.year}}</p>
                                    <p class="inform_txt_p">Текущая цена |  {{car.currentPrice}} ₽</p>
                                    <p class="inform_txt_p">Начало торгов | {{car.auctionStart}}</p>
                                    <p class="inform_txt_p">Завершение торгов: | {{car.endOfAuction}}</p>
                                </div>
                            </div>
                            <div class="article-price">
                                {{car.currentPrice}}₽
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
</template>

<script>
    export default {
        name: "Carsroot",
        props: ['cars'],
        methods: {
            getResults(page){
                this.$emit('page', page)
            }
        }
    }
</script>

<style scoped>

</style>
