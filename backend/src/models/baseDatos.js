// modulo base de datos
import mysql from "mysql2";

let conx;

try {
  conx = mysql.createPool({
    host: "bidvu8ffo1u6xwbpb9th-mysql.services.clever-cloud.com",
    user: "uib2hj8nfina7f2r",
    password: "tA0d4u9h87iQvTWI0x6E",
    database: "bidvu8ffo1u6xwbpb9th",
    port: "3306",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
} catch (error) {
  console.error(`Error inesperado: ${error.message}`);
}

export { conx };
