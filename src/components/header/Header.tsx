import { useEffect, useState } from "react";
import logoLight from "/assets/logo/logoLight.png";
import logo from "/assets/logo/logo.png";
import { Link } from "react-router-dom";
import List from "./List";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/Store";
import { menu } from "../../features/mobileMenu/mobileMenu";
import { useTranslation } from "react-i18next";
import ThemeBtn from "../../features/theme/ThemeBtn";
function Header() {
  const mobileMenuOpen = useSelector((state: RootState) => state.menu.value);
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch()
  const {i18n} = useTranslation();
  const [atTop, setAtTop] = useState(true);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          setAtTop(window.scrollY === 0);
          ticking = false;
        });
      }};
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll as EventListener);
  }, []);


  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
   
  };
  useEffect(() => {
    const onResize = () => {
      if (mobileMenuOpen && window.innerWidth > 1024) {
        dispatch(menu(false));
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileMenuOpen, dispatch]);

  return (
    <>

      <header className={` `}>
        <div className={` bgst fixed inset-x-0 top-0 z-20 backdrop-blur-xs  border-b border-gray-950/10 dark:border-white/15 
          ${!mobileMenuOpen && !atTop ? "drop-shadow-md/10" : ""} drop-shadow-black dark:drop-shadow-white `}>
          <div className="bg-opacity-98 property-bg  pr-(--scrollbar-padding)  ">
            <nav className="flex z-20 justify-between items-center  px-5 py-2 h-12 lg *:max-h-14">
              <div className=" flex h-full gap-1 flex-1 min-w-1/2 ">
                <button
                  onClick={() => dispatch(menu(!mobileMenuOpen))}
                  className="  h-full w-10 rounded-full hover:bg-gray-950/10 cursor-pointer rking ring-gray-950/5"
                >
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className=" m-auto"
                  >
                    {mobileMenuOpen ?
                      <>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                        <line x1="6" y1="18" x2="18" y2="6"></line>
                      </>
                      :
                      <>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                      </>
                    }
                  </svg>
                </button>
                <Link to="/">
                  <span className="sr-only hidden" >Ibovs</span>
                  <img alt="" src={(theme === "light") ? logoLight : logo}
                    className={`  h-full self-center transition-all duration-300 ease-in-out 
                    ${mobileMenuOpen && (i18n.language==="en" ?  "translate-x-[150%] delay-75": "-translate-x-full")} `}
                  />
                </Link>
              </div>
              <div className="flex flex-1 gap-2 h-full *:h-full  justify-end items-center  ">
                <div className="">
                  {/* input Search */}
                  {/* <input type="text" placeholder="Search" onChange={handleTestChange} className="px-1.5 text-xs border border-gray-950/50 rounded-full w-20 h-7" /> */}
                  {/* <button type="button" className="inline-flex items-center gap-1 rounded-full bg-gray-950/2 px-2 py-1 inset-ring inset-ring-gray-950/8 dark:bg-white/5 dark:inset-ring-white/2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="-ml-0.5 size-4 fill-gray-600 dark:fill-gray-500"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd"></path></svg><kbd className="hidden font-sans text-xs/4 text-gray-500 dark:text-gray-400 [.os-macos_&amp;]:block">⌘K</kbd><kbd className="hidden font-sans text-xs/4 text-gray-500 not-[.os-macos_&amp;]:block dark:text-gray-400">Ctrl&nbsp;K</kbd></button> */}
                </div>
                <div className=" *:h-full flex items-center gap-2 bg-white/10 rounded-2xl px-1 ">
                    <ThemeBtn/>
                
                    <button onClick={()=>changeLang(i18n.language.startsWith('ar') ? 'en' : 'ar')} > {i18n.language.startsWith('ar') ? 'EN' : 'AR'} </button>
                </div>
                  <div className="*:h-full flex items-center gap-2">
                <span className={`  cursor-pointer md:hidden p-1 flex it `}>
                  <PiDotsThreeOutlineVertical size="24" className="" />
                </span>
                  </div>
              </div>
            </nav>
          </div>
        </div>
        {/* <div className=" h-14 inset-x-0 bg-black"></div> */}
        {/* <div className=" inset-0 pt-14 bg-white fixed top-0 "></div> */}

        <div className="      ">
          <div
            onClick={() => dispatch(menu(!mobileMenuOpen))}
            className={`fixed inset-x-0 h-screen bg-gray-950/30 ${!mobileMenuOpen && "hidden"
              } `}
          ></div>
        </div>
        <div
          className={`sm:max-w-xs fixed top-0 pt-12 z-10 bg-inherit ${i18n.language==="ar"?"translate-x-full":"-translate-x-full"}  w-full h-screen  transition-transform ease-out   duration-300
            ${mobileMenuOpen && "translate-x-0!"} `}
        >
          <div className="flex flex-col p-6 *:py-4p gap-4 property-bg overflow-hidden h-screen divide-y border-l border-y-gray-950/10 dark:border-white/10">

            <div className="  pb-4 ">
              <List lang={i18n.language} />
            </div>
            <div className="">
              login
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
