//crea una constante cone l puerto local o el asignado en
// las variables globales de la aplicacion
import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
