<template>
    <div>
        <header-component></header-component>
        <ul>
            <li>{{ user.name }}</li>
            <li>{{ user.sname }}</li>
        </ul>
        <footer-component></footer-component>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        data() {
            return {
                user: [],
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            }
        },
        created: function () {
            this.fetchUser();
        },
        methods:{
            fetchUser() {
                axios.get('/fetchUser').then(response => {
                    this.user = response.data;
                    console.log(this.user)
                })
            },
        }
    }
</script>

<style scoped>

</style>
