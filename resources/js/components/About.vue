<template>
    <div>
        <header-component></header-component>
        <div class="bg_img" style="margin-top: 79px;">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-md-6 about_div">
                        <h1 class="about_paragraph">О компании</h1>
                        <p class="about_txt">
                        <p class="hello">Здравствуйте!</p>
                        Мы создали нашу компанию в 2006 году. У нас была цель, сделать красивый и современный
                        бизнес.<br>
                        Воплощая эту идею, мы создали в сети Интернет торговую площадку по продаже аварийных
                        автомобилей. Нас с самого начала не интересовали простые доски объявлений – мы стремились
                        создать именно сайт по оценке и продаже автомобилей после ДТП, где конечную стоимость
                        продаваемого поврежденного автомобиля, будет определять рынок – именно такая цена является
                        справедливой и для продавцов – страховых и лизинговых компаний, и для покупателей.
                        Воплощая эту идею, мы создали в сети Интернет торговую площадку по продаже аварийных
                        автомобилей. Нас с самого начала не интересовали простые доски объявлений – мы стремились
                        создать именно сайт по оценке и продаже автомобилей после ДТП, где конечную стоимость
                        продаваемого поврежденного автомобиля, будет определять рынок – именно такая цена является
                        справедливой и для продавцов – страховых и лизинговых компаний, и для покупателей.
                        Воплощая эту идею, мы создали в сети Интернет торговую площадку по продаже аварийных
                        автомобилей. Нас с самого начала не интересовали простые доски объявлений – мы стремились
                        создать именно сайт по оценке и продаже автомобилей после ДТП, где конечную стоимость
                        продаваемого поврежденного автомобиля, будет определять рынок – именно такая цена является
                        справедливой и для продавцов – страховых и лизинговых компаний, и для покупателей.
                        </p>
                        <transition name="slide-fade">
                            <p class="add_txt_show" v-if="show">
                                Воплощая эту идею, мы создали в сети Интернет торговую площадку по продаже аварийных
                                автомобилей. Нас с самого начала не интересовали простые доски объявлений – мы
                                стремились создать именно сайт по оценке и продаже автомобилей после ДТП, где конечную
                                стоимость продаваемого поврежденного автомобиля, будет определять рынок – именно такая
                                цена является справедливой и для продавцов – страховых и лизинговых компаний, и для
                                покупателей.
                            </p>
                        </transition>
                        <button class="show_more_btn" @click="show = !show">Show More</button>
                    </div>
                </div>
            </div>
        </div>
        <section class="partners">
            <div class="container">
                <h3 class="partners_title">Наши партнеры</h3>
                <div id="carouselAbout" class="carousel slide m-50 slide"
                     data-ride="carousel">
                    <div class="carousel-inner text-center">
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col">
                                    <img v-lazy-src="'/img/about_img/bmw].png'">
                                </div>
                                <div class="col">
                                    <img v-lazy-src="'/img/about_img/lexus.png'">
                                </div>
                                <div class="col">
                                    <img v-lazy-src="'/img/about_img/mercedes.png'">
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <div class="col">
                                    <img v-lazy-src="'/img/about_img/bmw].png'">
                                </div>
                                <div class="col">
                                    <img v-lazy-src="'/img/about_img/lexus.png'">
                                </div>
                                <div class="col">
                                    <img v-lazy-src="'/img/about_img/mercedes.png'">
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <div class="col">
                                    <img v-lazy-src="'/img/about_img/bmw].png'">
                                </div>
                                <div class="col">
                                    <img v-lazy-src="'/img/about_img/lexus.png'">
                                </div>
                                <div class="col">
                                    <img v-lazy-src="'/img/about_img/mercedes.png'">
                                </div>
                            </div>
                        </div>
                        <a class="carousel-arrow-left" href="#carouselAbout" role="button" data-slide="next">
                            <i class="fas fa-chevron-left"></i>
                        </a>
                        <a class="carousel-arrow-right" href="#carouselAbout" role="button" data-slide="prev">
                            <i class="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <footer-component></footer-component>
    </div>
</template>

<script>
    export default {
        name: "About",
        data: function () {
            return {
                show: false
            }
        }
    }
</script>
<style scoped>
</style>
