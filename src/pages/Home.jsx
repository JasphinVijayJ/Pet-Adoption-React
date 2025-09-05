import { useEffect } from "react"
import AdoptionProcess from "../components/common/AdoptionProcess"
import Donate from "../components/common/Donate"
import About from "../components/home/About"
import Intro from "../components/home/Intro"
import LovedOnes from "../components/home/LovedOnes"
import './CSS/Home.css'

function Home() {

  useEffect(() => {
    document.title = "Pet-Adoption-React | Home";
  }, []);

  return (
    <>
      <Intro />
      <About />
      <LovedOnes />
      <AdoptionProcess />
      <Donate />
    </>
  )
}

export default Home