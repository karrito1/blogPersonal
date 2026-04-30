// las rutas del modulo paciente

import { Router } from "express";
import * as articulosP from "../controllers/articulo.controller.js";

const router = Router();

// Obtener todos los articulos
router.get("/articulo/listarTodos", articulosP.getArticulos);

// Obtener articulo por ID
router.get("/articulo/listarId/:id", articulosP.getArticuloId);

// Crear articulo
router.post("/articulo/crearArticulo", articulosP.createArticulo);

// Eliminar articulo por ID
router.delete("/articulo/eliminarId/:id", articulosP.deleteArticulo);

// Actualizar articulo por ID
router.put("/articulo/actualizarArticulo/:id", articulosP.updateArticulo);

export default router;
