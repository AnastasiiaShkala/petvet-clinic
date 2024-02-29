function Pets({anyPets}) {
    return (
        <div className="service">
            {anyPets.map((item => {
                const {id, name, price, image} = item;
                return (
                    <div key={id} className="service-card">
                         <img className="card-pets" src={image} alt="items"/>
            
                        <div> 
                        <h3 className="card-text"> {name}</h3>
                        <h4 className="card-price">${price}</h4>
                        </div>
                    </div>
                )
            }))}

            
        </div>
    )

}
export default Pets;