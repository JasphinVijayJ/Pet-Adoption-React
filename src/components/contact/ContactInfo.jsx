import LocationIcon from '../../assets/Icons/Location_Icon.png';
import PhoneIcon from '../../assets/Icons/Phone_Icon.png';
import ClockIcon from '../../assets/Icons/Clock_Icon.png';

export default function ContactInfo() {
    const infoBoxes = [
        {
            id: 1,
            icon: LocationIcon,
            title: "Address",
            details: ["Saravana Gens Hostel, Velachery,", "Chennai, 600042."]
        },
        {
            id: 2,
            icon: PhoneIcon,
            title: "Contact Us",
            details: ["Email: jasphinvijayj@gmail.com", "Phone: 7339372547"]
        },
        {
            id: 3,
            icon: ClockIcon,
            title: "Working Hours",
            details: ["Mon - Fri: 9am - 8pm", "Sat - Sun: Closed"]
        }
    ];

    return (
        <>
            <section className="contact-banner">
                <h1 className="gradient-highlight">Contact Us</h1>
            </section>

            <section className="contact-section footer-list">
                {infoBoxes.map((box) => {
                    return (
                        <div key={box.id} className="contact-box footer-box">
                            <div>
                                <img src={box.icon} alt={`${box.title}-icon`} />
                            </div>

                            <div className="footer-details">
                                <h3>{box.title}</h3>
                                {box.details.map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </section>
        </>
    );
}
