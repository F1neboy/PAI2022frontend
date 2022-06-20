import React from 'react'
import FormSearch from '../components/formSearchCar/FormSearch'


const Rezerwacja = () => {

	const auth = localStorage.getItem('user')
	

	return (
		<div className='body_page'>
			<div className='content_page'>
				<FormSearch />
			</div>
			{
				auth ? (<p>tak</p>) : (<p>nie</p>) 
			}

		</div>
	)
}

export default Rezerwacja
