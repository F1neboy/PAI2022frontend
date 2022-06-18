import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

function UserReservation() {

  return (
    <div class='profilPageBody'>
      <Sidebar />
      <div className='profilPageContainer'>
        <div className='headerProfilPage'>
          <DirectionsCarIcon />
          Rezerwacje
        </div>
      </div>
    </div>
  )
}

export default UserReservation