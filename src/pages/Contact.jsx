import { useEffect } from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

import './CSS/Contact.css'

export default function Contact() {

  useEffect(() => {
    document.title = "Pet-Adoption-React | Contact";
  }, []);

  return (
    <>
      <ContactInfo />
      <ContactForm />
    </>
  )
}
