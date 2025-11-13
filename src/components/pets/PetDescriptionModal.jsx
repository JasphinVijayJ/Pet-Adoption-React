import '../../pages/CSS/PetDescriptionModal.css'

import { Link } from "react-router";

function PetDescriptionModal({ pet, isOpen, onClose }) {

  if (!isOpen || !pet) return null;

  return (
    <section className="modal-overlay" onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>

        <button className="close-btn" onClick={onClose}>X</button>

        <div className='modal-image'>
          <img src={pet.img} alt={pet.name + "-image"} />
        </div>

        <div className='modal-details'>
          <h2>{pet.name}</h2>

          <div className='pet-about'>
            <h3>About {pet.name}</h3>
            <p>
              A loving and friendly companion looking for a forever home. This pet has been well cared for,
              has a gentle nature, and is sure to bring joy and happiness to your family.
            </p>
          </div>

          <div className='pet-info'>
            <p><strong>Gender:</strong> {pet.gender}</p>
            <p><strong>Age:</strong> {pet.age}</p>
            <p><strong>Arrived:</strong> {pet.arrived}</p>
          </div>

          <div className='health-info'>
            <h3>Health Information</h3>
            <p>Fully vaccinated, neutered/spayed, microchipped, and in excellent health. Ready for adoption.</p>
          </div>

          <Link to="/contact" className='button-1 adopt-btn'><b>Adopt {pet.name}</b></Link>
        </div>

      </div>
    </section>
  )
}

export default PetDescriptionModal