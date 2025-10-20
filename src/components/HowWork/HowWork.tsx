import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const HowWork: React.FC = () => {
  const how = useSelector((state: RootState) => state.how);

  return (
    <section className="bg-[#fff] text-gray-800 py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-urb text-3xl md:text-4xl font-bold text-[#262626]">
          How It Works
        </h2>
        <p className="font-urb mt-3 text-gray-800 max-w-3xl mx-auto">
          We provide a step-by-step guide on how to get started on your journey
          towards better health and nutrition. We are here to simplify the
          process and make it easy for you to navigate our platform and access
          the resources you need to achieve your goals. Here's how it works
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {how.map((how) => (
          <div
            key={how.id}
            className="bg-[#fff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={how.image}
                  alt={how.title}
                  className="w-[68px] h-[68px] object-contain "
                />
                <h3 className="font-urb text-lg font-semibold">{how.title}</h3>
              </div>

              <p className="text-gray-800 text-sm font-urb">{how.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWork;
