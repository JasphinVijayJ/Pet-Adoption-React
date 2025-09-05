import './Footer.css'
import LocationIcon from '../../assets/Icons/Location_Icon.png'
import PhoneIcon from '../../assets/Icons/Phone_Icon.png'
import ClockIcon from '../../assets/Icons/Clock_Icon.png'
import { Link } from 'react-router'

export default function Footer() {
    return (
        <footer>
            <h1 className="gradient-highlight">Adopt & Love</h1>

            <section className="footer-list">
                <div className="footer-box">
                    <div>
                        <img src={LocationIcon} alt="Location Icon" />
                    </div>
                    <div className="footer-details">
                        <h3>Address</h3>
                        <p>
                            Saravana Gens Hostel, Velachery, <br />
                            Chennai, 600042.
                        </p>
                    </div>
                </div>

                <div className="footer-box">
                    <div>
                        <img src={PhoneIcon} alt="Phone Icon" />
                    </div>
                    <div className="footer-details">
                        <h3>Contact Us</h3>
                        <p>Email: jasphinvijayj@gmail.com</p>
                        <p>Phone: 7339372547</p>
                    </div>
                </div>

                <div className="footer-box">
                    <div>
                        <img src={ClockIcon} alt="Clock Icon" />
                    </div>
                    <div className="footer-details">
                        <h3>Working Hours</h3>
                        <p>Mon - Fri: 9am - 8pm</p>
                        <p>Sat - Sun: Closed</p>
                    </div>
                </div>
            </section>

            <nav className="nav-bottom">
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/pets" >Pets</Link>
                <Link to="/services" >Services</Link>
                <Link to="/contact" >Contact</Link>
            </nav>

            <p>
                © Copyrights are Reserved by <b>Jasphin Vijay</b>
            </p>
        </footer>
    )
}
