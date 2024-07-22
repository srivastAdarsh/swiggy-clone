import { Link } from "react-router-dom";

const Footer = ()=>{
    return (
        <div>
            <ul style={{"marginTop": "80px"}}>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="#">Contact us</Link></li>
                <li><Link to="#">Careers</Link></li>
                <li><Link to="#">Terms and Conditions</Link></li>
                <li><Link to="#">Team</Link></li>
            </ul>
            
            
            
            
            
        </div>
    )
}

export default Footer;