import React from 'react'
import FormSearch from '../components/formSearchCar/FormSearch'


const Rezerwacja = () => {

	const auth = localStorage.getItem('user')
	
	const wyloguj = () => {
		
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
				click
			</button>
			
		</div>
	)
}

export default Rezerwacja
