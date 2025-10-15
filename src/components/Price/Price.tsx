import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Price: React.FC = () => {
  const price = useSelector((state: RootState) => state.price);

  return (
    <section className="bg-[#fff] text-gray-800 py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-urb text-3xl md:text-4xl font-bold text-[#262626]">
          Our Pricing
        </h2>
        <p className="font-urb mt-3 text-gray-800 max-w-3xl mx-auto">
          We outline our flexible and affordable options to support you on your
          journey to optimal health and nutrition. We believe that everyone
          deserves access to personalized nutrition guidance and resources
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {price.map((price) => (
          <div
            key={price.id}
            className="bg-[#fff] border-gray-200 p-6 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-urb text-lg font-semibold">{price.title}</h3>
            </div>
            <p className="text-gray-800 text-sm font-urb">{price.desc}</p>
            <div>
              <span className="font-urb text-[#2C5446] text-6xl">
                {price.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Price;
