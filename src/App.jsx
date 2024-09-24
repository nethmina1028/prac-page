import Navbar from "./components/Navbar";
import Hero from "./components/hero"
import Section from "./components/section"
import Section2 from "./components/section2";
import Footer from "./components/footer";
import { HiCheckCircle } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function App() {
 

  return (
    <>
     <div className="mx-6 lg:mx-10">
     <Navbar/>
      <Hero/>
      <Section/> 
      <Section2/>
      <Footer/>
     </div>
    </>
  )
}

export default App
