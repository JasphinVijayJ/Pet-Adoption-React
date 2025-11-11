import { useState } from "react";
import PopupAlert from "./PopupAlert";

const inputFields = [
    { id: "name", type: "text", placeholder: "Your Name" },
    { id: "email", type: "email", placeholder: "Your Email" },
    { id: "subject", type: "text", placeholder: "Your Subject" },
];

// Email regex pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [popupBox, setPopupBox] = useState({ show: false, message: "", type: "" });

    // Handle input change
    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData((prevData) => ({
            ...prevData, [id]: value,
        }));

        // Clear error for this field if user starts typing
        setErrors((prevErrors) => ({
            ...prevErrors, [id]: ""
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";

        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!emailPattern.test(formData.email))
            newErrors.email = "Enter a valid email address";

        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

        return newErrors;
    };

    const popupBoxMessage = (message, type) => {
        setPopupBox({ show: true, message, type });

        // Auto hide after 3 seconds
        setTimeout(() => {
            setPopupBox({ show: false, message: "", type: "" })
        }, 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});  // Clears any previous errors
        setIsSubmitting(true);  // show loading (Sending...)

        try {
            // Form submission
            const data = new FormData();    // built-in JavaScript object (new FormData())
            data.append("access_key", "d41735d1-af9e-4fb1-8d0f-3071e1c3c87e");
            data.append("name", formData.name.trim());
            data.append("email", formData.email.trim());
            data.append("subject", formData.subject.trim());
            data.append("message", formData.message.trim());

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data
            });

            if (response.ok) {
                popupBoxMessage("Form submitted successfully!", "success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                popupBoxMessage("Oops! Something went wrong. Please try again.", "error");
            }
        } catch (error) {
            popupBoxMessage("Network error. Please check your connection.", "error")
        } finally {
            setIsSubmitting(false);  // reset loading state (Sending...)
        }
    };

    return (
        <section className="form-section">
            <h2 className="gradient-highlight">Contact <span className="top-span">Us</span></h2>

            {/* Popup Alert Component */}
            <PopupAlert show={popupBox.show} message={popupBox.message} type={popupBox.type} />

            <form onSubmit={handleSubmit}>

                {inputFields.map(({ id, type, placeholder }) => (
                    <div className="input-group" key={id}>
                        <input
                            type={type}
                            id={id}
                            placeholder={placeholder}
                            value={formData[id]}
                            onChange={handleChange}
                        />
                        <small>{errors[id]}</small>
                    </div>
                ))}

                <div className="input-group">
                    <textarea rows="3" id="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
                    <small>{errors.message}</small>
                </div>

                <button type="submit" className="button-1" disabled={isSubmitting}> {/* Prevents multiple clicks */}
                    <b>{isSubmitting ? "Sending..." : "Send Message"}</b>
                </button>
            </form>
        </section>
    )
}