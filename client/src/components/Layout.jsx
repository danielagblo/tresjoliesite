import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there's a hash, find the element and scroll to it
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 0);
            }
        } else {
            // Otherwise scroll to top when changing pages
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <WhatsAppButton />
        </>
    );
};

export default Layout;