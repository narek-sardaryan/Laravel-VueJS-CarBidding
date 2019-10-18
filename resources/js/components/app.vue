<template>
    <router-view v-bind="myProps"></router-view>
</template>

<script>
    export default {
        name: "app",
        props: ['errors', 'errorsreg','carssearch','carsfilter'],
        computed: {
            myProps() {
                if (this.$route.name === 'log') { return { errors: this.errors }}
                if (this.$route.name === 'reg') { return { errorsreg: this.errorsreg }}
                if (this.$route.name === 'searchcar') { return { carssearch: this.carssearch }}
                if (this.$route.name === 'filtercar') { return { carsfilter: this.carsfilter }}
            },
        }
    }
</script>

<style scoped>

</style>
