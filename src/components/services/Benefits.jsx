import WomenHoldingBunnies from '../../assets/Images/women-holding-cute-bunnies.jpg'
import PawPrintIcon from '../../assets/Icons/Paw-Print-Icon-3.png'

export default function Benefits() {
    return (
        <>
            <section className="services-banner">
                <h1 className="gradient-highlight">Services</h1>
            </section>

            <section className="benefits-section">
                <div className="benefits-img">
                    <img src={WomenHoldingBunnies} alt="women-holding-cute-bunnies" />
                </div>

                <div className="benefits">
                    <h3 className="heading-h3-1">OUR BENEFITS</h3>
                    <h2>Explore How We Can Help</h2>

                    <div className="benefits-content">
                        <h4>
                            <img src={PawPrintIcon} alt="paw-icon" />
                            Trusted Adoption Process
                        </h4>
                        <p>
                            We prioritize a safe, loving, and ethical adoption journey from start
                            to finish.
                        </p>

                        <h4>
                            <img src={PawPrintIcon} alt="paw-icon" />
                            Health Checkups & Vaccinations
                        </h4>
                        <p>
                            All pets are examined and vaccinated to ensure they’re healthy and
                            ready for a new home.
                        </p>

                        <h4>
                            <img src={PawPrintIcon} alt="paw-icon" />
                            Post-Adoption Support
                        </h4>
                        <p>
                            Need help after adoption? We offer tips on training, feeding, and
                            settling in.
                        </p>

                        <h4>
                            <img src={PawPrintIcon} alt="paw-icon" />
                            Pet Care Education
                        </h4>
                        <p>Get basic guidance on grooming, nutrition, and pet safety.</p>

                        <h4>
                            <img src={PawPrintIcon} alt="paw-icon" />
                            Adoption Events
                        </h4>
                        <p>
                            Visit our adoption drives to meet pets and find your ideal match.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
