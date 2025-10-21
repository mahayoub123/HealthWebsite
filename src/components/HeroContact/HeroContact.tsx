import heroAbout from "../../assets/images/heroAbout.png";

const HeroContact = () => {
  return (
    <section className="bg-[#ffff] text-white w-full">
      <div>
        <img src={heroAbout} alt="img" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold leading-snug text-[#1A3129] font-urb text-center">
        Contact Us
      </h2>
      <p className="text-gray-800 leading-relaxed text-sm md:text-base font-urb text-center">
        We value your feedback, questions, and concerns at Nutritionist. Our
        dedicated team is here to assist you and provide the support you need on
        your nutritional journey. Please don't hesitate to reach out to us using
        any of the following contact methods
      </p>
    </section>
  );
};

export default HeroContact;
