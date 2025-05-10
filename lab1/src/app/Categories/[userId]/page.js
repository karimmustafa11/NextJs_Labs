import Link from "next/link";

export default async function UserPosts({ params }) {
    const { userId } = params;
    console.log(`Fetching posts for user ID: ${userId}`);

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await res.json();

        return (
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Posts by User {userId}</h1>
                <ul className="grid gap-4">
                    {posts.map(post => (
                        <li key={post.id} className="border p-4 rounded">
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <p>{post.body.slice(0, 100)}...</p>
                            <Link href={`/posts/${post.id}`} className="text-blue-600 hover:underline">
                                Read more →
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } catch (error) {
        return <div className="text-red-600">Error fetching posts for user {userId}</div>;
    }
}
