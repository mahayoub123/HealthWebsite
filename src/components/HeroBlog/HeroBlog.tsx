import heroAbout from "../../assets/images/heroAbout.png";

const HeroBlog = () => {
  return (
    <section className="bg-[#ffff] text-white w-full">
      <div>
        <img src={heroAbout} alt="img" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold leading-snug text-[#1A3129] font-urb text-center">
        Our Blogs
      </h2>
      <p className="text-gray-800 leading-relaxed text-sm md:text-base font-urb text-center">
        Welcome to the Blog section of Nutritionist, your trusted source for
        insightful articles, tips, and expert advice on nutrition and wellness.
        Here, we strive to provide you with engaging and informative content
        that will inspire and empower you to make informed decisions about your
        health. Explore our blog to discover a wealth of resources that cover a
        wide range of topics related to nutrition, fitness, and overall
        well-being.
      </p>
    </section>
  );
};

export default HeroBlog;
