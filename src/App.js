import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import AboutUs from './pages/AboutUs'
import Oferta from './pages/oferta'
import Rezerwacja from './pages/rezerwacja'
import Contact from './pages/contact'
import Login from './pages/Login'
import Register from './pages/reigster'
import Footer from './components/footer/Footer'
import ProfilPage from './pages/ProfilPage'
import LogOut from './pages/LogOut'
import SettingsPgae from './pages/profilPage/SettingsPgae'
import UserReservation from './pages/profilPage/UserReservation'
import UserReservationHistory from './pages/profilPage/UserReservationHistory'
import AddCarPage from './pages/progilPageAdmin/AddCarPage'
import Wypozyczone from './pages/progilPageAdmin/Wypozyczone'
import Uzytkownicy from './pages/progilPageAdmin/Uzytkownicy'
import SettingsPgaeAdmin from './pages/progilPageAdmin/SettingsPgaeAdmin'
import Flota from './pages/Flota'

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/oferta' exact element={<Oferta />} />
					<Route path='/about' exact element={<AboutUs />} />
					<Route path='/flota' exact element={<Flota />} />
					<Route path='/contact-us' exact element={<Contact />} />
					<Route path='/login' exact element={<Login />} />
					<Route path='/register' exact element={<Register />} />
					<Route path='/profil' exact element={<ProfilPage />} />
					<Route path='/logout' exact element={<LogOut />} />
					<Route path='/setting' exact element={<SettingsPgae />} />
					<Route path='/settingAdmin' exact element={<SettingsPgaeAdmin />} />
					<Route path='/userReservation' exact element={<UserReservation />} />
					<Route path='/userReservationHistory' exact element={<UserReservationHistory />} />
					<Route path='/addcar' exact element={<AddCarPage />} />
					<Route path='/wypozyczone' exact element={<Wypozyczone />} />
					<Route path='/uzytkownicy' exact element={<Uzytkownicy />} />
				</Routes>
			</Router>

			<Footer />
		</div>
	)
}

export default App
