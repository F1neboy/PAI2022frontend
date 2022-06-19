import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import SidebarAdmin from '../../components/sidebar/SidebarAdmin';


function AddCarPage() {

    const [model, setModel] = useState('')
    const [brand, setBrand] = useState('')
    const [description, setDescription] = useState('')
    const [idsalon, setIdsalon] = useState('')

    return (
        <div class='profilPageBody'>
            <SidebarAdmin />
            <div className='profilPageContainer'>

                <div className='headerProfilPage'>
                    <AddIcon />
                    Dodaj samochód
                </div>

                <div className='sectionProfilPage'>

                    <form>
                        <div className='settingFormGroup'>
                            <label htmlFor='brand'>
                                <p className='pSettingForm'>Marka</p>
                                <input
                                    type='text'
                                    id='brand'
                                    name='brand'
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                    className='inputSettingForm'
                                />
                            </label>
                        </div>

                        <div className='settingFormGroup'>
                            <label htmlFor='model'>
                                <p className='pSettingForm'>Model</p>
                                <input
                                    type='text'
                                    id='model'
                                    name='model'
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                    className='inputSettingForm'
                                />
                            </label>
                        </div>

                        <div className='settingFormGroup'>
                            <label htmlFor='idsalon'>
                                <p className='pSettingForm'>Salon</p>
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
                            <label htmlFor='description'>
                                <p className='pSettingForm'>Opis</p>
                                <textarea
                                    type='text'
                                    id='description'
                                    name='description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className='inputSettingForm'
                                />
                            </label>
                        </div>

                        <div className='settingFormGroup'>
                            <label htmlFor='idsalon'>
                                <input type='file' id='image' name='image'/>
                            </label>
                        </div>
                        

                        <button type='submit' className='buttonFormSetting'>
                            Dodaj
                        </button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default AddCarPage