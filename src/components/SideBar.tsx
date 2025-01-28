import { useState } from 'react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className={`h-screen ${isExpanded ? 'w-64' : 'w-16'} bg-gray-100 text-black transition-all duration-300`}>
      <div className="flex items-center justify-between p-4">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none"
        >
          <span className="text-2xl">&#9776;</span> {/* Ícone sanduíche */}
        </button>
        <span className={`ml-2 font-bold ${isExpanded ? 'block' : 'hidden'}`}>Caderno de Português</span>
      </div>
      <nav className={`mt-4 ${isExpanded ? 'block' : 'hidden'}`}>
        <ul>
          <li className="p-2 hover:bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 rounded">Literatura Moderna</li>
          <li className="p-2 hover:bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 rounded">Literatura Clássica</li>
          <li className="p-2 hover:bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 rounded">Literatura Barroca</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
