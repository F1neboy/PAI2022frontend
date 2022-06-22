import React, { useState, useEffect } from 'react'
import CarCard from '../components/car/CarCard'
import './Page.css'
import axios from 'axios'

function Flota() {
	const [carData, setCarData] = useState([])

	const fetchData = () => {
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
				// console.log(res.data)
				// setCarData(prevState => [...prevState, res.data])
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
				<h1>Flota</h1>

				<div className='carGallery'>
					{console.log(carData)}
					{/* {carData.map(item=><p>{item.id}</p>)} */}

					{/* {carData.length >
						0(<CarCard availability={carData.avaible} title={carData.model} price='300.00' img='img passata' />)} */}
					{carData.map((dataCar) => (
						<CarCard availability={dataCar.avaible} title={dataCar.name} price='300.00' img={dataCar.imageLink} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Flota
