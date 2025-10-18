import heroAbout from "../../assets/images/heroAbout.png";

const HeroProcess = () => {
  return (
    <section className="bg-[#ffff] text-white w-full">
      <div>
        <img src={heroAbout} alt="img" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold leading-snug text-[#1A3129] font-urb text-center">
        Your Journey to Health and Wellness
      </h2>
      <p className="text-gray-800 leading-relaxed text-sm md:text-base font-urb text-center">
        At Nutritionist, we believe in providing a personalized and
        comprehensive approach to help you achieve your health and wellness
        goals. Our "How it Works" process is designed to guide you through each
        step of your journey, ensuring that you receive the support, knowledge,
        and tools you need to succeed. Here's a detailed breakdown of our
        process:
      </p>
    </section>
  );
};

export default HeroProcess;
