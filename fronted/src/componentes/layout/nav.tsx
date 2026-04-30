import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (<>
  
    <nav className="flex justify-center  p-4 bg-gray-800 text-white">
      <ul className="flex gap-4">
        <li>
          <NavLink to="/" className="hover:text-gray-300">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/articulos" className="hover:text-gray-300">
            Artículos
          </NavLink>
        </li>
        <li>
          <NavLink to="/creararticulos" className="hover:text-gray-300">
            Crear Artículo
          </NavLink>
        </li>
      </ul>
    </nav>
  </>);
};

export default Navbar;
