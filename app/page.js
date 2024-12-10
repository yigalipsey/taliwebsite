import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import ServicesSection from "./components/ServicesSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <ServicesSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
