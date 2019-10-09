<template>
<div>
    <div class="register_bg_img">
    	<div class="container register_container">
    		<div class="row">
    			<div class="col">
    				<div class="attention_main_txt">
    					<p class="attention">
    						Внимание!
    					</p>
    					<p class="attention_content">
    						Регистрация бесплатна и доступна всем желающим. Пожалуйста, указывайте только достоверные данные - от этого зависит будет ли Ваш аккаунт активирован.
							По вопросам регистрации обращайтесь по телефону +7 495 748-56-08. Звонки принимаются с 9:00 до 18:00 по Московскому времени.
    					</p>
    				</div>
    				<h6>К регистрации в качестве Продавца допускаются юридические лица</h6>
    				<form action="register">
    					<div class="row">
	    					<div class="col inputs_div_one">
	    						<label for="email">Email *</label>
	    						<input id="email" type="email" name="email">
	    						<label for="phone">Телефон *</label>
	    						<input id="phone" type="phone" name="phone">
	    						<label for="pssw">Пароль *</label>
	    						<input id="pssw" type="password" name="password">
	    						<label for="psswr">Ещё раз *</label>
	    						<input id="psswr" type="password" name="password">
	    						<label for="timezone">Часовой пояс *</label>
		    					<select id="timezone">
		    						<option>Часовой пояс *</option>
		    					</select>
	    						<input type="file" name="avatar">
	    					</div>
	    					<div class="col inputs_div_two">
	    						<label for="sname">Фамилия *</label>
	    						<input id="sname" type="text" name="sname">
	    						<label for="name">Имя *</label>
	    						<input id="name" type="text" name="name">
	    						<label for="date">День рождения *</label>
	    						<input id="date" type="date" name="date-birth">
	    						<label for="textarea">Дополнительно *</label>
	    						<textarea id="textarea"></textarea>
	    						<label id="gender">Пол</label>
	    						<label for="male">Мужское</label>
	    						<input id="male" type="radio" name="gender">
	    						<label for="female">Женское</label>
	    						<input id="female" type="radio" name="gender">
	    					</div>
    					</div>
    					<div class="policy">
    						<label class="policy_label">
	    						<input id="checkbox" type="checkbox" name="policy"> – согласен с обработкой персональных данных.
	    						<a class="policy_txt" href="#">Политика в отношении обработки персональных данных в ООО "АВТО-СЕЙЛ"</a>
	    					</label>
    					</div>
    					<div class="send">
    						<input class="btn" type="submit" name="send" value="Отправить заявку">
    					</div>
    				</form>
    			</div>
    		</div>	
    	</div>
    </div>
</div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>

</style>
