import React from 'react'
import SidebarAdmin from '../../components/sidebar/SidebarAdmin'
import PersonIcon from '@mui/icons-material/Person';

function Uzytkownicy() {
    return (
        <div class='profilPageBody'>
            <SidebarAdmin />
            <div className='profilPageContainer'>
                <div className='headerProfilPage'>
                    <PersonIcon />
                    Użytkownicy
                </div>
            </div>
        </div>
    )
}

export default Uzytkownicy