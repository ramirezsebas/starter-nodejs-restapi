import dotenv from "dotenv";

dotenv.config();

export default {
  port_local: process.env.PORT_LOCAL,
  port_remoto: process.env.PORT_REMOTO,
  port_base_datos: process.env.PORT_BASE_DATOS,
  host: process.env.HOST,
  nombre_bd: process.env.BDNAME,
  usuario: process.env.USUARIO,
  contra: process.env.CONTRA,
  usuario: process.env.USUARIO,
  base_datos: process.env.BASE_DATOS,
  https_clave: process.env.RUTA_CLAVE,
  https_creedenciales: process.env.RUTA_CREEDENCIALES,
};
