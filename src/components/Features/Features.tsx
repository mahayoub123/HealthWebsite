import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Features: React.FC = () => {
  const feature = useSelector((state: RootState) => state.features);

  return (
    <section className="bg-[#fff] text-gray-800 py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-urb text-3xl md:text-4xl font-bold text-[#262626]">
          Features
        </h2>
        <p className="font-urb mt-3 text-gray-800 max-w-3xl mx-auto">
          Welcome to the Feature Section of Nutritionist, your ultimate
          destination for all things nutrition and wellness.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {feature.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#fff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-[68px] h-[68px] object-contain"
                />
                <h3 className="font-urb text-lg font-semibold">
                  {feature.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm font-urb">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
