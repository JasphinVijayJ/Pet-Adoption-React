import PawPrint2 from '../../assets/Icons/Paw-Print-Icon-2.png'
import Dog7 from '../../assets/Images/dog-7.avif'

const whoWeArePoints = [
    "Safe, ethical rehoming",
    "Direct connections between owners and adopters",
    "Supportive tools to help make informed adoption decisions",
    "Less pressure on shelters by promoting direct adoption"
];

export default function WhoWeAre() {
    return (
        <section className="who-and-promise">
            <div>
                <h1 className="heading-h1-1 gradient-highlight">Who We Are & What We Do</h1>
                <p>
                    At Adopt & Love, we are a group of animal lovers committed to ending pet homelessness.
                    That’s why we created a kind, ethical, and judgment-free platform for responsible pet adoption
                    and rehoming.
                </p>
                <p>
                    Our platform connects responsible adopters with individuals looking to rehome their pets—
                    starting with dogs, cats, and rabbits. We ensure:
                </p>

                <ul className="ul-icon">
                    {whoWeArePoints.map((point, index) => (
                        <li key={index}>
                            <img src={PawPrint2} alt="Paw-Print-Icon-2" /> {point}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <img src={Dog7} alt="Dog-7" />
            </div>
        </section>
    )
}
