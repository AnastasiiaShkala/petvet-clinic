import React, { useEffect } from 'react';
import imgMedicine from './assets/medicin_icon.png';
import imgVet from './assets/vet_icon.png';
import imgGroom from './assets/groom_icon.png';
import imgHotel from './assets/hotel_icon.png';
import imgDiagnosis from './assets/diagnost_icon.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Icons() {
    useEffect(() => {
        AOS.init({
            offset: 0, 
            duration: 900,
            easing: 'ease-in-out',
            delay: 200,
            once: true
        });
    }, []);

    return (
       
        <div className='icon-block' data-aos="fade-down">
            <div className='icon-text-column'> 
                    <div className="icon-container">
                        <img className='round-icon' src={imgVet} alt='Urgent medical care icon'/>
                    </div>
                    <div>
                        <p className='icon-text'>Urgent <br/>medical care</p>
                    </div>
            </div>
            <div className='icon-text-column'> 
                    <div className="icon-container">
                        <img className='round-icon' src={imgMedicine} alt='Medicines and vitamins icon'/>
                    </div>
                    <div>
                        <p className='icon-text'>Medicines <br/>and vitamins</p>
                    </div>
            </div>
            <div className='icon-text-column'> 
                    <div className="icon-container">
                        <img className='round-icon' src={imgGroom} alt='Groomer services icon'/>
                    </div>
                    <div>
                        <p className='icon-text'>Groomer <br/>services</p>
                    </div>
            </div>
            <div className='icon-text-column'> 
                     <div className="icon-container">
                        <img className='round-icon' src={imgHotel} alt='Pet hotel icon'/>
                    </div>
                    <div>
                        <p className='icon-text'>Pet hotel<br/>24/7</p>
                    </div>
            </div>
            <div className='icon-text-column'> 
                    <div className="icon-container">
                        <img className='round-icon' src={imgDiagnosis} alt='Disease diagnosis icon'/>
                    </div>
                    <div>
                        <p className='icon-text'>Disease <br/>diagnosis</p>
                    </div>
            </div>
        </div>

    );
}
export default Icons;