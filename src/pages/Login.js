import React from 'react'
import './Login.css'

const Login = () => {
	//podłączyć do api i obsługa błędów

	return (
		<div className='login_page_body'>
			<div class='container__Login'>
				<form class='form__login' id='login'>
					<h1 class='form__title__login'>Login</h1>
					<div class='form__input-group__login'>
						<input type='text' class='form__input__login' autofocus placeholder='Username or email' />
					</div>
					<div class='form__input-group__login'>
						<input type='password' class='form__input__login' autofocus placeholder='Password' />
					</div>
					<button class='form__button__login' type='submit'>
						Continue
					</button>
					<p class='form__text__login'>
						<a class='form__link' href='/register' id='linkCreateAccount'>
							Don't have an account? Create account
						</a>
					</p>
				</form>
			</div>
		</div>

	)
}

export default Login
