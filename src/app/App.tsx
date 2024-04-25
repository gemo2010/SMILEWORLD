import { Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import Contact from "./screens/contact/Contact";
import Header from "./components/header/Header";
import Doctor from "./screens/doctor/Doctor";
import Services from "./screens/services/Services";
import SucessStories from "./screens/successstories/SuccessStories";
import AOS from "aos";
import { Hidden } from "@mui/material";
import SmallHeader from "./components/smallheader/SmallHeader";
import Booking from "./screens/booking/Booking";
import "aos/dist/aos.css";
import "./styles/styles.css";

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 1000,
  easing: "ease",
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom",
});

function App() {
  return (
    <div>
      <Hidden mdDown>
        <Header />
      </Hidden>
      <Hidden mdUp>
        <SmallHeader />
      </Hidden>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/success-stories" element={<SucessStories />} />
      </Routes>
    </div>
  );
}

export default App;
