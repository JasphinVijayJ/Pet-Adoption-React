import PawPrint3 from '../../assets/Icons/Paw-Print-Icon-3.png'
import Dog6 from '../../assets/Images/dog-6.avif'

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
                    <li><img src={PawPrint3} alt="Paw Icon" /> Prioritize pet well-being above all</li>
                    <li><img src={PawPrint3} alt="Paw Icon" /> Provide a safe and supportive platform for both adopters and rehomers</li>
                    <li><img src={PawPrint3} alt="Paw Icon" /> Encourage responsible, lifelong adoptions</li>
                    <li><img src={PawPrint3} alt="Paw Icon" /> Reduce shelter strain and promote ethical rehoming</li>
                </ul>
            </div>
        </section>
    )
}
