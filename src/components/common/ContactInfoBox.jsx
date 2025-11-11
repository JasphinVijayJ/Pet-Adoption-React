import { contactInfoData } from './contactInfoData'

function ContactInfoBox({ sectionClass = "", boxClass = "" }) {
    return (
        <section className={`${sectionClass} footer-list`}>
            {contactInfoData.map((box) => {
                return (
                    <div key={box.id} className={`${boxClass} footer-box`}>
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
    )
}

export default ContactInfoBox