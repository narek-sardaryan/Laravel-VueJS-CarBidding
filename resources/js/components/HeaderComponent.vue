<template>
    <div>
        <div class="container-fluid headerback" v-if="auctions.length > 0">
            <div class="container-fluid  fixed-top" id="carnavbar">
                <div class="container">
                    <div class="row">
                        <nav class="navbar navbar-expand-lg mobile_nav">
                            <div class="logo_img_div">
                                <router-link to="/#"><img src="/img/design_img/header_logo.png" id="headerlogo" alt="logo"></router-link>
                            </div>
                            <div class="responsive">
                                <button class="navbar-toggler third-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent22"
                                        aria-controls="navbarSupportedContent22" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="icon"><i class="fas fa-bars fa-1x"></i></span>
                                </button>
                                <div class="navbar-collapse collapse " id="navbarSupportedContent22">
                                    <div class="menunavbar">
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <a>Меню</a>
                                                <i class="fas fa-angle-down"></i>
                                                <ol>
                                                    <li class="nav-item">
                                                        <router-link to="/">Главная</router-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <router-link to="/faq">Вопрос-ответ</router-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <router-link to="/about">О компании</router-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <router-link to="/rules">Правила</router-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <router-link to="/contacts">Контакты</router-link>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li class="nav-item">
                                                <a>Все Аукционы</a>
                                                <i class="fas fa-angle-down"></i>
                                                <ol>
                                                    <li class="nav-item" v-for="auction in auctions">
                                                        <router-link :to="'/auctions/'+auction.id">{{auction.name}}
                                                        </router-link>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li class="nav-item" v-if="user.length == 0">
                                                <router-link to="/login">Войти</router-link>
                                            </li>
                                            <li class="nav-item" v-if="user.length == 0">
                                                <router-link to="/register">Регистрация</router-link>
                                            </li>
                                            <li class="nav-item" v-if="user.length != 0">
                                                <a>{{user.name}}</a>
                                                <i class="fas fa-angle-down"></i>
                                                <ol>
                                                    <li class="nav-item" v-if="user.usertype == 'admin'">
                                                        <a href="/admin">Админ Панель</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <router-link to="/profile">Профиль</router-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <form action="logout" method="POST">
                                                            <button class="logoutbut"
                                                                    type="submit">
                                                                <a>Выход</a>
                                                            </button>
                                                            <input type="hidden" name="_token" :value="csrf">
                                                        </form>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="searchbox_div">
                                <form class="searchbox"  action="/searchcar" method="GET" >
                                    <div class="input-group no-border searchdiv">
                                        <input type="text" name="name" class="form-control searchinput"
                                               placeholder="Search...">
                                        <div class="input-group-append">
                                            <div class="input-group-text searchicon">
                                                <button class="butsearch"
                                                        type="submit"><img
                                                    src="/img/design_img/search-icon-90107.png"
                                                    style="width:18px;" alt="searchicon">
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent",
        data() {
            return {
                auctions: [],
                user: [],
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            }
        },
        created: function () {
            this.fetchAuctions();
            this.fetchUser();
        },
        updated() {
            if (window.scrollY > 0) {
                document.getElementById('carnavbar').style.background = 'white'
            };
        },
        methods: {
            fetchAuctions() {
                axios.get('/fetchauctions').then(response => {
                    this.auctions = response.data;
                })
            },
            fetchUser() {
                axios.get('/fetchUser').then(response => {
                    this.user = response.data;
                })
            },
            //reloadForAuctions() {
            // window.location.reload();
            // },
        }
    }
</script>
<style scoped>
</style>




