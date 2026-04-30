// capa modelo para el modulo de paciente

import { conx } from "./baseDatos.js";

const db = conx.promise();

export const articuloModel = {
  // Listar todos los articulos
  findAll: async () => {
    const sql = "SELECT * FROM articulos ORDER BY titulo ASC";
    const [rows] = await db.query(sql);
    return rows;
  },

  // Buscar articulo por ID
  findById: async (id) => {
    const sql = "SELECT * FROM articulos WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  // Crear articulo
  create: async (data) => {
    const sql = "INSERT INTO articulos SET ?";
    const [result] = await db.query(sql, [data]);
    return result;
  },

  // Eliminar articulo
  delete: async (id) => {
    const sql = "DELETE FROM articulos WHERE id = ?";
    const [result] = await db.query(sql, [id]);
    return result;
  },

  // Actualizar articulo
  update: async (id, data) => {
    const sql = "UPDATE articulos SET ? WHERE id = ?";
    const [result] = await db.query(sql, [data, id]);
    return result;
  },
};
