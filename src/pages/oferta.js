import React, { useState, useEffect } from 'react'
import CarCard from '../components/car/CarCard'
import NajemDlugoterminowy from '../components/najem/NajemDlugoterminowy'
import NajemKrotkoterminowy from '../components/najem/NajemKrotkoterminowy'
import './Page.css'
import axios from 'axios'

const Oferta = () => {
	const [showDivDlugo, setShowDivDlugo] = useState(false)
	const [showDivKrotko, setShowDivKrotko] = useState(false)
	const [carData, setCarData] = useState(false)

	// Wyświetlanie warunków najmu długoterminowego
	const handleClickDlugo = () => {
		setShowDivDlugo(true)
		setShowDivKrotko(false)
	}

	// Wyświetlanie warunków najmu krótkoterminowego
	const handleClickKrotko = () => {
		setShowDivKrotko(true)
		setShowDivDlugo(false)
	}
	const fetchData = async () => {
		axios({
			url: 'https://car-rent-pai-be.herokuapp.com/api/v1/cars',
			method: 'get',
			timeout: 8000,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((res) => {
				console.log(res.data)
				setCarData(res.data)
			})
			.catch((err) => console.log(err))
	}
	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='body_page'>
			<div className='content_page'>
				<h1>Oferta</h1>

				<button className='button_oferta' onClick={handleClickDlugo}>
					Najem długoterminowy
				</button>
				<button className='button_oferta' onClick={handleClickKrotko}>
					Najem krótkoterminowy
				</button>

				<div>
					{showDivDlugo && <NajemDlugoterminowy />}

					{showDivKrotko && <NajemKrotkoterminowy />}
				</div>
				{console.log(carData)}
				<div className='nextSection'>
					<h1>Flota</h1>
					<div className='carGallery'>
						{carData.map((car) => {
							;<CarCard availability={car.avaible} title={car.model} price='300.00' img='img passata' />
						})}

						{/* <CarCard />
						<CarCard />
						<CarCard />
						<CarCard />
						<CarCard /> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Oferta
