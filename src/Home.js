import img from './assets/groom-dog-cut-small.png';
import imgMedicine from './assets/medicin_icon.png';
import imgVet from './assets/vet_icon.png';
import imgGroom from './assets/groom_icon.png';
import imgHotel from './assets/hotel_icon.png';
import imgDiagnosis from './assets/diagnost_icon.png';
import imgPaw from './assets/icons8-veterinary.png';
import Footer from './Footer';

function Home() {
    return (
        <div className="position-relative">
            <div className='welcome-block'> 
                 <p className='welcome'>Welcome to </p>
                 <h1 className='welcome-name'>PetVet Clinic</h1>
                </div>
            
                 <img className='home-photo' src={img} alt="Dog"/>

            <div className='icon-block'>
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
            <div class='call-us-btn'>
  <a href='tel:+90517171771' class='home-btn'>
    <img src={imgPaw} alt='Call Us Icon' class='icon-img'/>
    Call Us Now
  </a>
</div>
<Footer/>
        </div>
        
    )
}
export default Home;