import { Link } from 'react-router-dom'
import icon from '../starter-code/assets/shared/logo.svg'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <img className='nav-img' src={icon}/>
                <ul className='nav-links'>
                    <li>
                        <span className='nav-bold'>00</span>
                         <Link to="/"  className='nav-text'> Home</Link>                        
                    </li>
                    <li>
                        <span className='nav-bold'>01</span>
                        <Link to="/destination" className='nav-text'> Destinations</Link>
                    </li>
                    <li>
                        <span className='nav-bold'>02</span>
                        <Link to="/crew" className='nav-text'> CREW</Link>
                    </li>                        
                    <li>
                        <span className='nav-bold'>03</span>
                        <Link to="/tech" className='nav-text'> TECHNOLOGY</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar