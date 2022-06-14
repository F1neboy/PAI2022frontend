import React from 'react'

const ProfilPage = () => {
	return (
		<div class='container__Login'>
			<form class='form__login__login' id='createAccount'>
				<h1 class='form__title__login'>Imię i Nazwisko</h1>
				<div class='form__message form__message--error'></div>
				<div class='form__input-group__login'>
					<input type='text' id='username' class='form__input__login' autofocus placeholder='Login' />
					<div class='form__input-error-message__login'></div>
				</div>
				<div class='form__input-group__login'>
					<input type='text' class='form__input__login' autofocus placeholder='Email' />
					<div class='form__input-error-message'></div>
				</div>
				<div class='form__input-group__login'>
					<input type='password' class='form__input__login' autofocus placeholder='Hasło' />
					<div class='form__input-error-message'></div>
				</div>
				<div class='form__input-group__login'>
					<input type='text' class='form__input__login' autofocus placeholder='Numer telefonu' />
					<div class='form__input-error-message'></div>
				</div>
				<div class='form__input-group__login'>
					<input type='text' class='form__input__login' autofocus placeholder='Imię' />
					<div class='form__input-error-message'></div>
				</div>
				<div class='form__input-group__login'>
					<input type='text' class='form__input__login' autofocus placeholder='Nazwisko' />
					<div class='form__input-error-message'></div>
				</div>
				<div class='form__input-group__login'>
					<input type='text' class='form__input__login' autofocus placeholder='Addres' />
					<div class='form__input-error-message'></div>
				</div>
				<div class='form__input-group__login'>
					<input type='date' class='form__input__login' autofocus placeholder='Urodziny' />
					<div class='form__input-error-message'></div>
				</div>
				<button class='form__button__login' type='submit'>
					Zapisz
				</button>
				
			</form>
		</div>
	)
}

export default ProfilPage
