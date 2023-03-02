import Navbar from "./Navbar";
import boton from '../starter-code/assets/Group.svg'

const Home = () => {

    return (
        <div className="home-page">
            <Navbar/>
            <div className="section">
                <div className="home-text">
                    <h3 className="title">SO, YOU WANT TO TRAVEL TO</h3>
                    <h1 className="main-title">SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="home-btn">
                    <img src={boton}/>
                </div>
            
            </div>
            
        </div>
    )
}

export default Home;