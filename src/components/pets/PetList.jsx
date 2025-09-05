import DogAdoption1 from '../../assets/Pets-Adoption/Dogs/dog-adoption-1.jpg'
import DogAdoption2 from '../../assets/Pets-Adoption/Dogs/dog-adoption-2.jpg'
import DogAdoption3 from '../../assets/Pets-Adoption/Dogs/dog-adoption-3.jpg'
import DogAdoption4 from '../../assets/Pets-Adoption/Dogs/dog-adoption-4.jpg'
import DogAdoption5 from '../../assets/Pets-Adoption/Dogs/dog-adoption-5.jpg'
import DogAdoption6 from '../../assets/Pets-Adoption/Dogs/dog-adoption-6.jpg'
import DogAdoption7 from '../../assets/Pets-Adoption/Dogs/dog-adoption-7.jpg'
import DogAdoption8 from '../../assets/Pets-Adoption/Dogs/dog-adoption-8.jpg'
import DogAdoption9 from '../../assets/Pets-Adoption/Dogs/dog-adoption-9.jpg'
import DogAdoption10 from '../../assets/Pets-Adoption/Dogs/dog-adoption-10.jpg'

import CatAdoption1 from '../../assets/Pets-Adoption/Cats/cat-adoption-1.jpg'
import CatAdoption2 from '../../assets/Pets-Adoption/Cats/cat-adoption-2.jpg'
import CatAdoption3 from '../../assets/Pets-Adoption/Cats/cat-adoption-3.jpg'
import CatAdoption4 from '../../assets/Pets-Adoption/Cats/cat-adoption-4.jpg'
import CatAdoption5 from '../../assets/Pets-Adoption/Cats/cat-adoption-5.jpg'
import CatAdoption6 from '../../assets/Pets-Adoption/Cats/cat-adoption-6.jpg'
import CatAdoption7 from '../../assets/Pets-Adoption/Cats/cat-adoption-7.jpg'

import OtherAdoption1 from '../../assets/Pets-Adoption/Others/other-adoption-1.jpg'
import OtherAdoption2 from '../../assets/Pets-Adoption/Others/other-adoption-2.jpg'
import OtherAdoption3 from '../../assets/Pets-Adoption/Others/other-adoption-3.jpg'
import { Link } from 'react-router'

const pets = [
    // ---------------- Dogs ----------------
    { id: 1, name: "Fluffy", type: "dogs", gender: "Female", age: "2 years", arrived: "May 1, 2023", img: DogAdoption1 },
    { id: 2, name: "Jack", type: "dogs", gender: "Male", age: "8 months", arrived: "Jan 13, 2025", img: DogAdoption2 },
    { id: 3, name: "Joanne", type: "dogs", gender: "Male", age: "5 years", arrived: "Mar 21, 2024", img: DogAdoption3 },
    { id: 4, name: "Cutesy", type: "dogs", gender: "Male", age: "3 months", arrived: "Jan 10, 2025", img: DogAdoption4 },
    { id: 5, name: "Lucky", type: "dogs", gender: "Male", age: "5 years", arrived: "Apr 20, 2022", img: DogAdoption5 },
    { id: 6, name: "Rocky", type: "dogs", gender: "Male", age: "3 years", arrived: "Jan 15, 2023", img: DogAdoption6 },
    { id: 7, name: "Luna", type: "dogs", gender: "Female", age: "1 years", arrived: "Feb 28, 2024", img: DogAdoption7 },
    { id: 8, name: "Max", type: "dogs", gender: "Male", age: "2 years", arrived: "Jul 8, 2023", img: DogAdoption8 },
    { id: 9, name: "Bella", type: "dogs", gender: "Female", age: "4 years", arrived: "Oct 10, 2022", img: DogAdoption9 },
    { id: 10, name: "Daisy", type: "dogs", gender: "Female", age: "6 years", arrived: "May 5, 2021", img: DogAdoption10 },

    // ---------------- Cats ----------------
    { id: 11, name: "Charlie", type: "cats", gender: "Male", age: "2 years", arrived: "Jul 6, 2024", img: CatAdoption1 },
    { id: 12, name: "Magdalene", type: "cats", gender: "Female", age: "2 years", arrived: "Nov 16, 2023", img: CatAdoption2 },
    { id: 13, name: "Kittie", type: "cats", gender: "Male", age: "1 years", arrived: "Sept 22, 2024", img: CatAdoption3 },
    { id: 14, name: "Oscar", type: "cats", gender: "Male", age: "5 years", arrived: "Mar 29, 2022", img: CatAdoption4 },
    { id: 15, name: "Whiskers", type: "cats", gender: "Female", age: "4 years", arrived: "Sept 3, 2024", img: CatAdoption5 },
    { id: 16, name: "Milo", type: "cats", gender: "Male", age: "2 years", arrived: "May 12, 2023", img: CatAdoption6 },
    { id: 17, name: "Shadow", type: "cats", gender: "Male", age: "3 years", arrived: "Aug 21, 2022", img: CatAdoption7 },

    // ---------------- Others ----------------
    { id: 18, name: "Spiker", type: "others", gender: "Male", age: "2 years", arrived: "Aug 14, 2023", img: OtherAdoption1 },
    { id: 19, name: "Nugget", type: "others", gender: "Male", age: "6 months", arrived: "Feb 14, 2024", img: OtherAdoption2 },
    { id: 20, name: "Peanut", type: "others", gender: "Male", age: "1 years", arrived: "Dec 5, 2023", img: OtherAdoption3 }
];


export default function PetList({ filter }) {
    return (
        <section className="pet-list">
            {pets.filter((pet) => {
                if (filter === "all" || pet.type === filter) return true;
                else return false;
            }).map((pet) => {
                return (
                    <div key={pet.id} className={`pet-card ${pet.type}`}>
                        <img src={pet.img} alt={pet.name + "-image"} />
                        <h2>{pet.name}</h2>
                        <p><strong>Gender:</strong> {pet.gender}</p>
                        <p><strong>Age:</strong> {pet.age}</p>
                        <p><strong>Arrived:</strong> {pet.arrived}</p>
                        <Link to="/contact"><b>Adopt Pet</b></Link>
                    </div>
                );
            })}

        </section>
    )
}