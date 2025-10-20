import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const FAQ: React.FC = () => {
  const faq = useSelector((state: RootState) => state.faq);

  return (
    <section className="bg-[#fff] text-gray-800 py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-urb text-3xl md:text-4xl font-bold text-[#262626]">
          FAQ
        </h2>
        <p className="font-urb mt-3 text-gray-800 max-w-3xl mx-auto">
          We address commonly asked questions and provide comprehensive answers
          to help you navigate your way through your nutrition and wellness
          journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {faq.map((faq) => (
          <div
            key={faq.id}
            className="bg-[#fff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-urb text-lg font-semibold">
                  {faq.question}
                </h3>
              </div>

              <p className="text-gray-800 text-sm font-urb">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
