import logo from "../../assets/react.svg";

const Header = () => {
  return (
    <header>
      <div className="flex items-center gap-4 bg-blue-500 p-2">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <p className="text-2xl font-bold text-white">Luchito diaz</p>
      </div>
    </header>
  );
};

export default Header;
