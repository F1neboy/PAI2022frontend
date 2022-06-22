import React, { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add'
import SidebarAdmin from '../../components/sidebar/SidebarAdmin'
import axios from 'axios'

const AddCarPage = () => {
	const [model, setModel] = useState('')
	const [brand, setBrand] = useState('')
	const [description, setDescription] = useState('')
	const [idsalon, setIdsalon] = useState('')
	const [salon, setStalon] = useState([])
	const [available, setAvailable] = useState(true)
	const [file, setFile] = useState()
	const token = localStorage.getItem('token')
	function handleChange(event) {
		setFile(event.target.files[0])
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const car = {
			model: model,
			description: description,
			brand: brand,
			imageLink: 'null',
			salon: { id: idsalon },
			available: available
		}
		const formData = new FormData()
		formData.append('file', file)
		formData.append('car', JSON.stringify(car))

		axios
			.post('https://car-rent-pai-be.herokuapp.com/api/v1/cars', formData, {
				headers: {
					Authorization: `Bearer ${token}`,
					'content-type': 'multipart/form-data',
				},
			})
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

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
	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
		// eslint-disable-next-line
	}, [])

	return (
		// eslint-disable-next-line
		<div class='profilPageBody'>
			<SidebarAdmin />
			<div className='profilPageContainer'>
				<div className='headerProfilPage'>
					<AddIcon />
					Dodaj samochód
				</div>

				<div className='sectionProfilPage'>
					<form onSubmit={handleSubmit}>
						<div className='settingFormGroup'>
							<label htmlFor='brand'>
								<p className='pSettingForm'>Marka</p>
								<input
									type='text'
									id='brand'
									name='brand'
									value={brand}
									onChange={(e) => setBrand(e.target.value)}
									className='inputSettingForm'
								/>
							</label>
						</div>

						<div className='settingFormGroup'>
							<label htmlFor='model'>
								<p className='pSettingForm'>Model</p>
								<input
									type='text'
									id='model'
									name='model'
									value={model}
									onChange={(e) => setModel(e.target.value)}
									className='inputSettingForm'
								/>
							</label>
						</div>

						<div className='settingFormGroup'>
							<label htmlFor='idsalon'>
								<p className='pSettingForm'>Salon</p>
								{/* <select
									id='idsalon'
									name='idsalon'
									value={idsalon}
									onChange={(e) => setIdsalon(e.target.value)}
									className='selectSettingForm'>
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
							<label htmlFor='description'>
								<p className='pSettingForm'>Opis</p>
								<textarea
									type='text'
									id='description'
									name='description'
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									className='inputSettingForm'
								/>
							</label>
						</div>
						<div className='settingFormGroup'>
							<label htmlFor='description'>
								<p className='pSettingForm'>Dostępny</p>
								<input
									type='checkbox'
									id='available'
									name='available'
									value={available}
									onChange={() => setAvailable(!available)}
									className='inputSettingForm'
								/>
							</label>
						</div>

						<div className='settingFormGroup'>
							<label htmlFor='idsalon'>
								<input type='file' id='image' name='image' onChange={handleChange} />
							</label>
						</div>

						<button type='submit' className='buttonFormSetting'>
							Dodaj
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default AddCarPage
