import React from 'react'
import './CarStyle.css'

function CarCard({title = 'Title', availability = true, img = 'img', description = '', city = ''}) {
  return (

    <div className='carCardBody'>
        <div className='header'>{title}</div>
        <div className='opis'>
            <p className='opisText'>{description}</p><br />
            <p className='opisText'>{city}</p>
        </div>
        <div className='carAvailability'>
            {availability ? (<p className='dostepny'>Dostępny</p>) : (<p className='niedostepny'>Niedostępny</p>)}
        </div>
        <div className='photo'><input type="image" img src = {img} alt="photo" className='carImg' /></div>

    </div>
  )
}

export default CarCard 