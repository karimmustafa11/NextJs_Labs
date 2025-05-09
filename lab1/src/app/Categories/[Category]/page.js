import Link from "next/link";

const posts = [
    {
        id: 1,
        title: "Introduction to React",
        description: "React is a JavaScript library for building user interfaces...",
        slug: "react-intro",
        category: "technology"
    },
    {
        id: 2,
        title: "Staying Healthy in 2025",
        description: "Tips and tricks to stay in shape while working remotely...",
        slug: "health-2025",
        category: "health"
    },
    {
        id: 3,
        title: "Top Travel Destinations",
        description: "Explore the top destinations you should visit this year...",
        slug: "travel-top",
        category: "travel"
    }
];

export default function Category({ params }) {
    const { Category } = params;

    const filteredPosts = posts.filter(
        post => post.category === Category
    );

    if (filteredPosts.length === 0) {
      throw new Error(`No posts found for category: ${Category}`);
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 capitalize">{Category} Posts</h1>
            <div className="grid gap-4">
                {filteredPosts.map(post => (
                    <div key={post.id} className="p-4 border rounded-lg shadow hover:shadow-md transition">
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-600 mb-2">{post.description}</p>
                        <Link
                            href={`/posts/${post.slug}`}
                            className="text-blue-600 hover:underline"
                        >
                            Read more →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}