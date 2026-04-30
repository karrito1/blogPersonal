import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "../componentes/layout/header";
import Navbar from "../componentes/layout/nav";
import SideBar from "../componentes/layout/sider";
import Articulos from "../componentes/page/Articulos";
import CrearArticulo from "../componentes/page/CrearArticulos";
import Footer from "../componentes/layout/footer";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        {/*layout*/}

        <Header></Header>
        <Navbar></Navbar>
        {/*constendio del sitio*/}

        <section className="flex flex-row flex-wrap h-auto p-2">
          <article className="flex flex-wrap flex-col basis-3/4 ">
            <Routes>
              <Route path="/" element={<Articulos />} />
              <Route path="/articulos" element={<Articulos />} />
              <Route path="/creararticulos" element={<CrearArticulo />} />
            </Routes>
          </article>
          <SideBar></SideBar>
        </section>
        <Footer></Footer>

        {/*constendio del sitio */}
      </BrowserRouter>
    </>
  );
};

export default Rutas;
