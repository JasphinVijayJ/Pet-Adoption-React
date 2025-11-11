import './Footer.css'
import { Link } from 'react-router';
import ContactInfoBox from '../../components/common/ContactInfoBox';

export default function Footer() {
    return (
        <footer>
            <h1 className="gradient-highlight">Adopt & Love</h1>

            <ContactInfoBox />  {/* Uses default empty classes */}

            <nav className="nav-bottom">
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/pets" >Pets</Link>
                <Link to="/services" >Services</Link>
                <Link to="/contact" >Contact</Link>
            </nav>

            <p>
                © {new Date().getFullYear()} Adopt & Love. Copyrights reserved by <b>Jasphin Vijay</b>
            </p>
        </footer>
    )
}
