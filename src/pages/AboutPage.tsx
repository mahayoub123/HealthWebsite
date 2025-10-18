import Company from "../components/Company/Company";
import Footer from "../components/Footer/Footer";
import HeroAbout from "../components/HeroAbout/HeroAbout";
import NavBar from "../components/NavBar/NavBar";

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <HeroAbout />
      <Company />
      <Footer />
    </div>
  );
};

export default AboutPage;
