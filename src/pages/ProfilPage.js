import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import './Profil.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SidebarAdmin from '../components/sidebar/SidebarAdmin';

const ProfilPage = () => {

	const auth = JSON.parse(localStorage.getItem('user'))

	let isAdmin = false;

	for (var i = 0; i < auth["roles"].length; i++) {
	  if (auth["roles"][i] == "ROLE_ADMIN") {
		isAdmin = true;
	  }
	}

	return (
		<div class='profilPageBody'>
			{ isAdmin ? (<SidebarAdmin />) : (<Sidebar />)}
			
			<div className='profilPageContainer'>
				<div className='headerProfilPage'>
					<DashboardIcon />
					Dashboard
				</div>
			</div>
		</div>
	)
}

export default ProfilPage
