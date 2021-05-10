import Router from "express";

import {
  deleteProducto,
  getProducto,
  postProducto,
  putProducto,
} from "../controllers/producto.js";

const productoRouter = Router();

productoRouter.get("/", getProducto);

productoRouter.post("/", postProducto);

productoRouter.put("/:id", putProducto);

productoRouter.delete("/:id", deleteProducto);

export default productoRouter;
