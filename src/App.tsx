import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from 'react-redux';

const Home = React.lazy(() => import("./app/Home.js"));
const About = React.lazy(() => import("./app/About.js"));
const NotFound = React.lazy(() => import("./components/notfound/notfound"));
import Layout from './app/Layout/Layout';
import Sping from './components/Animations/Sping.js';
import { setTheme } from './features/theme/themeSlice.js';
import PrivacyPolicy from './app/PrivacyPolicy.js';
import Contact from './app/Contact.js';

/*
const Search = React.lazy(() => import("@/pages/Search"));
const Info = React.lazy(() => import("@/pages/Info"));
const Profile = React.lazy(() => import("@/pages/Profile"));
*/

function App() {
  const dispatch = useDispatch()
  dispatch(setTheme());
  
  return (
    <>
      <div className="isolate">
        <div className="">
          <RecoilRoot>
            <BrowserRouter>
              <AnimatedRoutes />
            </BrowserRouter>
          </RecoilRoot>
        </div>
      </div>
    </>
  );
}



function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Suspense fallback={<Sping />}>
          <Routes location={location} key={location.pathname}>
            <Route path="*" element={<Navigate to="/404" />} />

            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* 
              <Route path="/search" element={ <Search /> } />
              <Route path="/info" element={ <Info /> } />
              <Route path="/profile" element={ <Profile /> } />
              */}
            <Route path='/contact' element={<Contact/>}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Route>
              <Route path="/404" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;