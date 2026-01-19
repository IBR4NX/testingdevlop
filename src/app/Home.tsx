import type { RootState } from "./Store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
// import { useEffect, useRef } from "react";
export default function Home() {
  // const [test, setTest] = useState(false);
  const count = useSelector((state:RootState) => state.counter.value)
  const dispatch = useDispatch();
  // useEffect(() => {
  //   // console.log("ef");
  //   return () => {};
  // }, []);
  //   console.log(state.counter);
  // });
  // const dispatch = useDispatch();
  // console.log(m.x);
// console.log(count);
  return (
    <>
    <div className=" text-6xl h-screen px-10">
    <h1 className='    ' > Home </h1>
    <div className=" *:size-10 ">
      <span>{count}</span>
      <button onClick={()=>dispatch(increment())} >+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>

      </div>
    </div>
    </>
    
  )
}