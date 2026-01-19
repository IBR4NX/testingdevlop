import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from 'react-redux';
import { dark, system } from './features/theme/themeSlice';

const Home = React.lazy(() => import("./app/Home.js"));
const NotFound = React.lazy(() => import("./components/notfound/notfound"));
const Hero = React.lazy(() => import("./components/Heros/Hero"));;
import Layout from './app/Layout/Layout';

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
  // console.log(location);
  return (
    <>
      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="h-screen backdrop-blur-sm text-3xl grid place-items-center">Loading...</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero />} />

            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              {/* 
              <Route path="/search" element={ <Search /> } />
              <Route path="/info" element={ <Info /> } />
              <Route path="/profile" element={ <Profile /> } />
             */}
            </Route>
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;