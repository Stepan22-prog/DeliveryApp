const responseMiddleware = (req, res, next) => {
  if (res.errCode === 404) {
    res.status(404).json({ error: true, message: res.err });
  } else if (res.err) {
    res.status(500).json({ error: true, message: res.err });
  } else {
    res.status(200).json(res.data);
  }
  next();
};

export { responseMiddleware };