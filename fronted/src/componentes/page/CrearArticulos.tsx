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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={guardar}
        className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Crear Artículo
        </h2>

        {/* Título */}
        <div>
          <label className="text-sm font-medium text-gray-600">Título</label>
          <input
            type="text"
            name="titulo"
            onChange={cambiado}
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Escribe el título"
          />
        </div>

        {/* Contenido */}
        <div>
          <label className="text-sm font-medium text-gray-600">Contenido</label>
          <textarea
            name="contenido"
            onChange={cambiado}
            rows={4}
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Escribe el contenido"
          />
        </div>

        {/* Fecha */}
        <div>
          <label className="text-sm font-medium text-gray-600">Fecha</label>
          <input
            type="date"
            name="fecha"
            onChange={cambiado}
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Imagen */}
        <div>
          <label className="text-sm font-medium text-gray-600">Imagen (URL)</label>
          <input
            type="text"
            name="imagen"
            onChange={cambiado}
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://..."
          />
        </div>

        {/* Botón */}
        <button
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Creando..." : "Crear Artículo"}
        </button>
      </form>
    </div>
  );
};

export default CrearArticulo;