import Footr from './components/footr/footr';
import { useState } from 'react'
import './App.css'
function childrenCorner(index : {index:number} ){
console.log(index);
const count = 1;
return <p>children corner {count}</p>;
}
function App() {
  const [count, setCount] = useState(0)
  console.log("sss");
  return (
    <>
      <div className="bg-amber-300 hover:translate-x-1/4 hover:bg-red-600 duration-500 transition-transform" >
        
        app
      </div>
      <Footr />

      
      {Array.from( { length: 10 }).map((_, index) => (
<childrenCorner index={index} />

     ))}
    <p>test</p>
    </>
  )
}

export default App
