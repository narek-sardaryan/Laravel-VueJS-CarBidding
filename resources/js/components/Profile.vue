<template>
    <div>
        <header-component></header-component>
        <div class="container-fluid profile_bg_white">
            <div class="container profile_container">
            <div class="row">
                <div class="col profile_menu">
                    <div class="row mx-0">
                        <div class="col-md-3 avatar_section">
                            <img class="avatar_img" v-if="!user.avatar && user.gender == 'male'" src="/img/avatar/images.png">
                            <img class="avatar_img" v-else-if="!user.avatar && user.gender == 'female'" src="/img/avatar/female-avatar-profile-icon-round-african-american-vector-18307298.jpg">
                            <img class="avatar_img" v-else :src="'/img/avatar/'+user.avatar">
                        </div>
                        <div class="col-md-6 user_name_ul ">
                            <h6 class="user_name_tag">{{user.name}} {{user.sname}}</h6>
                            <button class="myprofile_btn">Мой профиль</button>
                            <button class="profile_btn_followers">Мои подписки</button>
                        </div>
                        <div class="col-md-12 profile_menu_nav">
                            <ul class="profile_menu_ul">
                                <button class="tablinks" @click="openCity('profile')"><li id="profilebut" class="profile_menu_li active"><i class="fas fa-user"></i>Профиль</li></button>
                                <button class="tablinks" @click="openCity('balance')"><li id="balancebut" class="profile_menu_li"><i class="fas fa-ruble-sign"></i>Лицевой счёт</li></button>
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
                                <th>Дата рождения *</th>
                                <td class="showView">{{user.date_of_birth}}</td>
                                <td class="showEdit">
                                    <input class="form-control datepicker hasDatepicker" type="date" name="birthDate">
                                </td>
                            </tr>
                            <tr>
                                <th>ИНН физ. лица *</th>
                                <td class="showView">AAAA</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="lastName" value="Sardaryan">
                                </td>
                            </tr>
                            <tr>
                                <th>Расчетный/лицевой счет *</th>
                                <td class="showView">999888777</td>
                                <td class="showEdit">
                                    <input class="form-control  required" type="text" name="lastName" value="Sardaryan">
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="profile" class="tabcontent activetabis">
                    <div class="row contact_info_row">
                        <div class="col-md-6 profile_data">
                            <h3 class="personal_data_title">Паспортные данные</h3>
                            <table class="table table-striped table-hover">
                                <tbody>
                                <tr>
                                    <th>Паспорт *</th>
                                    <td class="showView">{{user.sname}}</td>
                                    <td class="showEdit">
                                        <input class="form-control  required" type="text" name="passportNumber"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Кем выдан *</th>
                                    <td class="showView">{{user.name}}</td>
                                    <td class="showEdit">
                                        <input class="form-control  required" type="text" name="givenFrom"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Дата выдачи *</th>
                                    <td class="showView">{{user.sname}}</td>
                                    <td class="showEdit">
                                        <input class="form-control  required" type="text" name="givenDate"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Код подразделения *</th>
                                    <td class="showView">{{user.sname}}</td>
                                    <td class="showEdit">
                                        <input class="form-control  required" type="text" name="placeCode"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Место регистрации *</th>
                                    <td class="showView">{{user.sname}}</td>
                                    <td class="showEdit">
                                        <input class="form-control  required" type="text" name="RegistrName"
                                               value="Sardaryan">
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
                                    <th>Телефон *</th>
                                    <td class="showView">{{user.phone}}</td>
                                    <td class="showEdit">
                                        <input class="form-control  required" type="phone" name="phone"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>E-mail *</th>
                                    <td class="showView">{{user.email}}</td>
                                    <td class="showEdit">
                                        <input class="form-control  required" type="email" name="email"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Почтовый индекс *</th>
                                    <td class="showView">{{user.postcode}}</td>
                                    <td class="showEdit">
                                        <input class="form-control  required" type="text" name="postIndex"
                                               value="Sardaryan">
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
                                        <input class="form-control required" type="text" name="additional"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div id="balance" class="tabcontent">
                    <div class="row count_row">
                        <div class="col-md-6 profile_data">
                            <h3 class="personal_data_title">Лицевой счет</h3>
                            <table class="table table-striped table-hover">
                                <tbody>
                                <tr>
                                    <th>Лицевой счет № {{user.id}} *</th>
                                    <td class="showView">{{user.sname}}</td>
                                    <td class="showEdit">
                                        <input class="form-control  required" type="text" name="passportNumber"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Субсчет депозита *</th>
                                    <td class="showView">{{user.name}}</td>
                                    <td class="showEdit">
                                        <input class="form-control  required" type="text" name="givenFrom"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Субсчет свободных средств *</th>
                                    <td class="showView">{{user.sname}}</td>
                                    <td class="showEdit">
                                        <input class="form-control  required" type="text" name="givenDate"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Субсчет заблокированных средств в счет задатка *</th>
                                    <td class="showView">{{user.sname}}</td>
                                    <td class="showEdit">
                                        <input class="form-control  required" type="text" name="placeCode"
                                               value="Sardaryan">
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
                                    <th>Расчетный счет *</th>
                                    <td class="showView">{{user.phone}}</td>
                                    <td class="showEdit">
                                        <input class="form-control  required" type="phone" name="phone"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Корреспондентский счет *</th>
                                    <td class="showView">{{user.email}}</td>
                                    <td class="showEdit">
                                        <input class="form-control  required" type="email" name="email"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>БИК *</th>
                                    <td class="showView">{{user.postcode}}</td>
                                    <td class="showEdit">
                                        <input class="form-control  required" type="text" name="postIndex"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>ИНН *</th>
                                    <td class="showView">{{user.date_of_birth}}</td>
                                    <td class="showEdit">
                                        <input class="form-control required" type="text" name="postCode">
                                    </td>
                                </tr>
                                <tr>
                                    <th>КПП *</th>
                                    <td class="showView">{{user.sname}}</td>
                                    <td class="showEdit">
                                        <input class="form-control required" type="text" name="additional"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Наименование банка *</th>
                                    <td class="showView">{{user.sname}}</td>
                                    <td class="showEdit">
                                        <input class="form-control required" type="text" name="additional"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Наименование получателя *</th>
                                    <td class="showView">{{user.sname}}</td>
                                    <td class="showEdit">
                                        <input class="form-control required" type="text" name="additional"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Назначение платежа для субсчета депозита *</th>
                                    <td class="showView">{{user.sname}}</td>
                                    <td class="showEdit">
                                        <input class="form-control required" type="text" name="additional"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Назначение платежа для субсчета свободных средств *</th>
                                    <td class="showView">{{user.sname}}</td>
                                    <td class="showEdit">
                                        <input class="form-control required" type="text" name="additional"
                                               value="Sardaryan">
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
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
        methods: {
            fetchUser() {
                axios.get('/fetchUser').then(response => {
                    this.user = response.data;
                    console.log(this.user)
                })
            },
            openCity(tabname) {
                // Declare all variables
                var i, tabcontent, tablinks;
                // Get all elements with class="tabcontent" and hide them
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
                // Get all elements with class="tablinks" and remove the class "active"
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
                // Show the current tab, and add an "active" class to the button that opened the tab
                document.getElementById(tabname).style.display = "block";
                var elem = document.getElementsByClassName('profile_menu_li');
                for(let p=0; p<elem.length;p++){
                    elem[p].classList.remove("active");
                }
                document.getElementById(tabname+'but').classList.add("active");
            }
        }
    }
</script>

<style scoped>
</style>
