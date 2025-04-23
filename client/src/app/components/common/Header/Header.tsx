import Link from "next/link";

export default function PageHeader() {
  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 bg-white shadow-lg border border-gray-200 rounded-2xl px-4 py-2 flex items-center space-x-4 z-50">
      <div className="max-w-4xl mx-auto p-2 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold hover:text-blue-600 transition mr-2"
        >
          Home
        </Link>
        <Link
          href="/teams"
          className="text-lg font-semibold hover:text-blue-600 transition"
        >
          Teams
        </Link>
      </div>
    </nav>
  );
}
