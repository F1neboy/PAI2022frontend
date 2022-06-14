import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const Register = () => {
	//podłączyć do api i obsługa błędów
	const errRef = useRef()
	const [username, setUser] = useState('')
	const [password, setpassword] = useState('')
	const [email, setEmail] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setlastName] = useState('')
	const [phone, setphoneNumber] = useState('')
	const [address, setAddress] = useState('')
	const [birthdate, setBirthdate] = useState('')
	const [errMsg, setErrMsg] = useState('')
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		setErrMsg('')
	}, [username, password, email, firstName, lastName, phone, address, birthdate])
	const handleSubmit = (e) => {
		e.preventDefault()
		const userRegister = {
			username,
			email,
			password,
			role: ['user'],
			firstName,
			lastName,
			phone,
			address,
			birthdate,
		}

		console.log(userRegister)
		axios
			.post('http://localhost:8080/api/auth/signup', userRegister)
			.then((res) => {
				setSuccess(true)
				setErrMsg(res.data.message)
			})
			.catch((err) => {
				if (err.response) {
					setErrMsg(`${err.response.data.error}`)
				} else if (err.response.status === 400) {
					setErrMsg(`${err.response.data.error}`)
				} else if (err.response.status === 401) {
					setErrMsg(`${err.response.data.error}`)
				} else {
					setErrMsg(`${err.response.data.error}`)
				}
				errRef.current.focus()
			})
	}
	const style = {
		color: 'red',
		fontSize: 20,
		fontWeight: 'bold',
	}

	return (
		<>
			{success ? (
				<section>
					<Navigate to='/login' />
				</section>
			) : (
				<section className='login_page_body'>
					<div class='container__Login'>
						<form class='form__login__login' id='createAccount' onSubmit={handleSubmit}>
							<p ref={errRef} className={errMsg ? 'errmsg' : 'offscren'} aria-live='assertive' style={style}>
								{errMsg}
							</p>
							<h1 class='form__title__login'>Create Account</h1>
							<div class='form__message form__message--error'></div>
							<div class='form__input-group__login'>
								<input
									type='text'
									id='signupUsername'
									class='form__input__login'
									autofocus
									placeholder='Login'
									onChange={(e) => setUser(e.target.value)}
								/>
								<div class='form__input-error-message__login'></div>
							</div>
							<div class='form__input-group__login'>
								<input
									type='text'
									class='form__input__login'
									autofocus
									placeholder='Email'
									onChange={(e) => setEmail(e.target.value)}
								/>
								<div class='form__input-error-message'></div>
							</div>
							<div class='form__input-group__login'>
								<input
									type='password'
									class='form__input__login'
									autofocus
									placeholder='Hasło'
									onChange={(e) => setpassword(e.target.value)}
								/>
								<div class='form__input-error-message'></div>
							</div>
							<div class='form__input-group__login'>
								<input
									type='text'
									class='form__input__login'
									autofocus
									placeholder='Imie'
									onChange={(e) => setFirstName(e.target.value)}
								/>
								<div class='form__input-error-message'></div>
							</div>
							<div class='form__input-group__login'>
								<input
									type='text'
									class='form__input__login'
									autofocus
									placeholder='Nazwisko'
									onChange={(e) => setlastName(e.target.value)}
								/>
								<div class='form__input-error-message'></div>
							</div>
							<div class='form__input-group__login'>
								<input
									type='text'
									class='form__input__login'
									autofocus
									placeholder='Numer Telefonu'
									onChange={(e) => setphoneNumber(e.target.value)}
								/>
								<div class='form__input-error-message'></div>
							</div>
							<div class='form__input-group__login'>
								<input
									type='text'
									class='form__input__login'
									autofocus
									placeholder='Address'
									onChange={(e) => setAddress(e.target.value)}
								/>
								<div class='form__input-error-message'></div>
							</div>
							<div class='form__input-group__login'>
								<input
									type='date'
									class='form__input__login'
									autofocus
									placeholder='Data urodzenia'
									onChange={(e) => setBirthdate(e.target.value)}
								/>
								<div class='form__input-error-message'></div>
							</div>
							<button class='form__button__login' type='submit'>
								Continue
							</button>
							<p class='form__text__login'>
								Masz już konto?
								<a class='form__link__login' href='/login' id='linkLogin'>
									Zaloguj sie
								</a>
							</p>
						</form>
					</div>
				</section>
			)}
		</>
	)
}

export default Register
