import React from "react";
import LinkedInIcon from "../../assets/images/Linkedin.svg";
import facebookIcon from "../../assets/images/Facebook.svg";
import TwitterIcon from "../../assets/images/Twitter.svg";

const ContactForm: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fff] text-white px-4">
      <div className="w-full max-w-md bg-[#fff]/80 backdrop-blur-md rounded-2xl shadow-lg p-8 relative">
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Enter your First Name"
            className="  font-urb text-gray-800 w-full bg-[#fff] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="text"
            placeholder="Enter your Last Name"
            className="  font-urb text-gray-800  w-full bg-[#fff] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="text"
            placeholder="Enter your Phone Number"
            className="  font-urb text-gray-800 w-full bg-[#fff] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <textarea
            placeholder="Enter your Meesage"
            className="  font-urb text-gray-800 w-full bg-[#fff] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <button
            type="submit"
            className=" font-urb w-full bg-[#CBEA7B] text-black font-semibold rounded-full py-3 hover:bg-[#a4ef00] transition"
          >
            Send Message
          </button>
        </form>

        <div className="flex items-center justify-center gap-3 mt-8 mb-4">
          <div className="h-px w-1/3 bg-gray-700"></div>
          <p className=" font-urb text-gray-500 text-sm">or continue with</p>
          <div className="h-px w-1/3 bg-gray-700"></div>
        </div>

        <div className="flex justify-center gap-6">
          <button className="p-3 bg-[#fff] rounded-full hover:bg-[#b4ff00] hover:text-black transition">
            <img src={LinkedInIcon} alt="icon" />
          </button>
          <button className="p-3 bg-[#fff] rounded-full hover:bg-[#b4ff00] hover:text-black transition">
            <img src={facebookIcon} alt="icon" />
          </button>
          <button className="p-3 bg-[#fff] rounded-full hover:bg-[#b4ff00] hover:text-black transition">
            <img src={TwitterIcon} alt="icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
