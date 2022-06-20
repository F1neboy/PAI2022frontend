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
                console.log(res.data)
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
							<td>{item.id}</td>
							<td>{moment(item.startDate).utc().format('DD-MM-YYYY')}</td>
                            <td>{moment(item.endDate).utc().format('DD-MM-YYYY')}</td>
                            <td>{moment(item.expectedEndDate).utc().format('DD-MM-YYYY')}</td>
                            <td>{item.state}</td>
                            <td>{item.userReservation.username}</td>
                            <td>{item.carReservation.model}</td>
                            <td>{item.salonStart.city}</td>
                            <td>{item.employeeStart.user.username}</td> 
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default WypozyczoneData
