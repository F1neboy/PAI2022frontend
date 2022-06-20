import React from 'react'
import "./sidebar.css"
import SettingsIcon from '@mui/icons-material/Settings';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

function SidebarAdmin() {
    const auth = JSON.parse(localStorage.getItem('user'))

    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>PANEL ADMIN</span>
            </div>

            <hr className='hrSidebar' />

            <div className='center'>
                <ul className='ulSidebar'>
                    <a href='/profil'>
                        <div className='ulSidebarContainer'>
                            <DashboardIcon className='iconSidebar' />
                            <li><span>Dashboard</span></li>
                        </div>
                    </a>

                </ul>
                <ul className='ulSidebar'>
                    <a href='/addcar'>
                        <div className='ulSidebarContainer'>
                            <AddIcon className='iconSidebar' />
                            <li><span>Dodaj samochód</span></li>
                        </div>
                    </a>

                </ul>
                <ul className='ulSidebar'>
                    <a href='/wypozyczone'>
                    <div className='ulSidebarContainer'>
                        <DirectionsCarIcon className='iconSidebar' />
                        <li><span>Wypożyczone</span></li>
                    </div>
                    </a>
                </ul>
                <ul className='ulSidebar'>
                    <a href='/uzytkownicy'>
                    <div className='ulSidebarContainer'>
                        <PersonIcon className='iconSidebar' />
                        <li><span>Użytkownicy</span></li>
                    </div>
                    </a>
                </ul>
                <ul className='ulSidebar'>
                    <a href='/settingAdmin'>
                    <div className='ulSidebarContainer'>
                        <SettingsIcon className='iconSidebar' />
                        <li><span>Ustawienia</span></li>
                    </div>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default SidebarAdmin