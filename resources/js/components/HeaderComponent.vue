<template>
    <div>
        <div class="container-fluid headerback" v-if="auctions.length > 0">
            <div class="container-fluid carnavbar fixed-top">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2">
                            <router-link to="/#"><img src="/img/design_img/header_logo.png"  id="headerlogo"
                                                      alt="logo"></router-link>
                        </div>
                        <div class="col-md-9 offset-1">
                            <div class="col-md-12 menunavbar">
                                <ul>
                                    <li>
                                        <a>Меню <p style="display:inline-block;transition: 0.6s;color:#2099FE;">⇩</p>
                                        </a>
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
                                        </ol>
                                    </li>
                                    <li>
                                        <a>Все Аукционы <p style="display:inline-block;transition: 0.6s;color:#2099FE;">
                                            ⇩</p></a>
                                        <ol>
                                            <li @click="reloadForAuctions" v-for="auction in auctions">
                                                <router-link :to="'/auctions/'+auction.id">{{auction.name}}
                                                </router-link>
                                            </li>
                                        </ol>
                                    </li>
                                    <li v-if="user.length == 0">
                                        <router-link to="/login">Войти</router-link>
                                    </li>
                                    <li v-if="user.length == 0">
                                        <router-link to="/register">Регистрация</router-link>
                                    </li>
                                    <li v-if="user.length != 0">
                                        <a>{{user.name}} <p
                                            style="display:inline-block;transition: 0.6s;color:#2099FE;">⇩</p></a>
                                        <ol>
                                            <li>
                                                <router-link to="/profile">Профиль</router-link>
                                            </li>
                                            <li>
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
                                    <li class="searchbox">
                                        <form action="/searchcar" method="GET" style="padding: 5px 10px 5px 10px;">
                                            <div class="input-group no-border searchdiv">
                                                <input type="text" name="name" class="form-control searchinput"
                                                       placeholder="Search...">
                                                <div class="input-group-append">
                                                    <div class="input-group-text searchicon">
                                                        <button class="butsearch"
                                                                type="submit"><img
                                                            src="/img/design_img/search-icon-90107.png"
                                                            style="width:18px;" alt="searchicon"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </li>
                                </ul>
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
        methods: {
            fetchAuctions() {
                axios.get('/fetchauctions').then(response => {
                    this.auctions = response.data;
                })
            },
            fetchUser() {
                axios.get('/fetchUser').then(response => {
                    this.user = response.data;
                    console.log(this.user)
                })
            },
            reloadForAuctions() {
                window.location.reload();
            },
        }
    }
</script>

<style scoped>

</style>


