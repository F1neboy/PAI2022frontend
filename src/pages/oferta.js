import React, { useState } from 'react'

const Oferta = () => {

  const [showDivDlugo, setShowDivDlugo] = useState(false)
  const [showDivKrotko, setShowDivKrotko] = useState(false)


  return (
    <div>
      <h1>Oferta</h1>
    
      <button>Najem długoterminowy</button>
      <button>Najem krótkoterminowy</button>

      {
        showDivDlugo ? <h1>Dlugoterminowy</h1> : null
      }

      {
        showDivKrotko ? <h1>Krótkoterminowy</h1> : null
      }

    </div>

    
  )
}

export default Oferta