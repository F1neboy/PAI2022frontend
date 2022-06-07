import React from 'react'
import { useNavigate } from "react-router-dom";
import carImg from './car2.jpg';
import './HomeStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaCheckCircle } from "react-icons/fa";

function CarSection2() {

    const navigate = useNavigate();

    return (
        <div className='bodySection'>
            <div className='contenerSection2'>
                <div className='left'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat, eros at volutpat malesuada, enim purus malesuada nisi, sed finibus mi augue sed enim. Vestibulum eget malesuada enim. Aenean placerat posuere eros, non interdum mi lobortis ac. Phasellus laoreet vel velit sed pharetra. Donec non porta dui. Fusce sed molestie tortor. Nulla facilisi. In volutpat pharetra eleifend. Nulla non imperdiet leo. Maecenas nec lacus tortor. Nullam nisi est, lobortis et nisl a, facilisis auctor ante.</p>
                    <button onClick={() => navigate("/oferta")}>
                        Oferta
                    </button>
                </div>
                <div className='right'>
                    <img src={carImg} className='carimg' />
                </div>

            </div>

            <div className='contenerSection3'>

                <div className='rowSection'>
                    <div className='rowIcon'>
                        <FaCheckCircle className='icon' /><br />
                    </div>
                    <div className='rowContent'>
                        Bezpłatne anulowanie rezerwacji
                    </div>
                </div>

                <div className='rowSection'>
                    <div className='rowIcon'>
                        <FaCheckCircle className='icon' /><br />
                    </div>
                    <div className='rowContent'>
                        W ofercie tylko nowe auta
                    </div>
                </div>

                <div className='rowSection'>
                    <div className='rowIcon'>
                        <FaCheckCircle className='icon' /><br />
                    </div>
                    <div className='rowContent'>
                        Flota ponad 1000 samochodów
                    </div>
                </div>

                <div className='rowSection'>
                    <div className='rowIcon'>
                        <FaCheckCircle className='icon' /><br />
                    </div>
                    <div className='rowContent'>
                        Jesteśmy w 15 miastach w Polsce
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CarSection2