import { useDispatch, useSelector } from "react-redux";

import {  useEffect, useState } from "react";
import type { RootState } from "./Store";
import { filterOpen } from "../features/filter/Slice";

function Test() {
  const filter = useSelector((state:RootState) => state.filter.value);
  const [state, setstate] = useState(document.documentElement.scrollHeight);
  const [filterScreen, setFilterScreen] = useState(false);
  const dispatch = useDispatch()
  // window.addEventListener("scroll",()=>{
  //   const scrl=document.documentElement.scrollTop;
  //   setstate(document.documentElement.scrollTop);
  //   console.log(scrl);
  // })
  // const pTest="Print Test";

  useEffect(() => {
      if (filterScreen) {
        document.documentElement.classList.add("scrollbar-hidden");
        return; }
      document.documentElement.classList.remove("scrollbar-hidden");
    }, [filterScreen])

  const handleTest=()=>{
    // document.title="Test"
    // const con = prompt("Are You Sure?")
    // console.log(con);
    // window.open("google.com","_blank","width=400,height=400,left=200,top=300")
    const q= document.querySelector(".filter-content");
    q?.classList.add("blur-sm");
  }
  return (
    <>
      <div

        className="  bg-white drop-shadow-xl/10 drop-shadow-amber-500 fixed bottom-5 left-10 gap-2  text-red-500 flex justify-center items-center cursor-context-menu "
      >
        <button onClick={()=>dispatch(filterOpen())} className=" disabled:hover:bg  ">Test</button>
        <span   onClick={() => setstate(state + 1)} 
          className="shadow bg-white inset-shakdow-xs ring border border-gray-500 ring-yellow-500 inset-shadow-red-500 shadow-blue-500/40">
        {filter}-
        </span>
        <span className="size-7 bg-white border ring-green-500 ring inset-ring inset-ring-blue-500"></span>
      </div>
      <div style={{zIndex:99}} className={` ${filterScreen&&" hidden"} fixed top-0 w-full h-screen`}>
      <div onClick={()=>setFilterScreen(!filterScreen)} className=" absolute size-full bg-black/20 backdrop-blur-sm">
        <div onClick={} className=" size-10 bg-white"></div>
      </div>
          <div className=" w-2/3 h-2/4   m-auto property-bg">{filterScreen&& "true"}</div>
        </div>
    </>
  );
}

export default Test;
