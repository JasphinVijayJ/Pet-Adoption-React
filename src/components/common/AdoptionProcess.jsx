import AdoptingPuppies from '../../assets/Images/adopting-puppies-in-pairs.webp'
import Dog2 from '../../assets/Images/dog-2.jpg'
import Dog3 from '../../assets/Images/dog-3.avif'

export default function AdoptionProcess() {
    return (
        <section className="Adoption-Process">
            <h3>How We Work</h3>
            <h1 className="heading-h1-1 gradient-highlight">
                Our Pet Adoption Process
            </h1>

            <section className="process">
                <div className="process-divs">
                    <img src={AdoptingPuppies} alt="adopting puppies" />
                    <h2>Submit an Application</h2>
                    <p>
                        Fill out our online form to tell us about your home, lifestyle, and
                        the pet you're looking for. This helps us find the right match.
                    </p>
                </div>

                <div className="process-divs">
                    <img src={Dog3} alt="dog" />
                    <h2>Meet Your Match</h2>
                    <p>
                        Visit our shelter or connect virtually to meet the pet. Spend time
                        getting to know them and ensure it feels like a good fit.
                    </p>
                </div>

                <div className="process-divs">
                    <img src={Dog2} alt="dog" />
                    <h2>Complete the Adoption</h2>
                    <p>
                        Finish the process with a few forms and an adoption fee. Then, take
                        home your new friend to start your journey together!
                    </p>
                </div>
            </section>
        </section>
    )
}
