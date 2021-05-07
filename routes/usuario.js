import Router from "express";
import {
  deleteUsuario,
  getUsuario,
  postUsuario,
  putUsuario,
} from "../controllers/usuario.js";

const usuarioRouter = Router();

usuarioRouter.get("/", getUsuario);

usuarioRouter.post("/", postUsuario);

usuarioRouter.put("/:id", putUsuario);

usuarioRouter.delete("/:id", deleteUsuario);

export default usuarioRouter;
