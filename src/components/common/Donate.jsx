import { Link } from "react-router";
import Cat2 from '../../assets/Images/cat-2.jpg'

export default function Donate() {
    return (
        <section className="donate-section">
            <div className="donate-content">
                <h2 className="gradient-highlight">Donate To Our Animal Shelter</h2>

                <p>
                    Join us in making a difference today. Your support helps rescue
                    animals, provide care, and give them the chance to find loving homes.
                </p>

                <p>
                    We believe that every animal deserves a safe and happy life. With that
                    goal in mind, we have created shelters across the country to
                    vaccinate, rescue, and foster stray cats and dogs.
                </p>

                <Link to="contact" className="button-1" ><b>Contact Us</b></Link>
            </div>

            <div className="donate-img">
                <img src={Cat2} alt="cat" />
            </div>
        </section>
    )
}
