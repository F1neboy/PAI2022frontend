import React, { useState } from 'react'
import NajemDlugoterminowy from '../components/najem/NajemDlugoterminowy'
import NajemKrotkoterminowy from '../components/najem/NajemKrotkoterminowy'
import './Page.css';

const Oferta = () => {

  const [showDivDlugo, setShowDivDlugo] = useState(false)
  const [showDivKrotko, setShowDivKrotko] = useState(false)

  // Wyświetlanie warunków najmu długoterminowego
  const handleClickDlugo = () => {
    setShowDivDlugo(true)
    setShowDivKrotko(false)
  }

  // Wyświetlanie warunków najmu krótkoterminowego
  const handleClickKrotko = () => {
    setShowDivKrotko(true)
    setShowDivDlugo(false)
  }


  return (
    <div className='body_page'>

      <div className='content_page'>
        <h1>Oferta</h1>
    
        <button className='button_oferta' onClick={handleClickDlugo}>Najem długoterminowy</button>
        <button className='button_oferta' onClick={handleClickKrotko}>Najem krótkoterminowy</button>

        <div>
          {showDivDlugo && (
            <NajemDlugoterminowy />
          )}

          {showDivKrotko && (
            <NajemKrotkoterminowy />
          )}
          
        </div>

      </div>  

    </div>

    
  )
}

export default Oferta