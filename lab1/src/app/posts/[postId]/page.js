export default async function PostPage({ params }) {
    const { postId } = params;

    try {
        const [postRes, commentsRes] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        ]);

        const post = await postRes.json();
        const comments = await commentsRes.json();

        return (
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <p className="mb-6">{post.body}</p>

                <h2 className="text-2xl font-semibold mb-2">Comments</h2>
                <ul className="space-y-3">
                    {comments.map(comment => (
                        <li key={comment.id} className="bg-gray-100 p-3 rounded">
                            <p className="font-semibold">{comment.name}</p>
                            <p className="text-sm">{comment.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } catch (error) {
        return <div className="text-red-600">Failed to load post or comments.</div>;
    }
}
