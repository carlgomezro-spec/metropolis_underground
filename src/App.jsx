import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Features from "./components/Features/Features.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Highlights from "./components/Highlights/Highlights.jsx"; 
import Footer from "./components/Footer/Footer.jsx";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Highlights/>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
