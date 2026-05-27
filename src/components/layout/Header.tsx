export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 ml-64">
      <div className="flex items-center justify-between w-full">
        <input type="text" placeholder="Buscar..." className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">🔔<span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span></button>
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
            <span className="text-gray-700 font-medium">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
