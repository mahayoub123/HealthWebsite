import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Blogs: React.FC = () => {
  const blog = useSelector((state: RootState) => state.blogs);

  return (
    <section className="bg-[#fff] text-gray-800 py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-urb text-3xl md:text-4xl font-bold text-[#262626]">
          Our Blogs
        </h2>
        <p className="font-urb mt-3 text-gray-800 max-w-3xl mx-auto">
          Our blog is a treasure trove of informative and engaging articles
          written by our team of nutritionists, dietitians, and wellness
          experts. Here's what you can expect from our blog.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blog.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#fff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-[703px] h-[428px] object-contain"
            />
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-urb text-lg font-semibold">{blog.title}</h3>
              </div>

              <p className="text-gray-800 text-sm font-urb">{blog.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
