import PawPrint3 from '../../assets/Icons/Paw-Print-Icon-3.png'
import Dog6 from '../../assets/Images/dog-6.avif'

const promisePoints = [
    "Prioritize pet well-being above all",
    "Provide a safe and supportive platform for both adopters and rehomers",
    "Encourage responsible, lifelong adoptions",
    "Reduce shelter strain and promote ethical rehoming"
];

export default function OurPromise() {
    return (
        <section className="who-and-promise">
            <div>
                <img src={Dog6} alt="Dog" />
            </div>

            <div>
                <h1 className="heading-h1-1 gradient-highlight">Our Promise</h1>
                <p>
                    At Adopt & Love, we care deeply about doing right by every pet and every person
                    involved in the adoption process.
                </p>

                <ul className="ul-icon">
                    {promisePoints.map((point, index) => (
                        <li key={index}>
                            <img src={PawPrint3} alt="Paw-Print-Icon-3" /> {point}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
