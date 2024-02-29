import { useState } from "react";
import { dataPets } from "./dataPets";
import Buttons from './Buttons';
import Pets from './Pets';
import Footer from "./Footer";



function Salon() {

    const [petsOne, setPetsOne] = useState(dataPets);
    const chosenPets = (searchTerm) => {
      const newPets = dataPets.filter(element => element.searchTerm === searchTerm);
      setPetsOne(newPets);
    }
    return (
        <div>
       <div className='cont'> 
       <h2 className='back'>Grooming Salon Services </h2>
       </div>
       <div className='cont'>
        <p className="salon-text">At our salon, your pet is guaranteed to leave looking fabulous!</p>
       </div>
       <div>
        <Buttons filteredPets={chosenPets}/>
       </div>
       <div>
        <Pets anyPets={petsOne}/>
       </div>
       <Footer/>
       </div>
      );
} 
export default Salon;