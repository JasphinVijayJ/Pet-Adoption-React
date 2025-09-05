import { Link } from "react-router";
import Dog1 from '../../assets/Images/dog-1.avif'

export default function LovedOnes() {
    return (
        <section className="loved-ones">
            <img src={Dog1} alt="dog" />

            <div>
                <h1>Want a pet for your loved ones?</h1>
                <p>
                    Bring joy, love, and companionship into your home by adopting a furry
                    friend. Whether it’s a playful pup or a cuddly kitten, there’s a
                    perfect pet waiting to become part of your family.
                </p>
                <Link to="pets" className="button-1" ><b>Apply Today</b></Link>
            </div>
        </section>
    )
}
