export async function getPostBySlug(slug) {
  const res = await fetch(
    `https://lightgoldenrodyellow-wasp-126965.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog post");
  }

  const posts = await res.json();

//   console.log("WP POSTS RESPONSE:", posts);

  // WordPress returns an array, even for a single slug
  return posts[0] || null;
}
