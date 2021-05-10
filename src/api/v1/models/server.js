import express from "express";
import http from "http";
import https from "https";
import cors from "cors";
import productoRouter from "../routes/producto.js";
import usuarioRouter from "../routes/usuario.js";

export default class Server {
  constructor() {
    this.portHttp = process.env.PORT_DESAROLLO;
    this.portHttps = process.env.PORT_PROD;
    this.routeProducto = "/api/producto";
    this.routeUsuario = "/api/usuario";
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json({ extended: false }));
    this.app.use(express.static("public"));
    this.app.use(cors());
  }

  routes() {
    this.app.get("/prueba", (req, res, next) => {
      return res.status(200).json({
        mensaje:"Funciona Correctamente"
      });
    });
    this.app.use(this.routeUsuario,usuarioRouter);
    this.app.use(this.routeProducto,productoRouter);
  }

  createHttpServer() {
    let httpServer = http.createServer(this.app);
    httpServer.listen(this.portHttp, () => {
      console.log(`Corriendo http://localhost:${this.portHttp}`);
    });
  }

  createHttpsServer() {
    //Agregar Clave de Seguridad para https
    let privateKey = fs.readFileSync(process.env.RUTA_CLAVE, "utf8");
    let certificate = fs.readFileSync(process.env.RUTA_CREEDENCIAL, "utf8");

    let creedenciales = { key: privateKey, cert: certificate };
    let httpsServer = https.createServer(creedenciales);
    httpsServer.listen(this.portHttps, () => {
      console.log("SERVER");
    });
  }
}