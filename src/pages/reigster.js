import React from 'react'

const Register = () => {
	//podłączyć do api i obsługa błędów
	return (
		<div className='login_page_body'>
			<div class='container__Login'>
				<form class='form__login__login' id='createAccount'>
					<h1 class='form__title__login'>Create Account</h1>
					<div class='form__message form__message--error'></div>
					<div class='form__input-group__login'>
						<input type='text' id='signupUsername' class='form__input__login' autofocus placeholder='Username' />
						<div class='form__input-error-message__login'></div>
					</div>
					<div class='form__input-group__login'>
						<input type='text' class='form__input__login' autofocus placeholder='Email Address' />
						<div class='form__input-error-message'></div>
					</div>
					<div class='form__input-group__login'>
						<input type='password' class='form__input__login' autofocus placeholder='Password' />
						<div class='form__input-error-message'></div>
					</div>
					<div class='form__input-group__login'>
						<input type='password' class='form__input__login' autofocus placeholder='Confirm password' />
						<div class='form__input-error-message'></div>
					</div>
					<button class='form__button__login' type='submit'>
						Continue
					</button>
					<p class='form__text__login'>
						<a class='form__link__login' href='/login' id='linkLogin'>
							Already have an account? Sign in
						</a>
					</p>
				</form>
			</div>
		</div>

	)
}

export default Register
