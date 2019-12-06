<template>
    <div id="header_design_one">
        <div class="container-fluid headerback">
            <div class="container-fluid  fixed-top" id="carnavbar">
                <div class="container">
                    <div class="row">
                        <nav ref="aaa" class="navbar navbar-expand-lg mobile_nav">
                            <div class="logo_img_div">
                                <router-link to="/#"><img src="/img/design_img/header_logo.png" id="headerlogo" alt="logo"></router-link>
                            </div>
                            <div class="responsive">
                                <button class="navbar-toggler third-button navbar-expand-lg" type="button" data-toggle="collapse" data-target="#navbarSupportedContent22"
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
                                                    <li class="nav-item" v-for="auction in allAuctions">
                                                        <router-link :to="'/auctions/'+auction.id">{{auction.name}}
                                                        </router-link>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li class="nav-item" v-if="User.length == 0">
                                                <router-link to="/login">Войти</router-link>
                                            </li>
                                            <li class="nav-item" v-if="User.length == 0">
                                                <router-link to="/register">Регистрация</router-link>
                                            </li>
                                            <li class="nav-item" v-if="User.length != 0">
                                                <a>{{User.name}}</a>
                                                <i class="fas fa-angle-down"></i>
                                                <ol>
                                                    <li class="nav-item" v-if="User.usertype == 'admin'">
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
                                               placeholder="Поиск...">
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
    import {mapGetters} from 'vuex';
    export default {
        name: "HeaderComponent",
        data() {
            return {
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            }
        },
        mounted(){
            this.$store.dispatch('fetchAuctions');
            this.$store.dispatch('fetchUser');
            console.log(this.$ref.aaa);
        },
        computed: mapGetters(["allAuctions", "User"]),
    }
</script>
<style scoped>
</style>




