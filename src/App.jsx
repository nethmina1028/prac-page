import Navbar from "./components/Navbar";
import Hero from "./components/hero"

import Section from "./components/section"
import Section2 from "./components/section2";
import { HiCheckCircle } from "react-icons/hi";
function App() {
 

  return (
    <>
     <div className="mx-6 lg:mx-10">
     <Navbar/>
      <Hero/>
    
      <Section/> 
      <Section2/>
     </div>
    </>
  )
}

export default App
