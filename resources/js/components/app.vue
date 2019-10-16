<template>
    <router-view v-bind="myProps"></router-view>
</template>

<script>
    export default {
        name: "app",
        props: ['errors', 'errorsreg',],
        computed: {
            myProps() {
                if (this.$route.name === 'log') { return { errors: this.errors }}
                if (this.$route.name === 'reg') { return { errorsreg: this.errorsreg }}

            },
        }
    }
</script>

<style scoped>

</style>
