import React from 'react'
import './CarStyle.css'

function CarCard({title = 'Title', availability = true, img = 'img', description = '', city = ''}) {
  return (

    <div className='carCardBody'>
        <div className='header'>{title}</div>
        <div className='opis'>
            <a className='opisText'>{description}</a><br />
            <a className='opisText'>{city}</a>
        </div>
        <div className='carAvailability'>
            {availability ? (<a className='dostepny'>Dostępny</a>) : (<a className='niedostepny'>Niedostępny</a>)}
        </div>
        <div className='photo'><input type="image" img src = {img} alt="photo" className='carImg' /></div>

    </div>
  )
}

export default CarCard 