import Navbar from "./components/navbar";
import Hero from "./components/hero"

import Section from "./components/section"
import Section2 from "./components/section2";
import Socialproof from "./components/Socialproof";
import Testimonials from "./components/testimonials";
import { HiCheckCircle } from "react-icons/hi";
function App() {
 

  return (
    <>
     <div className="mx-6 lg:mx-10">
     <Navbar/>
      <Hero/>
    
      <Section/> 
      <Section2/>
      <Socialproof/>
      <Testimonials/>
     </div>
    </>
  )
}

export default App
