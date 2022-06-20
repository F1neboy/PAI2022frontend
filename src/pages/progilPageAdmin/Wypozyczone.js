import React from 'react'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SidebarAdmin from '../../components/sidebar/SidebarAdmin';
import WypozyczoneData from './WypozyczoneData';

function Wypozyczone() {
    return (
        <div class='profilPageBody'>
            <SidebarAdmin />
            <div className='profilPageContainer'>
                <div className='headerProfilPage'>
                    <DirectionsCarIcon />
                    Wypozyczone samochody
                </div>
                <div className='sectionProfilPage'>
                    <WypozyczoneData />
                </div>
            </div>
        </div>
    )
}

export default Wypozyczone