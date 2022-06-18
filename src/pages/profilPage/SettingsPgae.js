import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./profilPageStyle.css"
import SettingsIcon from '@mui/icons-material/Settings';


function SettingsPgae() {

  const auth = JSON.parse(localStorage.getItem('user'))

  const userInfoLog = () => {
    console.log(auth)
  }

  const [username, setUsername] = useState(auth["username"])
  const [email, setEmail] = useState(auth["email"])
  const [password, setPassword] = useState('')

  return (
    <div class='profilPageBody'>
      <Sidebar />
      <div className='profilPageContainer'>

        <div className='headerProfilPage'>
          <SettingsIcon />
          Ustawienia
        </div>

        <div className='sectionProfilPage'>

          <form>

            <div className='settingFormGroup'>
              <label htmlFor='username'>
                <p className='pSettingForm'>Nazwa użytkownika</p>
                <input
                  type='text'
                  id='username'
                  name='username'
                  placeholder='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='inputSettingForm'
                />
              </label>
            </div>

            <div className='settingFormGroup'>
              <label htmlFor='email'>
                <p className='pSettingForm'>Adres e-mail</p>
                <input
                  type='text'
                  id='email'
                  name='email'
                  placeholder='E-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='inputSettingForm'
                />
              </label>
            </div>

            <div className='settingFormGroup'>
              <label htmlFor='password'>
                <p className='pSettingForm'>Hasło</p>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='inputSettingForm'
                />
              </label>
            </div>

            <button type='submit' className='buttonFormSetting'>
              Zapisz
            </button>

          </form>

        </div>

      </div>
    </div>
  )
}

export default SettingsPgae