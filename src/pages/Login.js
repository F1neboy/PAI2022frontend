import React, { useState, useRef } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
	const errRef = useRef()
	const [username, setUser] = useState('')
	const [password, setpassword] = useState('')
	const [errMsg, setErrMsg] = useState('')

	const [success, setSuccess] = useState(false)

	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		const student = { username, password }
		//https://car-rent-pai.herokuapp.com/
		axios
			.post('https://car-rent-pai.herokuapp.com//api/auth/signin', student)
			.then((res) => {
				localStorage.setItem('token', res.data.accessToken)
				var value = res.headers['set-cookie']
				console.log(value)
				console.log(res.data)
				setUser('')
				setpassword('')
				setSuccess(true)
				localStorage.setItem('user', JSON.stringify(res.data))
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
				// console.log(err)
			})
	}
	return (
		<>
			{success ? (
				<section>
					{navigate('/')}
					{window.location.reload()}
				</section>
			) : (
				<section className='login_page_body'>
					<div class='container__Login'>
						<form class='form__login' id='login' onSubmit={handleSubmit}>
							<p ref={errRef} className={errMsg ? 'errmsg' : 'offscren'} aria-live='assertive'>
								{errMsg}
							</p>
							<h1 class='form__title__login'>Login</h1>
							<div class='form__message form__message--error'></div>
							<div class='form__input-group__login'>
								<input
									type='text'
									class='form__input__login'
									autofocus
									placeholder='Login'
									onChange={(e) => setUser(e.target.value)}
								/>
							</div>
							<div class='form__input-group__login'>
								<input
									type='password'
									class='form__input__login'
									autofocus
									placeholder='Hasło'
									onChange={(e) => setpassword(e.target.value)}
								/>
							</div>
							<button class='form__button__login' type='submit'>
								Continue
							</button>
							<p class='form__text__login'>
								Jesteś nowym użytkownikiem?
								<a class='form__link__login' href='/register' id='linkCreateAccount'>
									Dołącz teraz
								</a>
							</p>
						</form>
					</div>
				</section>
			)}
		</>
	)
}

export default Login
