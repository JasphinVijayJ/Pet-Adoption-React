import { useEffect, useState } from 'react'
import Arrow from '../../assets/Icons/Up_Arrow_Icon.png'

export default function ScrollArrow() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) setVisible(true);
            else setVisible(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!visible) return null;

    // Scroll To Top
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button id='scrollArrow' onClick={scrollToTop}>
            <img src={Arrow} alt="Scroll to top" />
        </button>
    )
}
