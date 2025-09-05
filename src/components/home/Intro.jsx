import { Link } from "react-router";

export default function Intro() {
    return (
        <section className='intro-background' >
            <div className='intro'>
                <h1 className="gradient-highlight">Looking for a New Best Friend?</h1>
                <p>Thousands of pets are waiting to meet you. Adopt today and change a life—maybe even your own.</p>

                <Link to="pets" className='button-1'><b>View Pets</b></Link>
            </div>
        </section>
    )
}
