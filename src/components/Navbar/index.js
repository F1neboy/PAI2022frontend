import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {

	const auth = localStorage.getItem('user')

	return (
		<>
			<Nav className='nav_bar'>
				<NavLink to='/'>
					<h1>logo</h1>
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to='/oferta' activeStyle>
						Oferta
					</NavLink>

					<NavLink to='/rezerwacaja' activeStyle>
						Rezerwacja
					</NavLink>

					<NavLink to='/about' activeStyle>
						O nas
					</NavLink>

					<NavLink to='/contact-us' activeStyle>
						Kontakt
					</NavLink>

					{ auth ? (
						<NavLink to='/profil' activeStyle>
							Panel
						</NavLink>) : 
						(<></>)
				}

				</NavMenu>

				{ auth ? (
					<NavBtn> 
						<NavBtnLink to='/logout'>Wyloguj</NavBtnLink>
					</NavBtn>) : (

					<NavBtn> 
						<NavBtnLink to='/login'>Zaloguj</NavBtnLink>				
					</NavBtn> )
				}

			</Nav>
		</>
	)
}

export default Navbar
