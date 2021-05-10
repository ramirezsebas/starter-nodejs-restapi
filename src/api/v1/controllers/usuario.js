export const getUsuario = (req, res, next) => {
  return res.json({
    mensaje: "GET USUARIO",
  });
};

export const postUsuario = (req, res, next) => {
  const { username, password } = req.body;
  return res.json({
    username,
    password,
    mensaje: "POST USUARIO",
  });
};

export const putUsuario = (req, res, next) => {
  const { id } = req.params;
  return res.json({
    id,
    mensaje: "PUT USUARIO",
  });
};

export const deleteUsuario = (req, res, next) => {
  const { id } = req.params;
  return res.json({
    id,
    mensaje: "DELETE USUARIO",
  });
};
