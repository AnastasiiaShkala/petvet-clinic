function Buttons({filteredPets}) {
    return (
        <div className="cont">
                        <button className="change"onClick={() => filteredPets('dogs')}>Dogs</button>
                    
                    <button className="change" onClick={() => filteredPets('cats')}>Cats</button>
                
                <button className="change" onClick={() => filteredPets('puppies')}>Puppies</button>
            
            <button className="change" onClick={() => filteredPets('kittens')}>Kittens</button>
        
   
    </div>
                )
            
}

export default Buttons;