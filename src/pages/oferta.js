import React, { useState, useEffect } from 'react'
import './Page.css'
import Najem from '../components/najem/Najem'

const Oferta = () => {

	return (
		<div className='body_page'>
			<div className='content_page'>
				<h1>Oferta</h1>

				<Najem />
				
			</div>
		</div>
	)
}

export default Oferta
