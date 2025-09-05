import PawPrintIcon3 from '../../assets/Icons/Paw-Print-Icon-3.png'

export default function AdoptionSection() {
    return (
        <>
            {/* Banner Section */}
            <section className="pets-banner">
                <h1 className="gradient-highlight">Pet Adoption</h1>
            </section>

            {/* Adoption Info Section */}
            <section className="adoption-section">
                <div className="adoption adoption-intro">
                    <h2>Adopt a Pet – Change a Life</h2>

                    <p>Looking to add a new member to your family? Adopting a pet not only gives a homeless animal a second
                        chance, but it also fills your life with unconditional love and joy.</p>

                    <p>Our adoption process is simple and focused on matching you with the perfect pet, whether it's an
                        energetic puppy or a calm adult cat.</p>
                </div>

                <div className="adoption adoption-details">
                    <h3>Ready for Adoption – What You Can Expect</h3>

                    <ul className="ul-icon">
                        <li><img src={PawPrintIcon3} alt="Paw-Print-Icon-3-image" />All pets are vaccinated
                            and neutered/spayed</li>
                        <li><img src={PawPrintIcon3} alt="Paw-Print-Icon-3-image" />Each pet receives a
                            full veterinary health check-up</li>
                        <li><img src={PawPrintIcon3} alt="Paw-Print-Icon-3-image" />We help match you with
                            the right pet for your lifestyle</li>
                        <li><img src={PawPrintIcon3} alt="Paw-Print-Icon-3-image" />We provide
                            post-adoption support for a smooth transition</li>
                    </ul>
                </div>
            </section>
        </>
    );
}
