import BlogMatter from "./BlogMatters/BlogMatter";
import FeaturedArticles from "./FeaturedArticles/FeaturedArticles";
import Featuredproducts from "./Featuredproducts/Featuredproducts";
import BlogHero from "./Hero/BlogHero";


export default function Blog() {
  return (
    <>
    <BlogHero />
    <Featuredproducts />
    <FeaturedArticles />
    <BlogMatter />
    </>
  );
}
