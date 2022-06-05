import React from 'react'
import './CarStyle.css'

function CarCard({title = 'Title', availability = true, img = 'img', price = '100.00'}) {
  return (

    <div className='carCardBody'>
        <div className='header'>{title}</div>
        <div className='carAvailability'>
            {availability ? <p>Dostępny</p> : <p>Niedostępny</p>}
        </div>
        <div className='photo'>{img}</div>
        <div className='footer'>
            <div className='footer_left'>
                {price} zł
            </div>
            <div className='footer_right'>
                <button>Szczegóły</button>
            </div>
        </div>
    </div>
  )
}

export default CarCard