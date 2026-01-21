import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from 'react-redux';
import { dark, system } from './features/theme/themeSlice';

const Home = React.lazy(() => import("./app/Home.js"));
const NotFound = React.lazy(() => import("./components/notfound/notfound"));
// const Hero = React.lazy(() => import("./components/Heros/Hero"));;
import Layout from './app/Layout/Layout';
import Sping from './components/Animations/Sping.js';

/*
const Search = React.lazy(() => import("@/pages/Search"));
const Info = React.lazy(() => import("@/pages/Info"));
const Profile = React.lazy(() => import("@/pages/Profile"));
*/

function App() {
  const theme = localStorage.getItem("theme");
  const dispatch = useDispatch()
  if (!theme || theme === "system") {
    dispatch(system())
  }
  if (theme === "dark") {
    dispatch(dark());
  }
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
            <Route path="*" element={<Navigate to="/" />} />

            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              {/* 
              <Route path="/search" element={ <Search /> } />
              <Route path="/info" element={ <Info /> } />
              <Route path="/profile" element={ <Profile /> } />
              */}
            </Route>
              <Route path="/404" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;