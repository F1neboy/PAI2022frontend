import React from 'react'
import "./sidebar.css"
import SettingsIcon from '@mui/icons-material/Settings';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>PAI</span>
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
                    <a href='/userReservation'>
                        <div className='ulSidebarContainer'>
                            <DirectionsCarIcon className='iconSidebar' />
                            <li><span>Rezerwacje</span></li>
                        </div>
                    </a>

                </ul>
                <ul className='ulSidebar'>
                    <a href='/userReservationHistory'>
                    <div className='ulSidebarContainer'>
                        <HistoryIcon className='iconSidebar' />
                        <li><span>Historia</span></li>
                    </div>
                    </a>
                </ul>
                <ul className='ulSidebar'>
                    <a href='/setting'>
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

export default Sidebar