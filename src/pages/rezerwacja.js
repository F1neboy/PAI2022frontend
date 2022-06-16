import React from 'react'
import FormSearch from '../components/formSearchCar/FormSearch'
import axios from 'axios'

const Rezerwacja = () => {

	const auth = localStorage.getItem('user')
	
	const wyloguj = () => {
        localStorage.removeItem("user")
    }

	return (
		<div className='body_page'>
			<div className='content_page'>
				<FormSearch />
			</div>
			{
				auth ? (<p>tak</p>) : (<p>nie</p>) 
			}

			<button onClick={wyloguj}>
				logout
			</button>
			
		</div>
	)
}

export default Rezerwacja
