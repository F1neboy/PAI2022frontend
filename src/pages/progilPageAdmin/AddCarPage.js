import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import SidebarAdmin from '../../components/sidebar/SidebarAdmin';

function addCarPage() {
    return (
        <div class='profilPageBody'>
            <SidebarAdmin />
            <div className='profilPageContainer'>
                <div className='headerProfilPage'>
                    <AddIcon />
                    Dodaj samochód
                </div>
            </div>
        </div>
    )
}

export default addCarPage