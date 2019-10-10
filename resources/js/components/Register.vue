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
                        <form action="register" method="POST">
                            <input type="hidden" name="_token" :value="csrf">
                            <div class="row">
                                <div class="col inputs_div_one">
                                    <label for="email">Email *</label>
                                    <input class="register_inputs" id="email" type="email" name="email" required>
                                    <label for="phone">Телефон * (+37491-85-45-35)</label>
                                    <input class="register_inputs" id="phone" type="tel" name="phone" required>
                                    <label for="pssw">Пароль *</label>
                                    <input class="register_inputs" id="pssw" type="password" name="password" required>
                                    <label for="psswr">Ещё раз *</label>
                                    <input class="register_inputs" id="psswr" type="password"
                                           name="password_confirmation" required>
                                    <!--	    						<label for="timezone">Часовой пояс *</label>-->
                                    <!--		    					<select class="register_inputs" id="timezone">-->
                                    <!--		    						<option>Часовой пояс *</option>-->
                                    <!--		    					</select>-->
                                    <label for="avatar">Аватар</label>
                                    <input id="avatar" class="register_inputs" type="file" name="avatar">
                                </div>
                                <div class="col inputs_div_two">
                                    <label for="name">Имя *</label>
                                    <input class="register_inputs" id="name" type="text" name="name" required>
                                    <label for="sname">Фамилия *</label>
                                    <input class="register_inputs" id="sname" type="text" name="sname" required>
                                    <label for="date">День рождения *</label>
                                    <input class="register_inputs" id="date" type="date" name="date-birth" required>
                                    <label for="textarea">Дополнительно</label>
                                    <textarea class="register_inputs" id="textarea" name="additionally" required></textarea>
                                    <label id="gender">Пол *</label>
                                    <label for="male">Мужское</label>
                                    <input id="male" type="radio" name="gender" required>
                                    <label for="female">Женское</label>
                                    <input id="female" type="radio" name="gender" required>
                                </div>
                            </div>
                            <div class="policy">
                                <label class="policy_label">
                                    <input @change="handleChange" id="regcheckbox" type="checkbox" name="policy" required> – согласен с обработкой
                                    персональных данных.
                                    <a class="policy_txt" href="#">Политика в отношении обработки персональных данных в
                                        ООО "CarBidding"</a>
                                </label>
                            </div>
                            <div class="send">
                                <input class="btn" id="reg-but" type="submit" name="send" value="Отправить заявку" disabled>
                            </div>
                        </form>
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
                regcheck: false
            }
        },
        methods: {
            handleChange(e){
                if(e.target.checked === false){
                    document.getElementById('reg-but').setAttribute('disabled', '')
                    document.getElementById('reg-but').style.cursor = 'not-allowed';
                }
                if(e.target.checked === true){
                    document.getElementById('reg-but').removeAttribute('disabled')
                    document.getElementById('reg-but').style.cursor = 'pointer';
                }
            }
        }
    }
</script>

<style scoped>

</style>
