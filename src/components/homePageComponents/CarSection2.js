import React from 'react'
import { useNavigate } from 'react-router-dom'
import carImg from '../../assets/images/porche.png'
import './HomeStyle.css'

import { FaCheckCircle } from 'react-icons/fa'
import FormSearch from '../formSearchCar/FormSearch'

function CarSection2() {
	const navigate = useNavigate()

	return (
		<div className='bodySection'>
			<div className='contenerSection2'>
				<div className='left'>
					<p className='p_carSection'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat, eros at volutpat malesuada, enim purus
						malesuada nisi, sed finibus mi augue sed enim. Vestibulum eget malesuada enim. Aenean placerat posuere eros,
						non interdum mi lobortis ac. Phasellus laoreet vel velit sed pharetra. Donec non porta dui. Fusce sed
						molestie tortor. Nulla facilisi. In volutpat pharetra eleifend. Nulla non imperdiet leo. Maecenas nec lacus
						tortor. Nullam nisi est, lobortis et nisl a, facilisis auctor ante.
					</p>
					<button onClick={() => navigate('/oferta')} className='buttonGoToOfera'>
						Oferta
					</button>
				</div>
				<div className='right'>
					{/* <img src={carImg} className='carimg' /> */}
					<input type='image' img src={carImg} alt='photo' className='carimg' />
				</div>
			</div>



			<div className='contenerSection4'>
				<div className='rowSection'>
					<div className='rowIcon'>
						<FaCheckCircle className='icon' />
						<br />
					</div>
					<div className='rowContent'>Bezpłatne anulowanie rezerwacji</div>
				</div>

				<div className='rowSection'>
					<div className='rowIcon'>
						<FaCheckCircle className='icon' />
						<br />
					</div>
					<div className='rowContent'>W ofercie tylko nowe auta</div>
				</div>

				<div className='rowSection'>
					<div className='rowIcon'>
						<FaCheckCircle className='icon' />
						<br />
					</div>
					<div className='rowContent'>Flota ponad 1000 samochodów</div>
				</div>

				<div className='rowSection'>
					<div className='rowIcon'>
						<FaCheckCircle className='icon' />
						<br />
					</div>
					<div className='rowContent'>Jesteśmy w 15 miastach w Polsce</div>
				</div>
			</div>
		</div>
	)
}

export default CarSection2
