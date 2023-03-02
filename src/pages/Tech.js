import Navbar from "./Navbar"
import data from '../starter-code/data.json'
import { useState } from "react"

const Tech = () => {

    const [tech] = useState(data.technology)
    const [value, setValue] = useState(0)
   
    const myStyle = {
        background: "white",
        color: "black"
    };

    const { name, description, images } = tech[value]

    return (
        <div className="tech-page">
            <Navbar/>
            <div className="section">
                <div className="crew-info">
                    <h1 className="crew-title">
                        <span className="crew-span">03</span>
                        SPACE LAUNCH 101
                    </h1>
                    <div className="tech-description">
                    <div className="tech-btn-container">
                        {tech.map((items, index) => (
                            <button 
                            key={index} 
                            onClick={() => setValue(index)}
                            className={index === value ? "tech-btn-active" : "tech-btn"
                            }
                            >{index+1}</button>
                        ))}
                    </div>
                    <div>
                        <span className="tech-span">the terminology_</span>
                        <h2 className="tech-title">{name}</h2>
                        <h1 className="tech-desc">{description}</h1>
                    </div>
                </div>
            </div>
            <div className="crew-imgholder">
                <img src={images.portrait} className='crew-img'/>
            </div>
        </div>  
    </div>
    )
}

export default Tech