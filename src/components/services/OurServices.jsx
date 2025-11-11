import ShelterIcon from '../../assets/Icons/Shelter_Icon.png'
import DogTrainingIcon from '../../assets/Icons/Dog-Training_Icon.png'
import PetCareGuidanceIcon from '../../assets/Icons/Pet-Care-Guidance-Icon.png'
import PetSurrenderIcon from '../../assets/Icons/Pet-Surrender-Icon.png'
import LostFoundIcon from '../../assets/Icons/Lost-&-Found-Icon.png'
import PetSuppliesIcon from '../../assets/Icons/Pet-Supplies-Icon.png'

const servicesData = [
    {
        icon: ShelterIcon,
        title: "Pet Adoption",
        description: "Find and adopt dogs, cats, rabbits, and more from trusted shelters."
    },
    {
        icon: DogTrainingIcon,
        title: "Pet Training",
        description: "Enroll your pets in basic obedience and behavior correction training."
    },
    {
        icon: PetCareGuidanceIcon,
        title: "Pet Care Guidance",
        description: "Access grooming tips, feeding guides, and breed-specific advice."
    },
    {
        icon: PetSurrenderIcon,
        title: "Pet Surrender",
        description: "Unable to care for your pet? We offer a safe, no-judgment surrender process."
    },
    {
        icon: LostFoundIcon,
        title: "Lost & Found",
        description: "Report lost or found pets in your area and help reunite families."
    },
    {
        icon: PetSuppliesIcon,
        title: "Pet Supplies",
        description: "Buy food, toys, and accessories for your new friend — special adopter discounts!"
    }
];

export default function OurServices() {
    return (
        <section className="services">
            <h2 className="heading-h3-1">Our Services</h2>

            <div className="service-list">

                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.icon} alt={`${service.title}-Icon`} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}

            </div>
        </section>
    );
}
