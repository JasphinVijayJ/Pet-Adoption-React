import ShelterIcon from '../../assets/Icons/Shelter_Icon.png'
import DogTrainingIcon from '../../assets/Icons/Dog-Training_Icon.png'
import PetCareGuidanceIcon from '../../assets/Icons/Pet-Care-Guidance-Icon.png'
import PetSurrenderIcon from '../../assets/Icons/Pet-Surrender-Icon.png'
import LostFoundIcon from '../../assets/Icons/Lost-&-Found-Icon.png'
import PetSuppliesIcon from '../../assets/Icons/Pet-Supplies-Icon.png'

export default function OurServices() {
    return (
        <section className="services">
            <h2 className="heading-h3-1">Our Services</h2>

            <div className="service-list">
                <div className="service-card">
                    <img src={ShelterIcon} alt="Pet Adoption" />
                    <h3>Pet Adoption</h3>
                    <p>Find and adopt dogs, cats, rabbits, and more from trusted shelters.</p>
                </div>

                <div className="service-card">
                    <img src={DogTrainingIcon} alt="Pet Training" />
                    <h3>Pet Training</h3>
                    <p>
                        Enroll your pets in basic obedience and behavior correction training.
                    </p>
                </div>

                <div className="service-card">
                    <img src={PetCareGuidanceIcon} alt="Pet Care Guidance" />
                    <h3>Pet Care Guidance</h3>
                    <p>
                        Access grooming tips, feeding guides, and breed-specific advice.
                    </p>
                </div>

                <div className="service-card">
                    <img src={PetSurrenderIcon} alt="Pet Surrender" />
                    <h3>Pet Surrender</h3>
                    <p>
                        Unable to care for your pet? We offer a safe, no-judgment surrender
                        process.
                    </p>
                </div>

                <div className="service-card">
                    <img src={LostFoundIcon} alt="Lost and Found" />
                    <h3>Lost & Found</h3>
                    <p>
                        Report lost or found pets in your area and help reunite families.
                    </p>
                </div>

                <div className="service-card">
                    <img src={PetSuppliesIcon} alt="Pet Supplies" />
                    <h3>Pet Supplies</h3>
                    <p>
                        Buy food, toys, and accessories for your new friend — special adopter
                        discounts!
                    </p>
                </div>
            </div>
        </section>
    );
}
