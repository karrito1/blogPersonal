import useFormulario from "../../hooks/useFormulario";

const API = "https://blogpersonal-1-os0b.onrender.com/";

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
      const response = await fetch(`${API}/api/articulo/crearArticulo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

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
          <label className="label">Título</label>
          <input
            type="text"
            className="input input-bordered w-full"
            onChange={cambiado}
            name="titulo"
          />

          <label className="label">Contenido</label>
          <input
            type="text"
            className="input input-bordered w-full"
            onChange={cambiado}
            name="contenido"
          />

          <label className="label">Fecha</label>
          <input
            type="date"
            className="input input-bordered w-full"
            onChange={cambiado}
            name="fecha"
          />

          <label className="label">Imagen</label>
          <input
            type="text"
            className="input input-bordered w-full"
            onChange={cambiado}
            name="imagen"
          />

          <button className="btn btn-primary mt-4 w-full">
            Crear Artículo
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default CrearArticulo;
