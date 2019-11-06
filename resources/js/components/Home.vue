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
                                        <img class="img-fluid" v-lazy-src="'/img/'+slid.mainpics"
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
                                        <img class="img-fluid" v-lazy-src="'/img/'+slid.mainpics"
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
                    <div class="col-md-1 body-cars" data-id="0" @click="filterByBodies(0)">
                        <div class="row body_icons">
                            <i class="fas fa-car-side" icon-id="0"></i>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-name">
                                <p class="body-name" p-id="0">Все типы</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1 body-cars" data-id="3" @click="filterByBodies(3)">
                        <div class="row body_icons">
                            <i class="fas fa-car" icon-id="3"></i>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-name">
                                <p class="body-name" p-id="3">Легковые</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1 body-cars" data-id="8" @click="filterByBodies(8)">
                        <div class="row body_icons">
                            <i class="fas fa-bus" icon-id="8"></i>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-name">
                                <p class="body-name" p-id="8">Автобусы</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1 body-cars" data-id="4" @click="filterByBodies(4)">
                        <div class="row body_icons">
                            <i class="fas fa-truck" icon-id="4"></i>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-name">
                                <p class="body-name" p-id="4">Легкие коммерческие</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1 body-cars" data-id="5" @click="filterByBodies(5)">
                        <div class="row body_icons">
                            <i class="fas fa-truck-moving" icon-id="5"></i>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-name">
                                <p class="body-name" p-id="5">Грузовые</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1 body-cars" data-id="6" @click="filterByBodies(6)">
                        <div class="row body_icons">
                            <i class="fas fa-truck-pickup" icon-id="6"></i>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-name">
                                <p class="body-name" p-id="6">Седельные тягачи</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1 body-cars" data-id="7" @click="filterByBodies(7)">
                        <div class="row body_icons">
                            <i class="fas fa-truck-loading" icon-id="7"></i>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-name">
                                <p class="body-name" p-id="7">Прицепы</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1 body-cars" data-id="9" @click="filterByBodies(9)">
                        <div class="row body_icons">
                            <i class="fas fa-tractor" icon-id="9"></i>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-name">
                                <p class="body-name" p-id="9">Спецтехника</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid car-filters" v-if="slider.length > 0">
            <div class="container container-back">
                <form action="/filtercar" type="GET">
                    <div class="row select-options-filter">
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
                                <div class="col filter-date">
                                    <input @change="filterByStarts($event)" name="startval" type="date" id="start"
                                           value=""
                                           class="input-date form-control options">
                                </div>
                                <p>ПО</p>
                                <div class="col filter-date">
                                    <input @change="filterByEnds($event)" name="endval" type="date" id="finish" value=""
                                           class="input-date form-control options">
                                    <input type="hidden" :value="bodiesId" name="bodyval">
                                </div>
                                <div class="col filter-date">
                                    <button class="btn btn-light searchcarsauction" type="submit">
                                        <i class="fas fa-search" style="display: inline-block;"></i> {{this.allCarsLength}}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
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
                        <img v-lazy-src="'/img/design_img/27-272926_confused-clipart-confused-person-confused-png.png'" alt="notfound">
                    </div>
                </div>
            </div>
        </div>
        <footer-component v-if="slider.length > 0"></footer-component>
    </div>
</template>

