import heroAbout from "../../assets/images/heroAbout.png";

const HeroPrice = () => {
  return (
    <section className="bg-[#ffff] text-white w-full">
      <div>
        <img src={heroAbout} alt="img" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold leading-snug text-[#1A3129] font-urb text-center">
        Our Pricing
      </h2>
      <p className="text-gray-800 leading-relaxed text-sm md:text-base font-urb text-center">
        At Nutritionist, we offer flexible pricing options to accommodate your
        unique requirements and budget. Our goal is to provide you with
        exceptional personalized nutrition coaching that is accessible and
        tailored to your needs. Choose from our three plans below and take the
        first step towards a healthier lifestyle
      </p>
    </section>
  );
};

export default HeroPrice;
