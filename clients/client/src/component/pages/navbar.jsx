import { Link, Outlet } from "react-router-dom";
import carlogo from '../assets/logo.jpeg'

const Header = () => {
    return ( 
        <header>
           <img className='car-logo' src={carlogo} alt="kar" />
             <h1 className="logo"> Affordable-Rides!....</h1>
            
        <nav  className="navbar">      
                    
                    <ul className="nav-links">
                  <li> <Link className="links" to='/'>Home</Link></li> 
                  <li> <Link className="links" to='/user-registration'>Register</Link></li> 
                  <li> <Link className="links" to='/driver-registration'>Become A Driver</Link></li>  
                  <li> <Link className="links" to='/'>Contact Us</Link></li> 
                  <li> <Link className="links" to='/about'>About Us</Link></li>  
                 <li> <Link className="nav-btn" to='#'>Partner Sign Up</Link></li>
                    </ul>
                    </nav>
       
       
        <Outlet/>
       

        </header>

        
     );
}
 
export default Header;