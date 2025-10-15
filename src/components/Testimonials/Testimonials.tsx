import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Testimonials: React.FC = () => {
  const blog = useSelector((state: RootState) => state.test);

  return (
    <section className="bg-[#fff] text-gray-800 py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-urb text-3xl md:text-4xl font-bold text-[#262626]">
          Our Testimonials
        </h2>
        <p className="font-urb mt-3 text-gray-800 max-w-3xl mx-auto">
          Our satisfied clients share their success stories and experiences on
          their journey to better health and well-being.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {blog.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#fff] border-gray-200 p-6 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <p className="text-gray-800 text-sm font-urb">{blog.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
