<template>
  <div>
    <div class="container-fluid margin">
      <div class="container">
        <div class="row main_row">
          <div class="col cars_section">
            <img class="img-fluid" id="main_pic" :src="'/img/auctions/'+car.mainpics" alt="BMW">
            <div class="row small_pics_row">
              <div v-for="image in images" class="col smallSlide">
                <img @click="slide(image.id)" :id="image.id" class="img-fluid smallImages" :src="'/img/auctions/'+image.name" alt="Slide">
              </div>
            </div>
          </div>
          <div class="col car_info">
            <span class="lot_number">Лот №1907-0906</span>
            <h6 class="current_prize">текущая цена: {{ car.currentPrice }} &#8381;</h6>
            <h6 class="car_type">Легковой автомобиль {{ car.name }} {{ car.year }} </h6>
            <ul class="auction_desc">
              <li>начало аукциона: {{ car.auctionStart }}</li>
              <li>окончание аукциона: {{ car.endOfAuction }}</li>
              <li>начальная цена: {{ car.startingPrice }}</li>
              <li>шаг аукциона: {{ car.auctionStep }}</li>
              <li>ставка НДС: в том числе 20%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShowCar",
      data() {
        return {
          // id:this.$router.currentRoute.params['id'],
          id:this.$route.params['id'],
          car: [],
          images: [],
          }
        },
      created: function () {
        this.fetchCar();
        this.fetchImages();
      },
    methods: {
      fetchCar(){
        axios.get('/car/'+this.id).then(response => {
          this.car = response.data;
            console.log(this.car);
          })
        },
      fetchImages(){
        axios.get('/images').then(response => {
          this.images = response.data.filter(obj => obj.carID == this.id);
            console.log(this.images.mainpics);
          })
        },
      slide(id){
        var current = document.getElementById('main_pic');
        var that = document.getElementById(id);
        var src = that.getAttribute('src');
        current.setAttribute('src', src);
      }
    },
    watch: {
      $route(toR, fromR){
        this.id = toR.params['id']
      }
    }
  }
</script>

<style coped>
</style>
