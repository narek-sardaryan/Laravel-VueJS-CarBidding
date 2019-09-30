<template>
<div>
<h1>{{car}}</h1>
</div>
</template>

<script>
    export default {
        name: "ShowCar",
        data() {
            return {
                // id:this.$router.currentRoute.params['id'],
                id:this.$route.params['id'],
                car: []
            }
        },
        created: function () {
            this.fetchCar();
        },
        methods: {
            fetchCar(){
                axios.get('/car/'+this.id).then(response => {
                    this.car = response.data;
                })
            }
        },
        watch: {
            $route(toR, fromR){
                this.id = toR.params['id']
            }
        }
    }
</script>

<style scoped>

</style>
