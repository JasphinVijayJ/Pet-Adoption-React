import { useEffect } from "react";
import Mission from "../components/about/Mission";
import OurPromise from "../components/about/OurPromise";
import WhoWeAre from "../components/about/WhoWeAre";
import AdoptionProcess from "../components/common/AdoptionProcess";
import './CSS/About.css'

export default function About() {

  useEffect(() => {
    document.title = "Pet-Adoption-React | About";
  }, []);

  return (
    <>
      <Mission />
      <WhoWeAre />
      <OurPromise />
      <AdoptionProcess />
    </>
  )
}
