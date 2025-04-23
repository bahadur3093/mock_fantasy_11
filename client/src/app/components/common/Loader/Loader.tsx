export default function Loader() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        <p className="text-gray-600 font-medium text-sm">Loading...</p>
      </div>
    </div>
  );
}
