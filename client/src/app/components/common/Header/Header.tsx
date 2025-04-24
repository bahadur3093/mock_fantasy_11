import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";

export default function PageHeader() {
  return (
    <div className="sticky top-0 bg-white z-50 shadow-md">
      <div className="container mx-auto">
        <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition"
            >
              Teams
            </Link>
            <Link
              href="/players"
              className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition"
            >
              Players
            </Link>
            <Link
              href="/games"
              className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition"
            >
              Games
            </Link>
            <Link
              href="/season"
              className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition"
            >
              Season
            </Link>
            <Link
              href="/standings"
              className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition"
            >
              Standing
            </Link>
          </div>
          <div className="flex items-center">
            <SearchBar />
          </div>
        </nav>
      </div>
    </div>
  );
}
