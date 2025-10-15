import Blogs from "../components/Blogs/Blogs";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import Price from "../components/Price/Price";
import Testimonials from "../components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Blogs />
      <Testimonials />
      <Price />
      <Footer />
    </div>
  );
};

export default HomePage;
