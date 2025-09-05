import { Link } from "react-router";

export default function HelpSection() {
    return (
        <section className="help-section">
            <h1 className="gradient-highlight">Have Questions?</h1>
            <p>
                If you have any doubts or need more information about the adoption process, feel free to contact us.
                Our team is always happy to assist you!
            </p>

            <Link to="/contact" className='button-1'><b>Contact Us</b></Link>
        </section>
    );
}
