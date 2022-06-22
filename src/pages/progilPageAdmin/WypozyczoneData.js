import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

const WypozyczoneData = () => {
	// Constructor
	const [EmployeeInfo, setEmployeeInfo] = useState([])
	// const [EmployeeInfoid, setEmployeeInfoid] = useState('')

	// ComponentDidMount is used to
	// execute the code

	const token = localStorage.getItem('token')
	const auth = JSON.parse(localStorage.getItem('user'))

	const fetchData = async () => {
		axios({
			url: 'https://car-rent-pai-be.herokuapp.com/api/v1/reservations',
			method: 'get',
			timeout: 8000,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => {
				console.log(res.data)
				setEmployeeInfo(res.data)
			})
			.catch((err) => console.log(err))
	}
	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleClick = (EmployeeInfoid) => (e) => {
		e.preventDefault()
		const reservation = {
			id: auth['employeeId'],
		}
		axios
			.patch(`https://car-rent-pai-be.herokuapp.com/api/v1/reservation/done/${EmployeeInfoid}`, reservation, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				console.log(res)
				window.location.reload()
			})
			.catch((err) => {
				console.log(err)
			})
	}
	function changeStatus(status) {
		if (status === 'APPOINTED') {
			return 'Zarezerwowano'
		}
		if (status === 'DONE') {
			return 'Zrelizowano'
		}
		if (status === 'REJECTED') {
			return 'Anulowano'
		}
	}
	//<td>
	//
	// </td>
	return (
		<>
			<div className='App'>
				<table className='customers'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Data wypożyczenia</th>
							<th>Data zwrotu</th>
							<th>Przewidywana data zwrotu</th>
							<th>Stan</th>
							<th>Użytkownik</th>
							<th>Samochod</th>
							<th>Salon</th>
							<th>Pracownik</th>
						</tr>
					</thead>
					<tbody>
						{EmployeeInfo.map((item) => (
							<tr>
								<td>{item.id}</td>
								<td>{moment(item.startDate).utc().format('DD-MM-YYYY')}</td>
								<td>{moment(item.endDate).utc().format('DD-MM-YYYY')}</td>
								<td>{moment(item.expectedEndDate).utc().format('DD-MM-YYYY')}</td>
								<td>{changeStatus(item.state)}</td>
								<td>{item.userReservation.username}</td>
								<td>{item.carReservation.model}</td>
								<td>{item.salonStart.city}</td>
								<td>{item.employeeStart.user.username}</td>
								<td>
									<button
										disabled={
											item.state === 'ABSENCE' || item.state === 'DONE' || item.state === 'REJECTED' ? true : false
										}
										onClick={handleClick(item.id)}>
										{' '}
										Zrealizuj
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default WypozyczoneData
