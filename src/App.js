import "./index.css";
import Navbars from './components/Nav/Navbars';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Process from "./components/Process/Process";
import Appointment from "./components/Appointment/Appointment";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";



const App = () => {
  return (
  <>
    <Navbars         />
    <Header          />
    <About           />
    <Process         />
    <Appointment     />
    <Services        />
    <Testimonials    />
    <News            />
    <Footer          />
  </>
  )
}

export default App