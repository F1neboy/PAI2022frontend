import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import SidebarAdmin from '../../components/sidebar/SidebarAdmin';


function AddCarPage() {

    const [model, setModel] = useState('')
    const [brand, setBrand] = useState('')
    const [description, setDescription] = useState('')

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
                                    placeholder='brand'
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
                                    placeholder='model'
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                    className='inputSettingForm'
                                />
                            </label>
                        </div>

                        <div className='settingFormGroup'>
                            <label htmlFor='description'>
                                <p className='pSettingForm'>Opis</p>
                                <input
                                    type='text'
                                    id='description'
                                    name='description'
                                    placeholder='description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className='inputSettingForm'
                                />
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