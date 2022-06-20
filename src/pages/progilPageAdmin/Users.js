import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from "moment";

const Users = () => {
	// Constructor
	const [EmployeeInfo, setEmployeeInfo] = useState([])

	// ComponentDidMount is used to
	// execute the code

	const token = localStorage.getItem('token')

	const fetchData = async() => {
		axios({
			url: 'http://localhost:8080/api/v1/employees',
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
						<th>Imie</th>
						<th>Nazwisko</th>
						<th>Adres</th>
						<th>Data urodzenia</th>
						<th>Email</th>
						<th>Telefon</th>
					</tr>
				</thead>
				<tbody>
					{EmployeeInfo.map((item) => (
						<tr>
							<td>{item.user.id}</td>
							<td>{item.user.firstName}</td>
							<td>{item.user.lastName}</td>
							<td>{item.user.address}</td>
							<td>{moment(item.user.birthdate).utc().format('DD-MM-YYYY')}</td>
							<td>{item.user.email}</td>
							<td>{item.user.phone}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Users
