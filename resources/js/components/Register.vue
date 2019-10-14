<template>
    <div>
        <header-component></header-component>
        <div class="register_bg_img">
            <div class="container register_container">
                <div class="row">
                    <div class="col">
                        <div class="attention_main_txt">
                            <p class="attention">
                                Внимание!
                            </p>
                            <p class="attention_content">
                                Регистрация бесплатна и доступна всем желающим. Пожалуйста, указывайте только
                                достоверные данные - от этого зависит будет ли Ваш аккаунт активирован.
                                По вопросам регистрации обращайтесь по телефону +7 495 748-56-08. Звонки принимаются с
                                9:00 до 18:00 по Московскому времени.
                            </p>
                        </div>
                        <h6>К регистрации в качестве Продавца допускаются юридические лица</h6>
                        <form>
                            <input type="hidden" name="_token" :value="csrf">
                            <div class="row">
                                <div class="col-md-4 inputs_div_one">
                                    <div class="row inp_row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label for="email">Email *</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12" v-for="error in errors">
                                                    <span style="color: red; font-weight: bold;" v-if="error.email">{{error.email}}</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12" v-for="error in errors">
                                                    <span style="color: red; font-weight: bold;" v-if="error.emailret">{{error.emailret}}</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <input class="register_inputs reqreg" id="email" type="email"
                                                           name="email" v-model="email" required>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row  inp_row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label for="phone">Телефон * (+37491-85-45-35)</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12" v-for="error in errors">
                                                    <span style="color: red; font-weight: bold;" v-if="error.phone">{{error.phone}}</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <input class="register_inputs reqreg" id="phone" type="tel"
                                                           name="phone"
                                                           v-model="phone">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row  inp_row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label for="pssw">Пароль *</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12" v-for="error in errors">
                                                    <span style="color: red; font-weight: bold;" v-if="error.password">{{error.password}}</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12" v-for="error in errors">
                                                    <span style="color: red; font-weight: bold;" v-if="error.passno">{{error.passno}}</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <input class="register_inputs reqreg" id="pssw" type="password"
                                                           name="password"
                                                           v-model="password">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row  inp_row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label for="psswr">Ещё раз *</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12" v-for="error in errors">
                                                    <span style="color: red; font-weight: bold;"
                                                          v-if="error.passwordconfirm">{{error.passwordconfirm}}</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <input class="register_inputs reqreg" id="psswr" type="password"
                                                           name="password_confirmation" v-model="passwordconfirm">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row  inp_row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label for="avatar">Аватар</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <input id="avatar" class="register_inputs" type="file"
                                                           name="avatar">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">

                                </div>
                                <div class="col-md-4 inputs_div_two">
                                    <div class="row  inp_row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label for="name">Имя *</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12" v-for="error in errors">
                                                    <span style="color: red; font-weight: bold;" v-if="error.name">{{error.name}}</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <input class="register_inputs reqreg" id="name" v-model="name"
                                                           type="text"
                                                           name="name">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row  inp_row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label for="sname">Фамилия *</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12" v-for="error in errors">
                                                    <span style="color: red; font-weight: bold;" v-if="error.sname">{{error.sname}}</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <input class="register_inputs reqreg" id="sname" v-model="sname"
                                                           type="text"
                                                           name="sname">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row  inp_row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label for="date">День рождения *</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12" v-for="error in errors">
                                                    <span style="color: red; font-weight: bold;" v-if="error.date">{{error.date}}</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <input class="register_inputs reqreg" id="date" type="date"
                                                           v-model="date"
                                                           name="date-birth">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row  inp_row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label for="textarea">Дополнительно</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <textarea class="register_inputs" id="textarea"
                                                              name="additionally"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row  inp_row reqreg">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label id="gender">Пол *</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12" v-for="error in errors">
                                                    <span style="color: red; font-weight: bold;" v-if="error.gender">{{error.gender}}</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label for="male">Мужское</label>
                                                    <input class="genderreg" value="male" type="radio" name="gender">
                                                    <label for="female">Женское</label>
                                                    <input class="genderreg" type="radio" value="female" name="gender">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="policy">
                            <label class="policy_label">
                                <input @change="handleChange" id="regcheckbox" type="checkbox" name="policy"
                                       required> – согласен с обработкой
                                персональных данных.
                                <a class="policy_txt" href="#">Политика в отношении обработки персональных данных в
                                    ООО "CarBidding"</a>
                            </label>
                        </div>
                        <div class="send">
                            <button class="btn" id="reg-but" @click="onSubmit"
                                    disabled>Отправить заявку
                            </button>
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
        name: "Register",
        data() {
            return {
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                regcheck: false,
                errors: [],
                name: '',
                sname: '',
                email: '',
                phone: '',
                password: '',
                passwordconfirm: '',
                date: '',
                gender: '',
                users: []
            }
        },
        created() {
            this.fetchUsers();
        },
        methods: {
            fetchUsers() {
                axios.get('/fetchusers').then(response => {
                    this.users = response.data
                })
            },
            handleChange(e) {
                if (e.target.checked === false) {
                    document.getElementById('reg-but').setAttribute('disabled', '')
                    document.getElementById('reg-but').style.cursor = 'not-allowed';
                }
                if (e.target.checked === true) {
                    document.getElementById('reg-but').removeAttribute('disabled')
                    document.getElementById('reg-but').style.cursor = 'pointer';
                }
            },
            onSubmit() {
                this.users = this.users.filter(o => o.email == this.email)
                var newerrors = document.getElementsByClassName('reqreg');
                for (let i = 0; i < newerrors.length; i++) {
                    newerrors[i].closest('.inp_row').style.border = 'none';
                }
                this.errors = [];
                this.fetchUsers();
                var f = document.getElementsByClassName('genderreg');
                for (let i = 0; i < f.length; i++) {
                    if (f[i].checked) {
                        this.gender = f[i].value
                        // f[i].closest('.inp_row').style.border = 'none';
                    }
                }
                // var errorinps = document.getElementsByClassName('reqreg');
                // for (let i = 0; i < errorinps.length; i++) {
                //     if (!errorinps[i].value) {
                //         errorinps[i].closest('.inp_row').style.border = '2px solid red';
                //     }
                // }
                if (this.name.length < 4 || this.name.length > 24) {
                    this.errors.push({'name': 'Имя должен содержать от 4 до 16 символов.'})
                    // document.getElementById('name').closest('.inp_row').style.border = '2px solid red'
                }
                if (!this.sname) {
                    this.errors.push({'sname': 'Необходимо заполнить поле "Фамилия".'})
                }
                if (!this.email) {
                    this.errors.push({'email': 'Необходимо заполнить поле "Email".'})
                }
                if ((this.users.length > 0)) {
                    this.errors.push({'emailret': 'Такой E-mail уже зарегистрирован.'})
                    // document.getElementById('email').closest('.inp_row').style.border = '2px solid red'
                }

                if (!this.phone) {
                    this.errors.push({'phone': 'Необходимо заполнить поле "Телефон".'})
                }
                if (!this.password) {
                    this.errors.push({'password': 'Необходимо заполнить поле "Пароль".'})
                }
                if (!this.passwordconfirm) {
                    this.errors.push({'passwordconfirm': 'Необходимо заполнить поле "Ещё раз".'})
                }
                if (!this.date) {
                    this.errors.push({'date': 'Необходимо заполнить поле "День рождения".'})
                }
                if (!this.gender) {
                    this.errors.push({'gender': 'Необходимо заполнить поле "Пол".'})
                    // var k = document.getElementsByClassName('genderreg');
                    // for (let i = 0; i < k.length; i++) {
                    //     k[i].closest('.inp_row').style.border = '2px solid red';
                    // }
                }
                if (this.gender) {
                    // var a = document.getElementsByClassName('genderreg');
                    // for (let i = 0; i < a.length; i++) {
                    //     a[i].closest('.inp_row').style.border = 'none';
                    // }
                }
                if (this.password !== this.passwordconfirm) {
                    this.errors.push({'passno': 'Пароли не совпадают.'})
                }
                if(this.password == this.passwordconfirm && this.gender && this.passwordconfirm && this.date && this.password && this.users.length == 0 && this.name.length > 4 && this.name.length < 24){
                    this.axios.post('register', {
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                        password: this.password,
                        password_confirmation: this.passwordconfirm,
                        avatar: document.getElementById('avatar').value,
                        sname: this.sname,
                        datebirth: this.date,
                        additionally: document.getElementById('textarea').value,
                        gender: this.gender
                    })
                    window.location.href = '/login'
                }
            },
        }
    }
</script>

<style scoped>

</style>
