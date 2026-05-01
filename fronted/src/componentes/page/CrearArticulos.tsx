import useFormulario from "../../hooks/useFormulario";

const API = "https://blogpersonal-3zgi.onrender.com";

const CrearArticulo = () => {
  const { form, cambiado, limpiarFormulario } = useFormulario({
    titulo: "",
    contenido: "",
    fecha: "",
    imagen: "",
  });

  const guardar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //  Validación básica
    if (!form.titulo || !form.contenido) {
      alert("Completa los campos");
      return;
    }

    try {
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

      //  Leer respuesta
      const data = await response.json();
      console.log(data);

      limpiarFormulario();
      alert("Artículo creado correctamente");
    } catch (error) {
      console.error(error);
      alert("Error en la conexión");
    }
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <form onSubmit={guardar} className="flex flex-col gap-2">
        <input type="text" name="titulo" placeholder="Título" onChange={cambiado} />
        <input type="text" name="contenido" placeholder="Contenido" onChange={cambiado} />
        <input type="date" name="fecha" onChange={cambiado} />
        <input type="text" name="imagen" placeholder="URL imagen" onChange={cambiado} />

        <button>Crear Artículo</button>
      </form>
    </div>
  );
};

export default CrearArticulo;