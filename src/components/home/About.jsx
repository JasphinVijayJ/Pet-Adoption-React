import PawPrint from '../../assets/Icons/Paw-Print-Icon-1.png'
import AllPets from '../../assets/Images/dogs_cats_rabbits_pets.jpg'

export default function About() {
    return (
        <section className="about-section">
            <div className="about-content">
                <h3>About Us</h3>
                <h2>Every Pet Deserves a Second Chance</h2>

                <p>
                    At Adopt & Love, we’re a compassionate community helping abandoned,
                    rescued, and homeless animals find the families they deserve. We work
                    closely with shelters, foster homes, and animal lovers to ensure each
                    pet gets a second chance to experience the love and care they deserve.
                </p>
                <p>
                    Our mission is simple: to connect pets in need with loving homes where
                    they can thrive and be cherished for life.
                </p>

                <h3>What We Stand For</h3>
                <ul className="about-ul">
                    <li>
                        <img src={PawPrint} alt="Paw Icon" />
                        <b>Love & Care:</b> Every animal is treated with kindness, respect,
                        and medical attention.
                    </li>
                    <li>
                        <img src={PawPrint} alt="Paw Icon" />
                        <b>Perfect Matches:</b> We help match pets with homes where they’ll
                        be loved for life.
                    </li>
                    <li>
                        <img src={PawPrint} alt="Paw Icon" />
                        <b>Rescue & Rehabilitation:</b> From rescue to recovery, we stand by
                        our animals.
                    </li>
                    <li>
                        <img src={PawPrint} alt="Paw Icon" />
                        <b>Safe Adoptions:</b> Our process is simple, transparent, and
                        focused on long-term happiness.
                    </li>
                </ul>
            </div>

            <div className='about-image'>
                <img src={AllPets} alt="dogs cats rabbits pets" />
            </div>
        </section>
    )
}
