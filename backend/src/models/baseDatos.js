// modulo base de datos
import mysql from "mysql2";

let conx;

try {
  conx = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "empresaproductos",
    port: "3306",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
} catch (error) {
  console.error(`Error inesperado: ${error.message}`);
}

export { conx };
