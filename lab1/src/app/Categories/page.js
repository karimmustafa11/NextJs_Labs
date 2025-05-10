import Link from 'next/link';

export default async function CategoriesPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <ul className="grid gap-3">
                {users.map(user => (
                    <li key={user.id}>
                        <Link href={`/Categories/${user.id}`}>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">
                                {user.name}
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
