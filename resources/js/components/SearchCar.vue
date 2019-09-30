<template>
    <div>
        <div class="container-fluid">
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
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col slider-col">
                                        <img class="img-fluid" :src="'/img/auctions/'+firstSlider.mainpics"
                                             :alt="firstSlider.name">
                                        <div class="car-informacion">
                                            <div class="inform-text">
                                                <div class="row">
                                                    <div class="col">
                                                        <p>{{firstSlider.name}} | {{firstSlider.year}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Текущая цена | {{firstSlider.currentPrice}} ₽</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Начало торгов | {{firstSlider.auctionStart}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p>Завершение торгов: | {{firstSlider.endOfAuction}}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <router-link :to="'/cars/'+firstSlider.id"
                                                                     :key="firstSlider.id">
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
                                        <img class="img-fluid" :src="'/img/auctions/'+slid.mainpics"
                                             :alt="slid.name">
                                        <div class="car-informacion">
                                            <div class="inform-text">
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
            <div class="container container-back">
                <div class="row body-cats">
                    <div class="col-md-1 body-cars">
                        <router-link to="/sedan" active-class="active">
                            <div class="row">
                                <div class="col body-car-back1">

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-name">
                                    <p class="body-name">Все типы</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-1 body-cars">
                        <router-link to="/sedan" active-class="active">
                            <div class="row">
                                <div class="col body-car-back2">

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-name">
                                    <p class="body-name">Легковые</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-1 body-cars">
                        <router-link to="/buses" active-class="active">
                            <div class="row">
                                <div class="col body-car-back3">

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-name">
                                    <p class="body-name">Автобусы</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-1 body-cars">
                        <router-link to="/light_commercial" active-class="active">
                            <div class="row">
                                <div class="col body-car-back4">

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-name">
                                    <p class="body-name">Легкие коммерческие</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-1 body-cars">
                        <router-link to="/freight" active-class="active">
                            <div class="row">
                                <div class="col body-car-back5">

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-name">
                                    <p class="body-name">Грузовые</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-1 body-cars">
                        <router-link to="/sedan" active-class="active">
                            <div class="row">
                                <div class="col body-car-back6">

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-name">
                                    <p class="body-name">Легковые</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-1 body-cars">
                        <router-link to="/trailers" active-class="active">
                            <div class="row">
                                <div class="col body-car-back7">

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-name">
                                    <p class="body-name">Прицепы</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-1 body-cars">
                        <router-link to="/special_machinery" active-class="active">
                            <div class="row">
                                <div class="col body-car-back8">

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-name">
                                    <p class="body-name">Спецтехника</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid car-filters">
            <div class="container container-back">
                <div class="row select-options-filter">
                    <div class="col">
                        <label></label>
                        <select name="model" class="form-control options selectbox" id="select-model">
                            <option value="">Все марки</option>
                            <option v-for="(model, index) in models" :value="model.id" :data-id="model.id">{{ model.name
                                }}
                            </option>
                        </select>
                    </div>
                    <div class="col">
                        <label></label>
                        <select name="state" class="form-control options selectbox" id="select-state">
                            <option value="">Все состояния</option>
                            <option v-for="(state, index) in states" :value="state.id" :data-id="state.id">{{ state.name
                                }}
                            </option>
                        </select>
                    </div>
                    <div class="col">
                        <label></label>
                        <select name="parking" class="form-control options selectbox" id="select-parking">
                            <option value="">Все стоянки</option>
                            <option v-for="(parking, index) in parkings" :value="parking.id" :data-id="parking.id">
                                {{ parking.address }}
                            </option>
                        </select>
                    </div>
                    <div class="col">
                        <label>Дата завершения</label>
                        <div class="row input-row">
                            <p>С</p>
                            <div class="col filter-date">
                                <input type="date" name="start" class="input-date form-control options">
                            </div>
                            <p>ПО</p>
                            <div class="col filter-date">
                                <input type="date" name="finish" class="input-date form-control options">
                            </div>
                            <div class="col filter-date">
                                <button class="btn btn-light searchcarsauction" type="submit">
                                    Показать
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="container container-back">
                <div class="row cars-root">
                    <div class="col-md-4 cars-article" v-for="(car, index) in cars">
                        <router-link :to="'/cars/'+car.id" :key="car.id">
                            <div class="row">
                                <div class="col-md-12 text-hover">
                                    <img :src="'/img/auctions/'+car.mainpics" :alt="car.name">
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchCar",
        props: ['cars'],
        data() {
            return {
                bodies: [],
                states: [],
                parkings: [],
                models: [],
                cars: [],
                carss: [],
                firstSlider: [],
                slider: []
            }
        },
        created: function () {
            this.fetchBodies();
            this.fetchModels();
            this.fetchParkings();
            this.fetchStates();
            // this.fetchCars();
            this.fetchSlider();
        },
        methods: {
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
            // fetchCars() {
            //     axios.get('/fetchcars').then(response => {
            //         this.cars = response.data;
            //     })
            // },
            fetchSlider() {
                axios.get('/fetchslider').then(response => {
                    this.firstSlider = response.data[0];
                    this.slider = response.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>
