<template>
    <div>
        <Cube v-if="slider.length == 0"></Cube>
        <header-component v-if="slider.length > 0"></header-component>
        <div class="container-fluid carbidding-container" v-if="slider.length > 0">
            <section id="lastcars">
                <div class="container container-back">
                    <div id="bs4-slide-carousel" class="carousel slide d-block d-sm-none slide"
                         data-ride="carousel">
                        <div class="carousel-inner text-center">
                            <a class="carousel-control-prev" href="#bs4-slide-carousel" role="button"
                               data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#bs4-slide-carousel" role="button"
                               data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div id="carouselExampleControls" class="carousel slide d-none d-sm-block m-50 slide"
                         data-ride="carousel">
                        <div class="carousel-inner text-center carouselin">
                            <div class="carousel-item active" v-if="index == 0" v-for="(slid, index) in slider">
                                <div class="row">
                                    <div class="col slider-col">
                                        <img class="img-fluid" :src="'/img/'+slid.mainpics"
                                             :alt="slid.name">
                                        <div class="car-informacion">
                                            <div class="inform-text">
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Лот | #{{slid.id}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>{{slid.name}} | {{slid.year}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Текущая цена | {{slid.currentPrice}} ₽</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Начало торгов | {{slid.auctionStart}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Завершение торгов: | {{slid.endOfAuction}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <router-link :to="'/cars/'+slid.id"
                                                                     :key="slid.id">
                                                            <button type="button" class="btn btn-light">Смотреть
                                                            </button>
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" v-if="index !== 0" v-for="(slid, index) in slider">
                                <div class="row">
                                    <div class="col slider-col">
                                        <img class="img-fluid" :src="'/img/'+slid.mainpics"
                                             :alt="slid.name">
                                        <div class="car-informacion">
                                            <div class="inform-text">
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Лот | #{{slid.id}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>{{slid.name}} | {{slid.year}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Текущая цена | {{slid.currentPrice}} ₽</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Начало торгов | {{slid.auctionStart}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Завершение торгов: | {{slid.endOfAuction}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <router-link :to="'/cars/'+slid.id" :key="slid.id">
                                                            <button type="button" class="btn btn-light">Смотреть
                                                            </button>
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                               data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only"></span>
                            </a>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
                               data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container container-back" v-if="slider.length > 0">
                <div class="row body-cats">
                    <div class="car_types_div">
                        <ul class="nav nav-tabs" id="carTypes">
                            <li  @click="classLi(0)" role="presentation" class="body-cars carTypeActive" data-id="0">
                                <a title="Все типы">
                                    <i class="fas fa-car-side" icon-id="0"></i>
                                    <p class="carTypesText">Все типы</p>
                                </a>
                            </li>
                            <li  @click="classLi(3)" role="presentation" class="body-cars" data-id="3">
                                <a title="Легковые">
                                    <i class="fas fa-car" icon-id="3"></i>
                                    <p class="carTypesText">Легковые</p>
                                </a>
                            </li>
                            <li  @click="classLi(4)" role="presentation" class="body-cars" data-id="4">
                                <a
                                   title="Легкие коммерческие">
                                    <i class="fas fa-truck"></i>
                                    <p class="carTypesText">Легкие коммерческие</p>
                                </a>
                            </li>
                            <li  @click="classLi(5)" role="presentation" class="body-cars" data-id="5">
                                <a title="Грузовые">
                                    <i class="fas fa-truck-moving" icon-id="4"></i>
                                    <p class="carTypesText">Грузовые</p>
                                </a>
                            </li>
                            <li @click="classLi(6)" role="presentation" class="body-cars" data-id="6">
                                <a
                                   title="Седельные тягачи">
                                    <i class="fas fa-truck-pickup" icon-id="5"></i>
                                    <p class="carTypesText">Седельные тягачи</p>
                                </a>
                            </li>
                            <li  @click="classLi(7)" role="presentation" class="body-cars" data-id="7">
                                <a  title="Прицепы">
                                    <i class="fas fa-truck-loading" icon-id="6"></i>
                                    <p class="carTypesText">Прицепы</p>
                                </a>
                            </li>
                            <li @click="classLi(8)" role="presentation" class="body-cars" data-id="8">
                                <a class="carType-bus activeback body-car-back7" title="Автобусы">
                                    <i class="fas fa-bus" icon-id="7"></i>
                                    <p class="carTypesText">Автобусы</p>
                                </a>
                            </li>
                            <li  @click="classLi(9)" role="presentation" class="body-cars" data-id="9" >
                                <a class="carType-special activeback body-car-back8" title="Спецтехника">
                                    <i class="fas fa-tractor" icon-id="9"></i>
                                    <p class="carTypesText">Спецтехника</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid car-filters" v-if="slider.length > 0">
            <div class="container container-back">
                <form action="/filtercar" type="GET">
                    <div class="row select-options-filter filter_row">
                        <div class="col">
                            <label></label>
                            <select @change="filterByModels($event)" id="model" name="modelval"
                                    class="form-control options selectbox">
                                <option value="">Все марки</option>
                                <option v-for="(model, index) in models" :value="model.id">{{ model.name
                                    }}
                                </option>
                            </select>
                        </div>
                        <div class="col">
                            <label></label>
                            <select id="state" @change="filterByStates($event)" name="stateval"
                                    class="form-control options selectbox">
                                <option value="">Все состояния</option>
                                <option v-for="(state, index) in states" :value="state.id">{{ state.name
                                    }}
                                </option>
                            </select>
                        </div>
                        <div class="col">
                            <label></label>
                            <select id="parking" name="parkingval" @change="filterByParkings($event)"
                                    class="form-control options selectbox">
                                <option value="">Все стоянки</option>
                                <option v-for="(parking, index) in parkings" :value="parking.id">
                                    {{ parking.address }}
                                </option>
                            </select>
                        </div>
                        <div class="col">
                            <label>Дата завершения</label>
                            <div class="row input-row">
                                <p>С</p>
                                <div class="col filter-date filter-date-d">
                                    <input @change="filterByStarts($event)" name="startval" type="date" id="start"
                                           value=""
                                           class="input-date form-control options">
                                </div>
                                <p>ПО</p>
                                <div class="col filter-date filter-date-d">
                                    <input @change="filterByEnds($event)" name="endval" type="date" id="finish" value=""
                                           class="input-date form-control options">
                                    <input type="hidden" :value="bodiesId" name="bodyval">
                                </div>
                            </div>
                        </div>
                        <div class="col filter-date filter-date-btn">
                            <button class="btn btn-light searchcarsauction" type="submit">
                                <i class="fas fa-search" style="display: inline-block;"></i> {{this.allCarsLength}}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
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
                                    <p>{{auction.currentPrice}}₽</p>
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
                bodies: [],
                states: [],
                parkings: [],
                models: [],
                cars: [],
                offsetCars: [],
                firstSlider: [],
                slider: [],
                filters: [],
                startAu: '',
                endAu: '',
                stateId: '',
                modelId: '',
                parkingId: '',
                bodiesId: '',
                currentPage: 0,
                offset: 1,
                allCarsLength: null,
                auctioncars: [],
                id: this.$router.currentRoute.params['id']
            }
        },
        created: function () {
            this.fetchBodies();
            this.fetchModels();
            this.fetchParkings();
            this.fetchStates();
            this.fetchSlider();
            this.fetchAuctionCars(this.id);
            this.getResults(1, this.id);
        },
        methods: {
            classLi(id) {
                const li = document.getElementsByClassName("body-cars");
                for(let i=0;i<li.length;i++){
                    li[i].classList.remove("carTypeActive");
                }
                document.querySelector('li[data-id="' + id + '"]').classList.add("carTypeActive");
                this.bodiesId = id;
                if (!id) {
                    axios.get('/fetchcarsall').then(response => {
                        this.offsetCars = [];
                        for (let i = 0; i < Math.ceil(response.data.length / 6); i++) {
                            this.offsetCars.push(i);
                        }
                        return this.allCarsLength = response.data.filter(obj => (obj.categorId == this.id)).length;
                    })
                }
                if (id) {
                    axios.get('/fetchcarsall').then(response => {
                        this.offsetCars = [];
                        for (let i = 0; i < Math.ceil(response.data.length / 6); i++) {
                            this.offsetCars.push(i);
                        }
                        return this.allCarsLength = response.data.filter(obj => (obj.bodyId === id) && (this.stateId == obj.stateId || this.stateId == '') && (obj.categorId == this.id) && (this.parkingId == obj.parkingId || this.parkingId == '') && (this.modelId == obj.modelId || this.modelId == '') && (this.parkingId == obj.parkingId || this.parkingId == '') && (!this.startAu || this.startAu >= new Date(obj.auctionStart).getTime()) && (!this.endAu || this.endAu <= new Date(obj.endOfAuction).getTime())).length;
                    })
                }
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
            fetchBodies() {
                axios.get('/fetchbodies').then(response => {
                    this.bodies = response.data;
                })
            },
            fetchModels() {
                axios.get('/fetchmodels').then(response => {
                    this.models = response.data;
                })
            },
            fetchParkings() {
                axios.get('/fetchparkings').then(response => {
                    this.parkings = response.data;
                })
            },
            fetchStates() {
                axios.get('/fetchstates').then(response => {
                    this.states = response.data;
                })
            },
            fetchSlider() {
                axios.get('/fetchslider').then(response => {
                    this.firstSlider = response.data[0];
                    this.slider = response.data;
                })
            },
            filterByParkings(event) {
                this.parkingId = event.target.value;
                axios.get('/auctionall/' + this.id).then(response => {
                    this.allCarsLength = response.data.filter(obj => (obj.parkingId == this.parkingId) && (this.stateId == obj.stateId || this.stateId == '') && (this.modelId == obj.modelId || this.modelId == '') && (this.bodiesId == obj.bodyId || this.bodiesId == '') && (!this.startAu || this.startAu >= new Date(obj.auctionStart).getTime()) && (!this.endAu || this.endAu <= new Date(obj.endOfAuction).getTime())).length;
                })
            },
            filterByStarts(event) {
                this.startAu = new Date(event.target.value).getTime();
                axios.get('/auctionall/' + this.id).then(response => {
                    this.allCarsLength = response.data.filter(obj => ((new Date(obj.auctionStart).getTime()) >= this.startAu) && (this.stateId == obj.stateId || this.stateId == '') && (this.parkingId == obj.parkingId || this.parkingId == '') && (this.modelId == obj.modelId || this.modelId == '') && (this.bodiesId == obj.bodyId || this.bodiesId == '') && (!this.endAu || this.endAu <= new Date(obj.endOfAuction).getTime())).length;
                })
            },
            filterByEnds(event) {
                this.endAu = new Date(event.target.value).getTime();
                axios.get('/auctionall/' + this.id).then(response => {
                    this.allCarsLength = response.data.filter(obj => ((new Date(obj.endOfAuction).getTime()) <= this.endAu) && (this.stateId == obj.stateId || this.stateId == '') && (this.parkingId == obj.parkingId || this.parkingId == '') && (this.modelId == obj.modelId || this.modelId == '') && (this.bodiesId == obj.bodyId || this.bodiesId == '') && (!this.startAu || this.startAu >= new Date(obj.auctionStart).getTime())).length;
                })
            },
            filterByModels(event) {
                this.modelId = event.target.value;
                axios.get('/auctionall/' + this.id).then(response => {
                    this.allCarsLength = response.data.filter(obj => (obj.modelId == this.modelId) && (this.stateId == obj.stateId || this.stateId == '') && (this.parkingId == obj.parkingId || this.parkingId == '') && (this.bodiesId == obj.bodyId || this.bodiesId == '') && (!this.startAu || this.startAu >= new Date(obj.auctionStart).getTime()) && (!this.endAu || this.endAu <= new Date(obj.endOfAuction).getTime())).length;
                })
            },
            filterByStates(event) {
                this.stateId = event.target.value;
                axios.get('/auctionall/' + this.id).then(response => {
                    this.allCarsLength = response.data.filter(obj => (obj.stateId == this.stateId) && (this.bodiesId == obj.bodyId || this.bodiesId == '') && (this.parkingId == obj.parkingId || this.parkingId == '') && (this.modelId == obj.modelId || this.modelId == '') && (!this.startAu || this.startAu >= new Date(obj.auctionStart).getTime()) && (!this.endAu || this.endAu <= new Date(obj.endOfAuction).getTime())).length;
                })
            },
            fetchAuctionCars(id) {
                axios.get('/auctionall/' + id).then(response => {
                    this.allCarsLength = response.data.length;
                    this.offsetCars = [];
                    for (let i = 0; i < Math.ceil(response.data.length / 6); i++) {
                        this.offsetCars.push(i);
                    }
                })
            },
        },
        watch: {
            $route(toR, fromR) {
                this.id = toR.params['id'];
                this.fetchAuctionCars(this.id);
                this.getResults(1, this.id);
            },
        }
    }

</script>

<style scoped>

</style>
