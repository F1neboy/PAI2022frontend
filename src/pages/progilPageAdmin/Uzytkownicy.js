import React from 'react'
import SidebarAdmin from '../../components/sidebar/SidebarAdmin'
import PersonIcon from '@mui/icons-material/Person';
import Users from './Users';

function Uzytkownicy() {

    return (
        <div class='profilPageBody'>
            <SidebarAdmin />
            <div className='profilPageContainer'>
                <div className='headerProfilPage'>
                    <PersonIcon />
                    Użytkownicy
                </div>
                <Users />
            </div>
        </div>
    )
}

export default Uzytkownicy