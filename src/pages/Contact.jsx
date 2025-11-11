import { useEffect } from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfoBox from "../components/common/ContactInfoBox";

import './CSS/Contact.css'

export default function Contact() {

  useEffect(() => {
    document.title = "Pet-Adoption-React | Contact";
  }, []);

  return (
    <>
      <section className="contact-banner">
        <h1 className="gradient-highlight">Contact Us</h1>
      </section>

      <ContactInfoBox sectionClass={"contact-section"} boxClass={"contact-box"} />

      <ContactForm />
    </>
  )
}
