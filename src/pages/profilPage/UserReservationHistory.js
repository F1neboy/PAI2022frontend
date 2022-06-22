import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import HistoryIcon from '@mui/icons-material/History'
import UserReservationHistoryData from './UserReservationHistoryData'

function UserReservationHistory() {
	return (
		<div class='profilPageBody'>
			<Sidebar />
			<div className='profilPageContainer'>
				<div className='headerProfilPage'>
					<HistoryIcon />
					Historia
				</div>
				<div className='sectionProfilPage'>
					<UserReservationHistoryData />
				</div>
			</div>
		</div>
	)
}

export default UserReservationHistory
