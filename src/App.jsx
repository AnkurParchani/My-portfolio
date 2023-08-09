import { Toaster } from "react-hot-toast";

import Greeting from "./components/features/greeting/Greeting";
import Particles from "./components/ui/Particles";
import Navigation from "./components/features/navbar/Navigation";
import Intro from "./components/features/intro/Intro";
import About from "./components/features/about/About";
import Work from "./components/features/work/Work";
import Contact from "./components/features/contact/Contact";
import Footer from "./components/ui/Footer";

export default function App() {
  return (
    <>
      {/* For Notifications */}
      <Toaster />

      {/* Navigation */}
      <Navigation />

      {/* Main components */}
      <Greeting />
      <Intro />
      <About />
      <Work />
      <Contact />

      {/* Footer including links */}
      <Footer />

      {/* Particlesjs for background */}
      <Particles />
    </>
  );
}
