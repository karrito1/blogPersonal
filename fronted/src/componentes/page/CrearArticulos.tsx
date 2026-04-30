import useFormulario from "../../hooks/useFormulario";

const CrearArticulo = () => {
  const { form, cambiado, limpiarFormulario } = useFormulario({
    titulo: "",
    contenido: "",
    fecha: "",
    imagen: "",
  });

  const guardar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/articulo/crearArticulo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      if (!response.ok) {
        throw new Error("Error al crear artículo");
      }

      const data = await response.json();
      console.log("Artículo creado:", data);

      limpiarFormulario();
      alert("Artículo creado correctamente");
    } catch (error) {
      console.error("Error:", error);
      alert("Error al crear artículo");
    }
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Formulario de registro</legend>

        <form onSubmit={guardar} className="flex flex-col gap-2 m-10">
          {/* TÍTULO */}
          <label className="label">Título</label>
          <input
            type="text"
            className="input input-bordered w-full"
            onChange={cambiado}
            name="titulo"
            placeholder="Título del artículo"
          />

          {/* CONTENIDO */}
          <label className="label">Contenido</label>
          <input
            type="text"
            className="input input-bordered w-full"
            onChange={cambiado}
            name="contenido"
            placeholder="Contenido del artículo"
          />

          {/* FECHA */}
          <label className="label">Fecha</label>
          <input
            type="date"
            className="input input-bordered w-full"
            onChange={cambiado}
            name="fecha"
          />

          {/* IMAGEN (RUTA o URL) */}
          <label className="label">Imagen</label>
          <input
            type="text"
            className="input input-bordered w-full"
            onChange={cambiado}
            name="imagen"
            placeholder="/uploads/foto.jpg o URL"
          />

          {/* BOTÓN */}
          <button className="btn btn-primary mt-4 w-full">
            Crear Artículo
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default CrearArticulo;
