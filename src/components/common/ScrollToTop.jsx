import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // does not render anything
}

// -------------------------------------------------------------
// Purpose: This component makes sure that when navigating between
// different routes/pages in React Router, the window scrolls
// back to the top. Without this, React keeps the old scroll
// position when returning to a page (e.g., going back to Home).
// -------------------------------------------------------------