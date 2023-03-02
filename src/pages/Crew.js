import Navbar from "./Navbar"
import data from '../starter-code/data.json'
import { useState } from "react"

const Crew = () => {

    const [members] = useState(data.crew)
    const [value, setValue] = useState(0)

    const { name, role, bio, images } = members[value]

    return (
        <div className="crew-page">
            <Navbar/>
            <div className="section">
                <div className="crew-info">
                    <h1 className="crew-title">
                        <span className="crew-span">02</span>
                        Meet your crew
                    </h1>
                    <div className="crew-description">
                        <h2 className="crew-role">{role}</h2>
                        <h1 className="crew-name">{name}</h1>
                        <p className="crew-desc">{bio}</p>
                        {members.map((items, index) => (
                            <input type="radio" name="radAnswer" key={index} onClick={() => 
                            setValue(index)}
                            className='crew-btn from-left'/>
                        ))}
                    </div>
                </div>

                <div className="crew-imgholder">
                    <img src={images.png} className='crew-img'/>
                </div>
            </div>   
        </div>
        
    )
}

export default Crew