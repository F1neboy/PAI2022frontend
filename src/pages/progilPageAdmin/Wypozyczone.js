import React from 'react'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SidebarAdmin from '../../components/sidebar/SidebarAdmin';

function Wypozyczone() {
    return (
        <div class='profilPageBody'>
            <SidebarAdmin />
            <div className='profilPageContainer'>
                <div className='headerProfilPage'>
                    <DirectionsCarIcon />
                    Wypozyczone samochody
                </div>
            </div>
        </div>
    )
}

export default Wypozyczone