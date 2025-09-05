import { useEffect, useState } from "react";
import AdoptionSection from "../components/pets/AdoptionSection";
import FilterButtons from "../components/pets/FilterButtons";
import PetList from "../components/pets/PetList";
import HelpSection from "../components/pets/HelpSection";

import './CSS/Pets.css'

export default function Pets() {

  useEffect(() => {
    document.title = "Pet-Adoption-React | Pets";
  }, []);

  const [filter, setFilter] = useState("all");

  return (
    <>
      <AdoptionSection />
      <FilterButtons activeFilter={filter} setFilter={setFilter} />
      <PetList filter={filter} />
      <HelpSection />
    </>
  )
}
