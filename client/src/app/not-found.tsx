import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-bounce">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <p className="text-gray-500 mb-6">
          But don&apos;t worry, you can always find your way back!
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition transform hover:scale-105"
        >
          Go back home
        </Link>
        <div className="mt-8">
          <p className="text-gray-500 mb-2">Or try one of these:</p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/games"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition transform hover:scale-105"
            >
              Games
            </Link>
            <Link
              href="/season"
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition transform hover:scale-105"
            >
              Season
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
