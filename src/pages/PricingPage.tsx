import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import HeroPrice from "../components/HeroPrice/HeroPrice";
import NavBar from "../components/NavBar/NavBar";
import Price from "../components/Price/Price";

const PricingPage = () => {
  return (
    <div>
      <NavBar />
      <HeroPrice />
      <Price />
      <FAQ />
      <Footer />
    </div>
  );
};

export default PricingPage;
