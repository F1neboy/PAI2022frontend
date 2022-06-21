import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

function UserReservation() {

  const [idcar, setIdcar] = useState('')
  const [idsalon, setIdsalon] = useState('')
  const [idsalonZwrotu, setIdsalonZwrotu] = useState('')
  const [dataWypo, setDataWypo] = useState('')
  const [dataOddania, setDataOddania] = useState('')

  return (
    <div class='profilPageBody'>
      <Sidebar />
      <div className='profilPageContainer'>

        <div className='headerProfilPage'>
          <DirectionsCarIcon />
          Rezerwacje
        </div>

        <div className='sectionProfilPage'>

          <form>

            <div className='settingFormGroup'>
              <label htmlFor='idcar'>
                <p className='pSettingForm'>Samochód</p>
                <select
                  id='idcar'
                  name='idcar'
                  value={idcar}
                  onChange={(e) => setIdcar(e.target.value)}
                  className='selectSettingForm'
                >
                  <option value='1'>Passat b5</option>
                </select>
              </label>
            </div>

            <div className='settingFormGroup'>
              <label htmlFor='idsalon'>
                <p className='pSettingForm'>Salon wypożyczenia</p>
                <select
                  id='idsalon'
                  name='idsalon'
                  value={idsalon}
                  onChange={(e) => setIdsalon(e.target.value)}
                  className='selectSettingForm'
                >
                  <option value='1'>Bydgoszcz</option>
                </select>
              </label>
            </div>

            <div className='settingFormGroup'>
              <label htmlFor='idsalonZwrotu'>
                <p className='pSettingForm'>Salon zwrotu</p>
                <select
                  id='idsalonZwrotu'
                  name='idsalonZwrotu'
                  value={idsalonZwrotu}
                  onChange={(e) => setIdsalonZwrotu(e.target.value)}
                  className='selectSettingForm'
                >
                  <option value='1'>Bydgoszcz</option>
                </select>
              </label>
            </div>

            <div className='settingFormGroup'>
              <label htmlFor='dataWypo'>
                <p className='pSettingForm'>Data wypożyczenia</p>
                <input
                  type='date'
                  id='dataWypo'
                  name='dataWypo'
                  class='inputSettingForm'
                  onChange={(e) => setDataWypo(e.target.value)}
                />
              </label>
            </div>

            <div className='settingFormGroup'>
              <label htmlFor='dataOddania'>
                <p className='pSettingForm'>Data zwrotu</p>
                <input
                  type='date'
                  id='dataOddania'
                  name='dataOddania'
                  class='inputSettingForm'
                  onChange={(e) => setDataOddania(e.target.value)}
                />
              </label>
            </div>

            <button type='submit' className='buttonFormSetting'>
              Wypożycz
            </button>

          </form>

        </div>

      </div>
    </div>
  )
}

export default UserReservation