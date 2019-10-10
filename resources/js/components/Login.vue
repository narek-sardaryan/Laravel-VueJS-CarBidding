<template>
	<div>
	  <header-component></header-component>
	  <div class="login_page_bg">
		  <div class="container">
		  	<div class="row">
		  		<div class="col login_div">
		  			<h6 class="login_title">Войти</h6>
		  			<form action="login" class="login_form">
			  			<label class="login_label">Login</label>
			  			<input type="email" class="login_inputs" name="email">
			  			<label class="login_label">Password</label>
			  			<input type="email" class="login_inputs" name="password">
			  			<input type="submit" class="login_btn" name="send" value="Войти">
			  			<label class="fpssw_label">
			  				<input type="checkbox" class="forgot_pssw" name="password">
			  				<a class="fpssw_txt" href="#">Забыли пароль?</a>
			  			</label>
			  		</form>
		  		</div>
		  		 <div class="col register_div">
		  			
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
