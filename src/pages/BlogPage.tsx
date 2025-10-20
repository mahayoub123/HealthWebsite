import Blogs from "../components/Blogs/Blogs";
import Footer from "../components/Footer/Footer";
import HeroBlog from "../components/HeroBlog/HeroBlog";
import NavBar from "../components/NavBar/NavBar";

const BlogPage = () => {
  return (
    <div>
      <NavBar />
      <HeroBlog />
      <Blogs />
      <Footer />
    </div>
  );
};

export default BlogPage;
