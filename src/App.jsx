import Navbar from "./components/Navbar";
import Hero from "./components/hero"
import Section from "./components/section"
import { HiCheckCircle } from "react-icons/hi";
function App() {
 

  return (
    <>
     <div className="mx-6 lg:mx-10">
     <Navbar/>
      <Hero/>
      <Section/> 
     </div>
    </>
  )
}

export default App
