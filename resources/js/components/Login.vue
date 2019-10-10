<template>
	<div>
	  <header-component></header-component>
	  <div class="login_page_bg">
		  <div class="container login_page_container">
		  	<div class="row">
		  		<div class="lg_div">
			  		<div class="col login_div">
				  		<form action="login" class="login_form">
			  				<h6 class="login_title">Войти</h6>
					  		<label class="login_label">Login</label>
					  		<input type="email" class="login_inputs" name="email">
					  		<label class="login_label">Password</label>
					  		<input type="password" class="login_inputs" name="password">
					  		<div class="login_btn_div text-center">
					  			<input type="submit" class="login_btn" name="send" value="Войти">
					  		</div>
					  		<label class="fpssw_label text-center">
					  			<input type="checkbox" class="forgot_pssw" name="password">
					  			<a class="fpssw_txt" href="#">Забыли пароль?</a>
					  		</label>
					  	</form>
			  		</div>
			  		<div class="col register_div">
			  		 	<h6 class="registration">Регистрация</h6>
			  		 	<p class="registr_txts">Регистрация участника ЭТП в качестве Покупателья </p>
			  		 	<p class="registr_txts">Регистрация участника ЭТП в качестве Продавца</p>
			  		 	<div class="registr_btn_div text-center">
			  		 		<input type="submit" class="registr_btn" name="send" value="Регистрация">
			  		 	</div>
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
    name: "Login"
  }
</script>

<style scoped>
</style>
