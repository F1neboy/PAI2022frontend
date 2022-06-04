import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
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
						About Us
					</NavLink>

					<NavLink to='/contact-us' activeStyle>
						Contact Us
					</NavLink>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/login'>Sign In</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	)
}

export default Navbar
