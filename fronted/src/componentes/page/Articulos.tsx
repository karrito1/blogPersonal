import { useState, useEffect } from "react";

interface Articulo {
  id: number;
  titulo: string;
  contenido: string;
  fecha: Date;
  imagen: string;
}

const API = "https://blogpersonal-3zgi.onrender.com";

const Articulos = () => {
  const [articulos, setArticulos] = useState<Articulo[]>([]);

  useEffect(() => {
    consumirApi();
  }, []);

  async function consumirApi() {
    try {
      const response = await fetch(`${API}/api/articulo/listarTodos`);

      if (!response.ok) {
        throw new Error("Error en la API");
      }

      const datos = await response.json();
      setArticulos(datos.results);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function eliminarArticulo(id: number) {
    const confirmar = window.confirm(
      "¿Seguro que quieres eliminar este artículo?",
    );
    if (!confirmar) return;

    try {
      const response = await fetch(`${API}/api/articulo/eliminarId/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar");
      }

      setArticulos((prev) => prev.filter((art) => art.id !== id));
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-center mt-8 gap-4">
      {articulos.length >= 1 ? (
        articulos.map((articulo) => (
          <div className="card bg-base-100 w-96 shadow-sm" key={articulo.id}>
            <figure>
              <img
                src="https://images.pexels.com/photos/23180910/pexels-photo-23180910.jpeg"
                alt="img"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{articulo.titulo}</h2>
              <p>{articulo.contenido}</p>

              <div className="badge badge-outline">
                {new Date(articulo.fecha).toLocaleDateString("es-ES")}
              </div>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600"
                onClick={() => eliminarArticulo(articulo.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-2xl font-bold text-center mt-8">
          No hay artículos disponibles
        </h1>
      )}
    </div>
  );
};

export default Articulos;
