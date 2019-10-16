<template>
    <div>
        <header-component></header-component>
        <div class="container-fluid profile_bg_white">
            <div class="container profile_container">
            <div class="row">
                <div class="col profile_menu">
                    <div class="row mx-0">
                        <div class="col-md-3 avatar_section">
                            <img class="avatar_img" src="/img/avatar/avatar_hippi.png">
                        </div>
                        <div class="col-md-6 user_name_ul ">
                            <h6 class="user_name_tag">{{user.name}}</h6>
                            <button class="myprofile_btn">Мой профиль</button>
                            <button class="profile_btn_followers">Мои подписки</button>
                        </div>
                        <div class="col-md-12 profile_menu_nav">
                            <ul class="profile_menu_ul">
                                <li class="profile_menu_li"><i class="fas fa-user"></i>Профиль</li>
                                <li class="profile_menu_li"><i class="fas fa-ruble-sign"></i>Лицевой счёт</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col profile_data">
                    <h3 class="personal_data_title">Личные данные</h3>
                    <table class="table table-striped table-hover">
                        <tbody>
                           <tr>
                                <th>Фамилия *</th>
                                <td class="showView">{{user.sname}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="lastName" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Имя *</th>
                                <td class="showView">{{user.name}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="lastName" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Отчество *</th>
                                <td class="showView">{{user.sname}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="lastName" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Дата рождения *</th>
                                <td class="showView">{{user.date_of_birth}}</td>
                                <td class="showEdit">
                                    <input class="form-control datepicker hasDatepicker" type="date" name="birthDate">
                                </td>
                            </tr>
                            <tr>
                                <th>ИНН физ. лица *</th>
                                <td class="showView">{{user.sname}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="lastName" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Расчетный/лицевой счет *</th>
                                <td class="showView">{{user.sname}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="lastName" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Корр. счет *</th>
                                <td class="showView">{{user.sname}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="lastName" value="Sardaryan">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row contact_info_row">
                <div class="col-md-6 profile_data">
                    <h3 class="personal_data_title">Паспортные данные</h3>
                    <table class="table table-striped table-hover">
                        <tbody>
                           <tr>
                                <th>Паспорт *</th>
                                <td class="showView">{{user.sname}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="passportNumber" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Кем выдан *</th>
                                <td class="showView">{{user.name}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="givenFrom" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Дата выдачи *</th>
                                <td class="showView">{{user.sname}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="givenDate" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Код подразделения *</th>
                                <td class="showView">{{user.sname}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="placeCode" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Место регистрации *</th>
                                <td class="showView">{{user.sname}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="RegistrName" value="Sardaryan">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-6 profile_data">
                    <h3 class="personal_data_title">Контактная информация</h3>
                    <table class="table table-striped table-hover">
                        <tbody>
                           <tr>
                                <th>Телефон  *</th>
                                <td class="showView">{{user.phone}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="phone" name="phone" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>E-mail  *</th>
                                <td class="showView">{{user.email}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="email" name="email" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Почтовый индекс *</th>
                                <td class="showView">{{user.postcode}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="postIndex" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Почтовый адрес *</th>
                                <td class="showView">{{user.date_of_birth}}</td>
                                <td class="showEdit">
                                    <input class="form-control required" type="text" name="postCode">
                                </td>
                            </tr>
                            <tr>
                                <th>Дополнительно *</th>
                                <td class="showView">{{user.sname}}</td>
                                <td class="showEdit">
                                    <input class="form-control required" type="text" name="additional" value="Sardaryan">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
            <div class="row count_row">
                <div class="col-md-6 profile_data">
                    <h3 class="personal_data_title">Лицевой счет</h3>
                    <table class="table table-striped table-hover">
                        <tbody>
                           <tr>
                                <th>Паспорт *</th>
                                <td class="showView">{{user.sname}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="passportNumber" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Кем выдан *</th>
                                <td class="showView">{{user.name}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="givenFrom" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Дата выдачи *</th>
                                <td class="showView">{{user.sname}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="givenDate" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Код подразделения *</th>
                                <td class="showView">{{user.sname}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="placeCode" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Место регистрации *</th>
                                <td class="showView">{{user.sname}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="RegistrName" value="Sardaryan">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-6 profile_data">
                    <h3 class="personal_data_title">Реквизиты для пополнения лицевого счета</h3>
                    <table class="table table-striped table-hover">
                        <tbody>
                           <tr>
                                <th>Телефон  *</th>
                                <td class="showView">{{user.phone}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="phone" name="phone" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>E-mail  *</th>
                                <td class="showView">{{user.email}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="email" name="email" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Почтовый индекс *</th>
                                <td class="showView">{{user.postcode}}</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="postIndex" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Почтовый адрес *</th>
                                <td class="showView">{{user.date_of_birth}}</td>
                                <td class="showEdit">
                                    <input class="form-control required" type="text" name="postCode">
                                </td>
                            </tr>
                            <tr>
                                <th>Дополнительно *</th>
                                <td class="showView">{{user.sname}}</td>
                                <td class="showEdit">
                                    <input class="form-control required" type="text" name="additional" value="Sardaryan">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
        </div>
    </div>
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
