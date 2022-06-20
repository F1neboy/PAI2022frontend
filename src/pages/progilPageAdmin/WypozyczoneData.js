import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from "moment";

const WypozyczoneData = () => {
	// Constructor
	const [EmployeeInfo, setEmployeeInfo] = useState([])

	// ComponentDidMount is used to
	// execute the code

	const token = localStorage.getItem('token')

	const fetchData = async() => {
		axios({
			url: 'http://localhost:8080/api/v1/reservations',
			method: 'get',
			timeout: 8000,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => {
				setEmployeeInfo(res.data)
			})
			.catch((err) => console.log(err))
	}
	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
    

	return (
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
							<td>{item.reservation.id}</td>
							<td>{item.reservation.startDate}</td>
                            <td>{item.reservation.endDate}</td>
                            <td>{item.reservation.expectedEndDate}</td>
                            <td>{item.reservation.state}</td>
                            <td>{item.reservation.userReservation}</td>
                            <td>{item.reservation.carReservation}</td>
                            <td>{item.reservation.salonStart}</td>
                            <td>{item.reservation.employeeStart}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default WypozyczoneData
