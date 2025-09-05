import { useEffect } from 'react';
import Donate from '../components/common/Donate'
import Benefits from '../components/services/Benefits'
import OurServices from '../components/services/OurServices'
import './CSS/Services.css'

export default function Services() {

  useEffect(() => {
    document.title = "Pet-Adoption-React | Services";
  }, []);

  return (
    <>
      <Benefits />
      <OurServices />
      <Donate />
    </>
  )
}