<script>
    import Cube from './Cube';
    export default {
        name: "Home",
        props:["carsall"],
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
                allCarsLength: null,
            }
        },
         created: function () {
            this.fetchBodies();
            this.fetchModels();
            this.fetchParkings();
            this.fetchStates();
            this.fetchSlider();
            this.getResults();
        },
        component: {
            Cube
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
            fetchCars() {
                axios.get('/fetchcarsall').then(response => {
                    this.allCarsLength = response.data.length;
                    this.offsetCars = [];
                    for (let i = 0; i < Math.ceil(response.data.length / 6); i++) {
                        this.offsetCars.push(i);
                    }
                })
            },
            fetchSlider() {
                axios.get('/fetchslider').then(response => {
                    this.firstSlider = response.data[0];
                    this.slider = response.data;
                })
            },
            filterByBodies: function(id) {
                this.bodiesId = id;
                if (!id) {
                    axios.get('/fetchcarsall').then(response => {
                        this.offsetCars = [];
                        for (let i = 0; i < Math.ceil(response.data.length / 6); i++) {
                            this.offsetCars.push(i);
                        }
                        return this.allCarsLength = response.data.length;
                    })
                }
                if (id) {
                    axios.get('/fetchcarsall').then(response => {
                        this.offsetCars = [];
                        for (let i = 0; i < Math.ceil(response.data.length / 6); i++) {
                            this.offsetCars.push(i);
                        }
                        return this.allCarsLength = response.data.filter(obj => (obj.bodyId === id) && (this.stateId == obj.stateId || this.stateId == '') && (this.parkingId == obj.parkingId || this.parkingId == '') && (this.modelId == obj.modelId || this.modelId == '') && (this.parkingId == obj.parkingId || this.parkingId == '') && (!this.startAu || this.startAu >= new Date(obj.auctionStart).getTime()) && (!this.endAu || this.endAu <= new Date(obj.endOfAuction).getTime())).length;
                    })
                }
                var disStyle = document.getElementsByClassName("body-cars");
                for (var k = 0; k < disStyle.length; k++) {
                    disStyle[k].style.background = 'white';
                    document.querySelector('p[p-id="' + disStyle[k].getAttribute('data-id') + '"]').style.color = 'black';
                    document.querySelector('i[icon-id="' + disStyle[k].getAttribute('data-id') + '"]').style.color = '#0f92ff';
                }
                var iStyle = document.querySelector('i[icon-id="' + id + '"]');
                iStyle.style.color = 'white';
                var pStyle = document.querySelector('p[p-id="' + id + '"]');
                pStyle.style.color = 'white';
                var bodyStyle = document.querySelector('div[data-id="' + id + '"]');
                bodyStyle.style.background = '#0f92ff';
            },
            filterByParkings(event) {
                this.parkingId = event.target.value;
                axios.get('/fetchcarsall').then(response => {
                    this.allCarsLength = response.data.filter(obj => (obj.parkingId == this.parkingId) && (this.stateId == obj.stateId || this.stateId == '') && (this.modelId == obj.modelId || this.modelId == '') && (this.bodiesId == obj.bodyId || this.bodiesId == '') && (!this.startAu || this.startAu >= new Date(obj.auctionStart).getTime()) && (!this.endAu || this.endAu <= new Date(obj.endOfAuction).getTime())).length;
                })
            },
            filterByStarts(event) {
                this.startAu = new Date(event.target.value).getTime();
                axios.get('/fetchcarsall').then(response => {
                    this.allCarsLength = response.data.filter(obj => ((new Date(obj.auctionStart).getTime()) >= this.startAu) && (this.stateId == obj.stateId || this.stateId == '') && (this.parkingId == obj.parkingId || this.parkingId == '') && (this.modelId == obj.modelId || this.modelId == '') && (this.bodiesId == obj.bodyId || this.bodiesId == '') && (!this.endAu || this.endAu <= new Date(obj.endOfAuction).getTime())).length;
                })
            },
            filterByEnds(event) {
                this.endAu = new Date(event.target.value).getTime();
                axios.get('/fetchcarsall').then(response => {
                    this.allCarsLength = response.data.filter(obj => ((new Date(obj.endOfAuction).getTime()) <= this.endAu) && (this.stateId == obj.stateId || this.stateId == '') && (this.parkingId == obj.parkingId || this.parkingId == '') && (this.modelId == obj.modelId || this.modelId == '') && (this.bodiesId == obj.bodyId || this.bodiesId == '') && (!this.startAu || this.startAu >= new Date(obj.auctionStart).getTime())).length;
                })
            },
            filterByModels(event) {
                this.modelId = event.target.value;
                axios.get('/fetchcarsall').then(response => {
                    this.allCarsLength = response.data.filter(obj => (obj.modelId == this.modelId) && (this.stateId == obj.stateId || this.stateId == '') && (this.parkingId == obj.parkingId || this.parkingId == '') && (this.bodiesId == obj.bodyId || this.bodiesId == '') && (!this.startAu || this.startAu >= new Date(obj.auctionStart).getTime()) && (!this.endAu || this.endAu <= new Date(obj.endOfAuction).getTime())).length;
                })
            },
            filterByStates(event) {
                this.stateId = event.target.value;
                console.log(this.stateId)
                axios.get('/fetchcarsall').then(response => {
                    this.allCarsLength = response.data.filter(obj => (obj.stateId == this.stateId) && (this.bodiesId == obj.bodyId || this.bodiesId == '') && (this.parkingId == obj.parkingId || this.parkingId == '') && (this.modelId == obj.modelId || this.modelId == '') && (!this.startAu || this.startAu >= new Date(obj.auctionStart).getTime()) && (!this.endAu || this.endAu <= new Date(obj.endOfAuction).getTime())).length;
                })
            },
        }
    }
</script>

<style scoped>

</style>
