import './Footer.css'
import LocationIcon from '../../assets/Icons/Location_Icon.png'
import PhoneIcon from '../../assets/Icons/Phone_Icon.png'
import ClockIcon from '../../assets/Icons/Clock_Icon.png'
import { Link } from 'react-router'

export default function Footer() {
    const infoBoxes = [
        {
            id: 1,
            icon: LocationIcon,
            title: "Address",
            details: ["Saravana Gens Hostel, Velachery,", "Chennai, 600042."]
        },
        {
            id: 2,
            icon: PhoneIcon,
            title: "Contact Us",
            details: ["Email: jasphinvijayj@gmail.com", "Phone: 7339372547"]
        },
        {
            id: 3,
            icon: ClockIcon,
            title: "Working Hours",
            details: ["Mon - Fri: 9am - 8pm", "Sat - Sun: Closed"]
        }
    ];

    return (
        <footer>
            <h1 className="gradient-highlight">Adopt & Love</h1>

            <section className="footer-list">
                {infoBoxes.map((box) => {
                    return (
                        <div key={box.id} className="footer-box">
                            <div>
                                <img src={box.icon} alt={`${box.title}-icon`} />
                            </div>
                            
                            <div className="footer-details">
                                <h3>{box.title}</h3>
                                {box.details.map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                        </div>
                    );
                })}
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
