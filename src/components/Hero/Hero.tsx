import React from "react";
import heroImg from "../../assets/images/hero.png";

const Hero: React.FC = () => {
  return (
    <section className="bg-[#ffff] text-white w-full">
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug text-[#1A3129] font-urb">
            Personalized Nutrition Coaching
          </h1>
          <p className="text-gray-800 leading-relaxed text-sm md:text-base font-urb">
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified nutritionists
            are here to guide you on your weight loss journey, providing
            customized plans and ongoing support. Start your transformation
            today and experience the power of personalized nutrition coaching.
          </p>
        </div>

        <div className="flex justify-center relative">
          <img
            src={heroImg}
            alt="Hero Careers"
            className="w-full max-w-lg rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
