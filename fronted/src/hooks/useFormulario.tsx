import { useState } from "react";

const useFormulario = <T extends object>(valoresIniciales: T) => {
  const [form, setForm] = useState<T>(valoresIniciales);

  const cambiado = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement;

    if (target.type === "file") {
      const files = target.files;

      setForm({
        ...form,
        [target.name]: files ? files[0] : null,
      });
    } else {
      setForm({
        ...form,
        [target.name]: target.value,
      });
    }
  };

  const limpiarFormulario = () => {
    setForm(valoresIniciales);
  };

  return {
    form,
    cambiado,
    limpiarFormulario,
  };
};

export default useFormulario;
