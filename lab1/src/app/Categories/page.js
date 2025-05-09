import Link from 'next/link';

export default function Categories() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-4">Categories</h2>
                <ul className="space-y-3">
                    <li>
                        <Link
                            href="/Categories/travel"
                            className="block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center"
                        >
                            Travel
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/Categories/health"
                            className="block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center"
                        >
                            Health
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/Categories/technology"
                            className="block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center"
                        >
                            Technology
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}