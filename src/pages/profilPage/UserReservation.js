import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import axios from 'axios'
function UserReservation() {
	const [idcar, setIdcar] = useState('')
	const [idEmployee, setIdEmployee] = useState('')
	const [idsalon, setIdsalon] = useState('')
	const [idsalonZwrotu, setIdsalonZwrotu] = useState('')
	const [dataWypo, setDataWypo] = useState('')
	const [dataOddania, setDataOddania] = useState('')
	const [salon, setStalon] = useState([])
	const [avaibleCar, setAvaibleCar] = useState([])
	const [employeTab, setEmployeTab] = useState([])
	const token = localStorage.getItem('token')
	const auth = JSON.parse(localStorage.getItem('user'))

	const fetchData = async () => {
		axios({
			url: 'https://car-rent-pai-be.herokuapp.com/api/v1/salons',
			method: 'get',
			timeout: 8000,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => {
				setStalon(res.data)
			})
			.catch((err) => console.error(err))
	}
	const fetchDataCar = async () => {
		axios({
			url: 'https://car-rent-pai-be.herokuapp.com/api/v1/cars/available',
			method: 'get',
			timeout: 8000,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => {
				setAvaibleCar(res.data)
			})
			.catch((err) => console.error(err))
	}
	const fetchDataEmployee = async () => {
		axios({
			url: 'https://car-rent-pai-be.herokuapp.com/api/v1/employees',
			method: 'get',
			timeout: 8000,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => {
				setEmployeTab(res.data)
			})
			.catch((err) => console.error(err))
	}
	useEffect(() => {
		fetchData()
		fetchDataCar()
		fetchDataEmployee()
		// eslint-disable-next-line react-hooks/exhaustive-deps
		// eslint-disable-next-line
	}, [])
	const reservation = {
		startDate: dataWypo,
		endDate: dataOddania,
		state: 'APPOINTED',
		expectedEndDate: dataOddania,
		userReservation: {
			id: auth['id'],
		},
		carReservation: {
			id: idcar,
		},
		salonStart: {
			id: idsalon,
		},
		salonEnd: {
			id: idsalonZwrotu,
		},
		employeeStart: {
			id: idEmployee,
		},
		employeeEnd: null,
	}
	const handleClick = (e) => {
		e.preventDefault()

		axios
			.post('https://car-rent-pai-be.herokuapp.com/api/v1/reservation', reservation, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div class='profilPageBody'>
			<Sidebar />
			<div className='profilPageContainer'>
				<div className='headerProfilPage'>
					<DirectionsCarIcon />
					Rezerwacje
				</div>

				<div className='sectionProfilPage'>
					<form onSubmit={handleClick}>
						<div className='settingFormGroup'>
							<label htmlFor='idcar'>
								<p className='pSettingForm'>Samochód</p>
								{/* <select
									id='idcar'
									name='idcar'
									value={idcar}
									onChange={(e) => setIdcar(e.target.value)}
									className='selectSettingForm'>
									<option value='1'>Passat b5</option>
								</select> */}
								<select
									id='idcar'
									name='idcar'
									value={idcar}
									onChange={(e) => setIdcar(e.target.value)}
									className='selectSettingForm'>
									<option value={null}>Auto</option>
									{avaibleCar.map((contentcar) => (
										<option value={contentcar.id}>
											{contentcar.brand} {contentcar.model}
										</option>
									))}
								</select>
							</label>
						</div>

						<div className='settingFormGroup'>
							<label htmlFor='idsalon'>
								<p className='pSettingForm'>Salon wypożyczenia</p>
								{/* <select
                  id='idsalon'
                  name='idsalon'
                  value={idsalon}
                  onChange={(e) => setIdsalon(e.target.value)}
                  className='selectSettingForm'
                >
                  <option value='1'>Bydgoszcz</option>
                </select> */}
								<select
									id='idsalon'
									name='idsalon'
									onChange={(e) => {
										setIdsalon(parseInt(e.target.value))
									}}
									className='selectSettingForm'>
									<option value={null}>Salon</option>
									{salon.map((content) => (
										<option value={content.id}>{content.city}</option>
									))}
								</select>
							</label>
						</div>

						<div className='settingFormGroup'>
							<label htmlFor='idsalonZwrotu'>
								<p className='pSettingForm'>Salon zwrotu</p>
								{/* <select
                  id='idsalonZwrotu'
                  name='idsalonZwrotu'
                  value={idsalonZwrotu}
                  onChange={(e) => setIdsalonZwrotu(e.target.value)}
                  className='selectSettingForm'
                >
                  <option value='1'>Bydgoszcz</option>
                </select> */}
								<select
									id='idsalonZwrotu'
									name='idsalonZwrotu'
									onChange={(e) => {
										setIdsalonZwrotu(parseInt(e.target.value))
									}}
									className='selectSettingForm'>
									<option value={null}>Salon</option>
									{salon.map((content) => (
										<option value={content.id}>{content.city}</option>
									))}
								</select>
							</label>
						</div>

						<div className='settingFormGroup'>
							<label htmlFor='dataWypo'>
								<p className='pSettingForm'>Data wypożyczenia</p>
								<input
									type='date'
									id='dataWypo'
									name='dataWypo'
									class='inputSettingForm'
									onChange={(e) => setDataWypo(e.target.value)}
								/>
							</label>
						</div>

						<div className='settingFormGroup'>
							<label htmlFor='dataOddania'>
								<p className='pSettingForm'>Data zwrotu</p>
								<input
									type='date'
									id='dataOddania'
									name='dataOddania'
									class='inputSettingForm'
									onChange={(e) => setDataOddania(e.target.value)}
								/>
							</label>
						</div>
						<div className='settingFormGroup'>
							<label htmlFor='idsalon'>
								<p className='pSettingForm'>Pracownik</p>

								<select
									id='idEmployee'
									name='idEmployee'
									onChange={(e) => {
										setIdEmployee(parseInt(e.target.value))
									}}
									className='selectSettingForm'>
									<option value={null}>Pracownik</option>
									{employeTab.map((content) => (
										<option value={content.id}>{content.user.lastName}</option>
									))}
								</select>
							</label>
						</div>

						<button type='submit' className='buttonFormSetting'>
							Wypożycz
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default UserReservation
