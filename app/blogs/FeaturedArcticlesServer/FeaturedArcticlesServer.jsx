import { getFeaturedPosts } from "./getFeaturedPosts";
import FeaturedArticles from "../FeaturedArticles/FeaturedArticles";

export default async function FeaturedArticlesServer() {
  const posts = await getFeaturedPosts()

  const cards = posts.map((post) => ({

    
    id: post.id,
    slug: post.slug,
    description: post.title.rendered,
    category: post._embedded?.['wp:term']?.[0]?.[0]?.name ?? 'Blog',
    date: post.date
  }));

  // console.log("Mapped featured article cards:", cards);

  return <FeaturedArticles cards={cards} />;
}
