import React from 'react';
import WomenHoldingBunnies from '../../assets/Images/women-holding-cute-bunnies.jpg'
import PawPrintIcon from '../../assets/Icons/Paw-Print-Icon-3.png'

const benefitsData = [
    {
        title: "Trusted Adoption Process",
        description: "We prioritize a safe, loving, and ethical adoption journey from start to finish."
    },
    {
        title: "Health Checkups & Vaccinations",
        description: "All pets are examined and vaccinated to ensure they're healthy and ready for a new home."
    },
    {
        title: "Post-Adoption Support",
        description: "Need help after adoption? We offer tips on training, feeding, and settling in."
    },
    {
        title: "Pet Care Education",
        description: "Get basic guidance on grooming, nutrition, and pet safety."
    },
    {
        title: "Adoption Events",
        description: "Visit our adoption drives to meet pets and find your ideal match."
    }
];

export default function Benefits() {
    return (
        <>
            <section className="services-banner">
                <h1 className="gradient-highlight">Services</h1>
            </section>

            <section className="benefits-section">
                <div className="benefits-img">
                    <img src={WomenHoldingBunnies} alt="women-holding-cute-bunnies" />
                </div>

                <div className="benefits">
                    <h3 className="heading-h3-1">OUR BENEFITS</h3>
                    <h2>Explore How We Can Help</h2>

                    <div className="benefits-content">

                        {benefitsData.map((benefit, index) => (
                            <React.Fragment key={index}>
                                <h4>
                                    <img src={PawPrintIcon} alt="Paw-Print-Icon" />
                                    {benefit.title}
                                </h4>
                                <p>{benefit.description}</p>
                            </React.Fragment>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}
