<template>
    <div>
<!--        <transition name="fade">-->
            <Cube v-if="car.length == 0"></Cube>
<!--        </transition>-->
        <header-component v-if="car.length != 0"></header-component>
        <div class="container-fluid margin" v-if="car.length != 0">
            <div class="container">
                <div class="row main_row">
                    <div class="col cars_section">
                        <img class="img-fluid" id="main_pic" :src="'/img/auctions/'+car.mainpics" alt="BMW">
                        <div class="row small_pics_row">
                            <div v-for="image in images" class="col-md-3 smallSlide">
                                <img @click="slide(image.id)" :id="image.id" class="img-fluid smallImages"
                                     :src="'/img/auctions/'+image.name" alt="Slide">
                            </div>
                        </div>
                    </div>
                    <div class="col car_info">
                        <span class="lot_number">Лот №1907-0906</span>
                        <h6 class="current_prize">Текущая цена: {{ car.currentPrice }} &#8381;</h6>
                        <h6 class="car_type">Легковой автомобиль {{ car.name }} {{ car.year }}</h6>
                        <div class="row auction_desc_uls">
                            <div class="col ul_one">
                                <ul>
                                    <li><span>начало аукциона:</span></li>
                                    <li><span>окончание аукциона:</span></li>
                                    <li><span>начальная цена:</span></li>
                                    <li><span>шаг аукциона:</span></li>
                                    <li><span>ставка НДС:</span></li>
                                </ul>
                            </div>
                            <div class="col ul_two">
                                <ul>
                                    <li><span>{{ car.auctionStart }}</span></li>
                                    <li><span>{{ car.endOfAuction }}</span></li>
                                    <li><span>{{ car.startingPrice }}</span></li>
                                    <li><span>{{ car.auctionStep }}</span></li>
                                    <li><span>в том числе 20%</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="ending_counter_div">
                            <span class="hour_span">21ч.0м.</span>
                            <span class="txt_span">до завершения</span>
                        </div>
                    </div>
                </div>
                <div class="row mobiles_data_row">
                    <div class="col m_data_list">
                        <h5 class="car_data_title">Данные по автомобилю</h5>
                        <ul>
                            <li>Марка:</li>
                            <li>Модель:</li>
                            <li>тип по ПСМ/ПТС:</li>
                            <li>Категория:</li>
                            <li>Год выпуска:</li>
                            <li>Пробег:</li>
                            <li>VIN:</li>
                            <li>Номер ПСМ/ПТС:</li>
                            <li>Рама (шасси):</li>
                            <li>Кузов (кабина, прицеп):</li>
                        </ul>
                    </div>
                    <div class="col m_data_list">
                        <ul>
                            <li>{{ car.name }}</li>
                            <li>{{ car.name }}</li>
                            <li>{{ car.name }}</li>
                            <li>{{ car.categorId }}</li>
                            <li>{{ car.year }}</li>
                            <li>{{ car.milage }}</li>
                            <li>{{ car.name }}</li>
                            <li>{{ car.name }}</li>
                            <li>{{ car.name }}</li>
                            <li>{{ car.name }}</li>
                        </ul>
                    </div>
                    <div class="col m_data_list">
                        <ul>
                            <li>Марка:</li>
                            <li>Модель:</li>
                            <li>тип по ПСМ/ПТС:</li>
                            <li>Категория:</li>
                            <li>Год выпуска:</li>
                            <li>Пробег:</li>
                            <li>VIN:</li>
                            <li>Номер ПСМ/ПТС:</li>
                            <li>Рама (шасси):</li>
                            <li>Кузов (кабина, прицеп):</li>
                        </ul>
                    </div>
                    <div class="col m_data_list">
                        <ul>
                            <li>{{ car.name }}</li>
                            <li>{{ car.name }}</li>
                            <li>{{ car.name }}</li>
                            <li>{{ car.categorId }}</li>
                            <li>{{ car.year }}</li>
                            <li>{{ car.milage }}</li>
                            <li>{{ car.name }}</li>
                            <li>{{ car.name }}</li>
                            <li>{{ car.name }}</li>
                            <li>{{ car.name }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <footer-component v-if="car.length != 0"></footer-component>
    </div>
</template>

<script>
    import Cube from './Cube';
    export default {
        name: "ShowCar",
        data() {
            return {
                // id:this.$router.currentRoute.params['id'],
                id: this.$route.params['id'],
                car: [],
                images: [],
            }
        },
        created: function () {
            this.fetchCar();
            this.fetchImages();
        },
        component:{
            Cube
        },
        methods: {
            fetchCar() {
                axios.get('/car/' + this.id).then(response => {
                    this.car = response.data;
                    console.log(this.car);
                })
            },
            fetchImages() {
                axios.get('/images').then(response => {
                    this.images = response.data.filter(obj => obj.carID == this.id);
                })
            },
            slide(id) {
                var current = document.getElementById('main_pic');
                var that = document.getElementById(id);
                var src = that.getAttribute('src');
                current.setAttribute('src', src);
            }
        },
        watch: {
            $route(toR, fromR) {
                this.id = toR.params['id']
            }
        }
    }
</script>

<style scoped>
</style>
