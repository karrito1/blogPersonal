// controlador para articulo

import { articuloModel } from "../models/articulo.model.js";

// Obtener todos los articulos
export const getArticulos = async (req, res) => {
  try {
    const results = await articuloModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error en el sistema" + error,
    });
  }
};

// Obtener articulo por ID
export const getArticuloId = async (req, res) => {
  try {
    const results = await articuloModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar articulo por ID" + error,
    });
  }
};

// Crear articulo
export const createArticulo = async (req, res) => {
  const data = {
    titulo: req.body.titulo,
    contenido: req.body.contenido,
    fecha: req.body.fecha,
    imagen: req.body.imagen,
  };

  try {
    const results = await articuloModel.create(data);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error al insertar articulo" + error,
    });
  }
};

// Eliminar articulo
export const deleteArticulo = async (req, res) => {
  try {
    const results = await articuloModel.delete(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar articulo" + error,
    });
  }
};

// Actualizar articulo
export const updateArticulo = async (req, res) => {
  try {
    const results = await articuloModel.update(req.params.id, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrió un error al actualizar articulo" + error,
    });
  }
};
