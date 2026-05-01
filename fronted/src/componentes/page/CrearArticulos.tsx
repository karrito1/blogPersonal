import { useState } from "react";
import useFormulario from "../../hooks/useFormulario";

const API = "https://blogpersonal-3zgi.onrender.com";

const CrearArticulo = () => {
  const { form, cambiado, limpiarFormulario } = useFormulario({
    titulo: "",
    contenido: "",
    fecha: "",
    imagen: "",
  });

  const [loading, setLoading] = useState(false);

  const guardar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.titulo || !form.contenido) {
      alert("Completa los campos obligatorios");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API}/api/articulo/crearArticulo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        alert("Error al crear artículo");
        return;
      }

      await response.json();

      limpiarFormulario();
      alert("Artículo creado correctamente");
    } catch (error) {
      console.error(error);
      alert("Error en la conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <form
        onSubmit={guardar}
        className="w-full max-w-lg bg-zinc-900 p-6 rounded-2xl shadow-xl flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-white">
          Crear Artículo
        </h2>

        {/* Título */}
        <div>
          <label className="text-sm font-medium text-gray-300">Título</label>
          <input
            type="text"
            name="titulo"
            onChange={cambiado}
            className="w-full mt-1 p-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Escribe el título"
          />
        </div>

        {/* Contenido */}
        <div>
          <label className="text-sm font-medium text-gray-300">Contenido</label>
          <textarea
            name="contenido"
            onChange={cambiado}
            rows={4}
            className="w-full mt-1 p-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Escribe el contenido"
          />
        </div>

        {/* Fecha */}
        <div>
          <label className="text-sm font-medium text-gray-300">Fecha</label>
          <input
            type="date"
            name="fecha"
            onChange={cambiado}
            className="w-full mt-1 p-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Imagen */}
        <div>
          <label className="text-sm font-medium text-gray-300">Imagen</label>
          <input
            type="text"
            name="imagen"
            onChange={cambiado}
            className="w-full mt-1 p-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="URL de la imagen"
          />
        </div>

        {/* Botón */}
        <button
          disabled={loading}
          className="bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition disabled:opacity-50"
        >
          {loading ? "Creando..." : "Crear Artículo"}
        </button>
      </form>
    </div>
  );
};

export default CrearArticulo;
