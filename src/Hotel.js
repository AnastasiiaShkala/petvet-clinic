import Footer from "./Footer";
import { Accordion } from "./acordion/Acordion";
import imgHotel from "./assets/hotel-puppy.jpg";


function Hotel() {
    return (
        <div >
        <div className="main-hotel">
            <h1 className="pet-hotel">Pet Hotel</h1>
            <p className="hotel-text">Trust us with your pet's care while you enjoy your vacation</p>
        </div>
        <div className="hotel-container">
            <img src={imgHotel} alt="Pet Hotel" className="imag-hotel" />
            <Accordion/>
        </div>
        <Footer/>
        </div>
    )
}
export default Hotel;