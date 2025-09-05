import { useState } from "react";

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Enter Valid Name";
        if (!formData.email.trim()) newErrors.email = "Enter Valid Email";
        if (!formData.subject.trim()) newErrors.subject = "Enter Valid Subject";
        if (!formData.message.trim()) newErrors.message = "Enter Valid Message";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});  // Clears any previous errors

        // Form submission
        const data = new FormData();    // built-in JavaScript object (new FormData())
        data.append("access_key", "d41735d1-af9e-4fb1-8d0f-3071e1c3c87e");
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("subject", formData.subject);
        data.append("message", formData.message);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: data
        })
            .then((response) => {
                if (response.ok) {
                    alert("Form submitted successfully!");
                    setFormData({ name: "", email: "", subject: "", message: "" });
                } else {
                    alert("Oops! Something went wrong. Please try again.");
                }
            })
            .catch(() => alert("Network error. Please check your connection."));
    }

    return (
        <section className="form-section">
            <h2 className="gradient-highlight">Contact <span className="top-span">Us</span></h2>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                    <small>{errors.name}</small>
                </div>

                <div className="input-group">
                    <input type="email" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                    <small>{errors.email}</small>
                </div>

                <div className="input-group">
                    <input type="text" id="subject" placeholder="Your Subject" value={formData.subject} onChange={handleChange} />
                    <small>{errors.subject}</small>
                </div>

                <div className="input-group">
                    <textarea rows="3" id="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
                    <small>{errors.message}</small>
                </div>

                <button type="submit" className="button-1"><b>Send Message</b></button>
            </form>
        </section>
    )
}