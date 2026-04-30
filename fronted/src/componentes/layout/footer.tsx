import logo from "../../assets/icono.webp";
import logo2 from "../../assets/images.webp";
const Footer = () => {
  return (
    <footer className="flex items-center gap-4 bg-gray-800 p-4 text-white justify-center">
      <div className="flex items-center gap-4 bg-blue-500 p-2">
        <p className="text-2xl font-bold text-white">
          Gol minuto 68 Bayer vs PSG
          <br /> &copy; 2026 Luchito diaz
        </p>
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <img src={logo2} alt="Logo2" className="h-10 w-10" />
        <p className="text-2xl font-bold text-white">Luchito diaz</p>
      </div>
    </footer>
  );
};

export default Footer;
