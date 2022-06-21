import React from 'react'
import './Page.css'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {

	const navigate = useNavigate()

	const wyloguj = () => {
		localStorage.removeItem("user")
		navigate('/')
		window.location.reload();
	}

	return (
		<div className='body_page'>
			<div class='containerLogout'>
				<h1>Logout</h1>
				<p>Czy napewno chcesz sie wylogować?</p>

				<button onClick={wyloguj} className='button_oferta'>
					Wyloguj
				</button>
			</div>

		</div>
	)
}

export default LogOut