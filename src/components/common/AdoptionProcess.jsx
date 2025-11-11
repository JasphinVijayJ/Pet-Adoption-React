import AdoptingPuppies from '../../assets/Images/adopting-puppies-in-pairs.webp'
import Dog2 from '../../assets/Images/dog-2.jpg'
import Dog3 from '../../assets/Images/dog-3.avif'

const processSteps = [
    {
        image: AdoptingPuppies,
        alt: "adopting-puppies",
        title: "Submit an Application",
        description: "Fill out our online form to tell us about your home, lifestyle, and the pet you're looking for. This helps us find the right match."
    },
    {
        image: Dog3,
        alt: "dog3",
        title: "Meet Your Match",
        description: "Visit our shelter or connect virtually to meet the pet. Spend time getting to know them and ensure it feels like a good fit."
    },
    {
        image: Dog2,
        alt: "dog2",
        title: "Complete the Adoption",
        description: "Finish the process with a few forms and an adoption fee. Then, take home your new friend to start your journey together!"
    }
];

export default function AdoptionProcess() {
    return (
        <section className="Adoption-Process">
            <h3>How We Work</h3>
            <h1 className="heading-h1-1 gradient-highlight">
                Our Pet Adoption Process
            </h1>

            <section className="process">

                {processSteps.map((step, index) => (
                    <div key={index} className="process-divs">
                        <img src={step.image} alt={`${step.alt}-image`} />
                        <h2>{step.title}</h2>
                        <p>{step.description}</p>
                    </div>
                ))}

            </section>
        </section>
    )
}
