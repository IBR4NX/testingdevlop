import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux";
import { menu } from "../../features/mobileMenu/mobileMenu";
import { AnimationHeader, Animationpage, AnimationTest } from "../../components/Animations/Animation.js";
import Test from '../Test';
import Header from "../../components/header/Header"
import Footer from '../../components/Footers/Footer.js';


function Layout() {
    const dispatch = useDispatch();
    dispatch(menu(false))
    return (
        <>
            <AnimationHeader>
                <Header />
            </AnimationHeader>
            <Animationpage>
                <Outlet />
            </Animationpage>
            <AnimationTest>
                <Test />
            </AnimationTest>
            <Footer />
        </>
    )
}



export default Layout