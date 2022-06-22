import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import SidebarAdmin from '../../components/sidebar/SidebarAdmin'
import axios from 'axios'

const SettingsPgaeAdmin = () => {
	const auth = JSON.parse(localStorage.getItem('user'))

	const token = localStorage.getItem('token')

	const [username, setUsername] = useState(auth['username'])
	const [email, setEmail] = useState(auth['email'])
	const [usernameChange, setUsernameChange] = useState()
	const [emailChange, setEmailChange] = useState()

	const handleClick = (e) => {
		e.preventDefault()
		const reservation = {
			username: usernameChange,
			email: emailChange,
		}
		axios
			.patch(`https://car-rent-pai-be.herokuapp.com/api/v1/users/${auth['id']}`, reservation, {
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
			<SidebarAdmin />
			<div className='profilPageContainer'>
				<div className='headerProfilPage'>
					<SettingsIcon />
					Ustawienia
				</div>

				<div className='sectionProfilPage'>
					<form onSubmit={handleClick}>
						<div className='settingFormGroup'>
							<label htmlFor='username'>
								<p className='pSettingForm'>Nazwa użytkownika</p>
								<input
									type='text'
									id='username'
									name='username'
									placeholder='username'
									onChange={(e) => setUsernameChange(e.target.value)}
									className='inputSettingForm'
								/>
							</label>
						</div>

						<div className='settingFormGroup'>
							<label htmlFor='email'>
								<p className='pSettingForm'>Adres e-mail</p>
								<input
									type='text'
									id='email'
									name='email'
									placeholder='E-mail'
									onChange={(e) => setEmailChange(e.target.value)}
									className='inputSettingForm'
								/>
							</label>
						</div>

						<button type='submit' className='buttonFormSetting'>
							Zapisz
						</button>
					</form>
					<div className='settingFormGroup'>
						<label htmlFor='email'>
							<p className='pSettingForm'>Nazwa użytkownika</p>
							<p className='pSettingForm'>{username}</p>
						</label>
					</div>
					<div className='settingFormGroup'>
						<label htmlFor='email'>
							{console.log(auth['id'])}
							<p className='pSettingForm'>Adres e-mail</p>
							<p className='pSettingForm'>{email}</p>
						</label>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SettingsPgaeAdmin
