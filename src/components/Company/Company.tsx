import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Company: React.FC = () => {
  const company = useSelector((state: RootState) => state.company);

  return (
    <section className="bg-[#fff] text-gray-800 py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-urb text-3xl md:text-4xl font-bold text-[#262626]">
          Company Achievements
        </h2>
        <p className="font-urb mt-3 text-gray-800 max-w-3xl mx-auto">
          At Nutritionist, we take pride in our accomplishments and the positive
          impact we have made on the lives of our clients. Here are some of our
          notable achievements
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {company.map((company) => (
          <div
            key={company.id}
            className="bg-[#fff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={company.image}
                  alt={company.title}
                  className="w-[68px] h-[68px] object-contain "
                />
                <h3 className="font-urb text-lg font-semibold">
                  {company.title}
                </h3>
              </div>

              <p className="text-gray-800 text-sm font-urb">{company.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Company;
