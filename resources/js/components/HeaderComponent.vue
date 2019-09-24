<template>
    <div>
        <div class="container-fluid headerback">
            <div class="container-fluid carnavbar">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2">
                            <router-link to="/"><img src="/img/desing_img/carbiddinglogo.png" class="headerlogo"
                                                     alt="logo"></router-link>
                        </div>
                        <div class="col-md-9 offset-1">
                            <div class="col-md-12 menunavbar">
                                <ul>
                                    <li>
                                        <a>Меню</a>
                                        <ol>
                                            <li>
                                                <router-link to="/">Главная</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/faq">Вопрос-ответ</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/about">О компании</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/rules">Правила</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/contacts">Контакты</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/contacts">Контакты</router-link>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <a>Все Аукционы</a>
                                        <ol>
                                            <li>
                                                <router-link to="/auctions">Главная</router-link>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <a>Быстрый поиск</a>
                                    </li>
                                    <li>
                                        <a>Войти</a>
                                    </li>
                                    <li>
                                        <a>Регистрация</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <section id="lastcars">
                    <div class="container">
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
                            <div class="carousel-inner text-center">
                                <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col slider-col">
                                            <img class="img-fluid" :src="'/img/auctions/'+firstSlider.mainpics"
                                                 alt="Ellips">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item" v-if="index !== 0" v-for="(slid, index) in slider">
                                    <div class="row">
                                        <div class="col slider-col">
                                            <img class="img-fluid" :src="'/img/auctions/'+slid.mainpics"
                                                 alt="Security Dream">
                                            <div class="car-informacion">
                                                <div class="inform-text">
                                                    <div class="row">
                                                        <div class="col">
                                                            <p>{{slid.name}} | {{slid.year}}</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <p>Текущая цена | {{slid.currentPrice}}</p>
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent",
        data() {
            return {
                firstSlider: [],
                slider: []
            }
        },
        created: function () {
            this.fetchSlider();
        },

        methods: {
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
