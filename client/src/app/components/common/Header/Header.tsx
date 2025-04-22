import Link from "next/link";

export default function PageHeader() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex gap-6 items-center">
      <div className="container mx-auto">
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
          All Teams
        </Link>
      </div>
    </nav>
  );
}
