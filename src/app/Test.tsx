import { useEffect, useState } from "react";
import Overlay from "../components/Overlay/Overlay";
import ThemeBtn from "../features/theme/ThemeBtn";
function Test() {
  const [isOpen, setIsOpen] = useState(false);
  //   const [atTop, setAtTop] = useState(true);
    const [size,setSize]=useState(0);
    useEffect(() => {
      let ticking = false;
      const onResize = () => {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(() => {
            setSize(window.innerWidth);
            // console.log("scrolling-Test"+atTop);
            ticking = false;
          });
        }
      };
      onResize();
      window.addEventListener("resize", onResize, { passive: true });
      return () => window.removeEventListener("scroll", onResize as EventListener);
    }, []);
    // console.log(atTop);
  return (
    <>
      <div className="fixed bottom-5  left-10 flex gap-2">
        <button onClick={() => setIsOpen(true)}>Open Overlay</button>
        <div className="">{size}</div>
        <div className=" bg-rd-500 min-w-36 ">

       <ThemeBtn />
        </div>
      </div>
      {isOpen && <Overlay onClose={() => setIsOpen(false)} isOpen={isOpen} children={undefined} />}
    </>
  );
}

export default Test;


