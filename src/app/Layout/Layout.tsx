import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux";
import { menu } from "../../features/mobileMenu/mobileMenu";
import { AnimationHeader, Animationpage } from "../../components/Animations/Animation.js";
import Header from "../../components/header/Header"
import Footer from '../../components/Footers/Footer.js';
import { useEffect, useState } from "react";
import Intro from "../Intro.js";

function Layout() {
    const dispatch = useDispatch();
    dispatch(menu(false))
    const [showIntro, setShowIntro] = useState(document.cookie.indexOf("shownIntro=true")===-1 );
    useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
        document.cookie = "shownIntro=true; max-age=36000000000"; 
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
    return (
        <>

        {showIntro &&
         <Intro />
         } <>
         <AnimationHeader>
         <Header />
         </AnimationHeader>
         <Animationpage>
         <Outlet />
         </Animationpage>

            <Footer />
        </>
        </>
    )
}



export default Layout