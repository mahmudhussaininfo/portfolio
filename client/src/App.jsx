import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Qualification from "./Pages/Qualification/Qualification";
import Testimonial from "./Pages/Testimonial/Testimonial";
import WorkExperience from "./Pages/Work/WorkExperience";
import Layout from "./components/Layout/Layout";
import MobileNav from "./components/MobileNav/MobileNav";
import TechStack from "./components/Techstack/TechStack";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <MobileNav />
      <Layout />
      <Home />
      <About />
      <TechStack />
      <WorkExperience />
      <Qualification />
      <Contact />
      <ToastContainer position="bottom-center" theme="dark" />
    </>
  );
}

export default App;
