import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import HistoryIcon from '@mui/icons-material/History';

function UserReservationHistory() {
  return (
    <div class='profilPageBody'>
      <Sidebar />
      <div className='profilPageContainer'>
        <div className='headerProfilPage'>
          <HistoryIcon />
          Historia
        </div>
      </div>
    </div>
  )
}

export default UserReservationHistory