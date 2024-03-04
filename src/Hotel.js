import AutoSlides from "./AutoSlides";
import Footer from "./Footer";
import { Accordion } from "./acordion/Acordion";



function Hotel() {
    return (
        <div >
        <div className="main-hotel">
            <h1 className="pet-hotel">Pet Hotel</h1>
            <p className="hotel-text">Situated in the center of Vancouver, just a stone's throw from the SkyTrain station, we offer an ideal solution for your beloved pets when you're not at home.</p>
            <p className="hotel-text">Our goal is to create a tranquil and cozy home-away-from-home experience for your cats and dogs.</p>
        </div>
        <div className="hotel-container">
            <AutoSlides/>
            <Accordion/>
        </div>
        <div className="main-hotel">
        <p className="hotel-text">Entrust us with your pet's care to ensure they have a vacation of their own while you're away!</p>
        </div>
        <Footer/>
        </div>
    )
}
export default Hotel;