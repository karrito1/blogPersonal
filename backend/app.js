import express from "express";
import cors from "cors";
import articulosCTR from "./src/routes/articulosRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("API Encendida");
});

// Rutas correctamente montadas
app.use("/api", articulosCTR);

export default app;
