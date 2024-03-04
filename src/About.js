import React, { useState, useEffect } from 'react';
import { data } from './data';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    const [person, setPerson] = useState(0);
    const { name, description, image } = data[person];

    useEffect(() => {
        AOS.init({
          offset: 200,
            duration: 800,
            easing: 'ease-in-out',
            delay: 200,
            once: true
        });

       
        AOS.refresh();
    }, []);

    const previousPerson = () => {
        setPerson((person) => {
            person--;
            if (person < 0) {
                return data.length - 1;
            }
            return person;
        });
    };

    const nextPerson = () => {
        setPerson((person) => {
            person++;
            if (person > data.length - 1) {
                person = 0;
            }
            return person;
        });
    };

    return (
        <div>
            <div className='vet-container'>
                <div className='vet-text'>
                    <h1 className='main-about'> About Us</h1>
                    <p className='text-about'>
                        Our dedicated team of veterinarians and staff is committed to delivering specialized care through personalized wellness plans tailored to your pet's individual health needs. Our state-of-the-art facility offers advanced diagnostic, surgical, and therapeutic services, ensuring comprehensive medical care for your beloved companion. With our on-site pet hotel and grooming salon, we are equipped to promptly address all your pet's requirements.
                        <br /><br />Since our establishment in 2010, our primary aim has been to foster a nurturing, welcoming, and compassionate environment. We understand the special bond you share with your pet and possess the expertise to cater to a diverse range of companions.
                    </p>
                    <p className='end-about'>We will make your pets healthy and happy!</p>
                </div>
                <div className='vet-gallery'>
                    <h2 className='main-about'>Our Team</h2>
                    <img className='vet-img' src={image} alt='Person' />
                    <h2 className='vet-name'> {name}</h2>
                    <p className='vet-description'>{description}</p>
                    <button onClick={previousPerson} className='btn-previous'>
                        Previous
                    </button>
                    <button onClick={nextPerson} className='btn-next'>
                        Next
                    </button>
                </div>
            </div>
            <div className='parent' data-aos="flip-up">
                <div className='child-left'>
                    <p className='number'>14</p>
                    <p className='text'>years of successful work</p>
                </div>
                <div className='child'>
                    <p className='number'>20k</p>
                    <p className='text'>satisfied owners and their pets</p>
                </div>
                <div className='child-right'>
                    <p className='number'>12</p>
                    <p className='text'>professional competition wins</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;