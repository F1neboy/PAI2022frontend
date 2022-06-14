import React from 'react'
import './FormSearchStyle.css'
import { FaLocationArrow } from 'react-icons/fa'
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'

function FormSearch() {
	var today = new Date()
	var dd = today.getDate()
	var mm = today.getMonth() + 1 //January is 0 so need to add 1 to make it 1!
	var yyyy = today.getFullYear()
	if (dd < 10) dd = '0' + dd
	if (mm < 10) mm = '0' + mm
	today = yyyy + '-' + mm + '-' + dd

	return (
		<div className='formSearchCointeiner'>
			<div className='itemContainer'>
				<FaLocationArrow className='iconFormSearch' />
				<input type='text' className='inputFormSearch' placeholder='Lokalizacja odbioru' />
			</div>

			<div className='lineSeparator'></div>

			<div className='itemContainer'>
				<FaLocationArrow className='iconFormSearch' />
				<input type='text' className='inputFormSearch' placeholder='Lokalizacja oddania' />
			</div>

			<div className='lineSeparator'></div>

			<div className='itemContainer'>
				<DateRangePickerComponent placeholder='Podaj datę' min={today} format='dd.MM.yyyy' />
			</div>

			<div className='lineSeparator'></div>

			<div className='itemContainer'>
				<button className='formSearchButton'>Szukaj</button>
			</div>
		</div>
	)
}

export default FormSearch
