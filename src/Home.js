import React from 'react';
import img from './assets/groom-dog-cut-small.png';
import imgPaw from './assets/icons8-veterinary.png';
import Footer from './Footer';
import Music from './Music';
import Icons from './Icons';


function Home() {
   
    return (
        <div className="position-relative">
            <div className='welcome-block'> 
                <p className='welcome'>Welcome to </p>
                <h1 className='welcome-name'>PetVet Clinic</h1>
            </div>
            
            <img className='home-photo' src={img} alt="Dog"/>

            <Icons/>
            
            <div className='call-us-btn'>
                <a href='tel:+90517171771' className='home-btn'>
                    <img src={imgPaw} alt='Call Us Icon' className='icon-img'/>
                    Call Us Now
                </a>
            </div>

            <Music/>
            <Footer/>
        </div>
    );
}

export default Home;