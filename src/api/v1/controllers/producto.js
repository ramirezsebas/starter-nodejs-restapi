export const getProducto = (request, response, next) => {
    return response.json({
      mensaje: "GET PRODUCTO ENDPOINT",
    });
  };
  
  export const postProducto = (request, response, next) => {
    
    const { codigo, descripcion,precio_unitario } = request.body;
    
    return response.json({
      codigo,
      descripcion,
      precio_unitario,
      mensaje: "POST PRODUCTO ENDPOINT",
    });
  };
  
  export const putProducto = (request, response, next) => {
    
    const { id } = request.params;
    return response.json({
      id,
      mensaje: "PUT PRODUCTO ENDPOINT",
    });
  };
  
  export const deleteProducto = (request, response, next) => {
    const { id } = request.params;
    return response.json({
      id,
      mensaje: "DELETE PRODUCTO ENDPOINT",
    });
  };
  