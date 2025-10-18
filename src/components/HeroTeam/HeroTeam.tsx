import heroAbout from "../../assets/images/heroAbout.png";

const HeroTeam = () => {
  return (
    <section className="bg-[#ffff] text-white w-full">
      <div>
        <img src={heroAbout} alt="img" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold leading-snug text-[#1A3129] font-urb text-center">
        Meet Our Team of Experts
      </h2>
      <p className="text-gray-800 leading-relaxed text-sm md:text-base font-urb text-center">
        Our team at Nutritionist is composed of highly skilled professionals who
        are passionate about helping you achieve your health and wellness goals.
        With a diverse range of expertise in nutrition, coaching, and support,
        our team is dedicated to providing you with the guidance and
        personalized care you need. Get to know the experts behind our success
        and discover how they can make a positive impact on your journey to
        better health.
      </p>
    </section>
  );
};

export default HeroTeam;
