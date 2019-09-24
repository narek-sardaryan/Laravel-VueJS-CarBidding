<template>
    <div>
        <div class="container-fluid">
            <div class="container">
                <div class="row body-cats">
                    <div v-for="(body, index) in bodies" :id="body.id" class="col-md-1 body-cars">
                        <div class="row">
                            <div class="col">
                                <img :src="'/img/desing_img/'+body.icons" :alt="body.name">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p class="body-name">{{ body.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid car-filters">
            <div class="container">
                <div class="row select-options-filter">
                    <div class="col-md-2">
                        <label></label>
                        <select name="model" class="form-control options" id="select-model">
                            <option value="">Все марки</option>
                            <option v-for="(model, index) in models" :value="model.id" :id="model.id">{{ model.name }}
                            </option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label></label>
                        <select name="state" class="form-control options" id="select-state">
                            <option value="">Все состояния</option>
                            <option v-for="(state, index) in states" :value="state.id" :id="state.id">{{ state.name }}
                            </option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label></label>
                        <select name="parking" class="form-control options" id="select-parking">
                            <option value="">Все стоянки</option>
                            <option v-for="(parking, index) in parkings" :value="parking.id" :id="parking.id">
                                {{parking.address }}
                            </option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label>Поиск</label>
                        <input type="text" name="name">
                    </div>
                    <div class="col-md-4">
                        <label>Дата завершения</label>
                        <div class="row input-row">
                            <p>С</p>
                            <div class="col-md-6 filter-date">
                                <input type="date" name="start" class="input-date">
                            </div>
                            <p>ПО</p>
                            <div class="col-md-6 filter-date">
                                <input type="date" name="finish" class="input-date">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="float-right">
                    <div>
                        <button class="btn btn-primary searchcarsauction" type="submit">
                            Поиск
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="container">
                <div class="row cars-root">
                    <div class="col-md-4 cars-article" v-for="(car, index) in cars">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                bodies: [],
                states: [],
                parkings: [],
                models: [],
                cars: []
            }
        },
        created: function () {
            this.fetchBodies();
            this.fetchModels();
            this.fetchParkings();
            this.fetchStates();
            this.fetchCars();
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
            fetchCars() {
                axios.get('/fetchcars').then(response => {
                    this.cars = response.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>
