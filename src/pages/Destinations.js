import Navbar from "./Navbar";
import data from '../starter-code/data.json'
import { useState } from "react";

const Destinations = () => {

    const [planets] = useState(data.destinations)
    const [value, setValue] = useState(0)

    const { name, images, description, distance, travel } = planets[value]

    return (
        <div className="destinations-page">
            <Navbar/>
            <div className="section">
                <div className="destination-imgholder">
                    <h1 className="dest-title">
                        <span className="dest-span">01</span>
                        Pick your destination
                    </h1>
                    <img src={images.png} alt={name} className='destination-img'/>
                </div>


                <div className="destination-info">
                    {planets.map((item, index) => (
                        <button key={index} onClick={() => 
                        setValue(index)}
                        className='dist-btn from-left'
                        >
                            {item.name}
                        </button>
                    ))}
                    <h2 className="dist-name">{name}</h2>
                    <p className="dist-description">{description}</p>
                    <ul className="dist-info">
                        <li className="dist-li">
                            <span className="dist-span">Avg. Distance </span>
                            {distance}</li>
                        <li className="dist-li">
                            <span className="dist-span">Est. Travel </span>
                            {travel}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Destinations