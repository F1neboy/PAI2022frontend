import React from 'react'

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
			<h1>Logout</h1>
			<p>czy napewno chcesz sie wylogować</p>

			<button onClick={wyloguj}>
				Wyloguj
			</button>
            
		</div>
	)
}

export default LogOut