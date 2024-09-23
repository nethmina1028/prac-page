import Navbar from "./components/navbar";
import Hero from "./components/hero"
import Section from "./components/section"
import Socialproof from "./components/Socialproof"
import { HiCheckCircle } from "react-icons/hi";
function App() {
 

  return (
    <>
     <div className="mx-6 lg:mx-10">
     <Navbar/>
      <Hero/>
      <Section/> 
      <Socialproof/>
     </div>
    </>
  )
}

export default App
