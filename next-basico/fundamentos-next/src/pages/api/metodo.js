export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({ nome: 'Bruno' });
  } else {
    res.status(200).json({ nome: 'Luiz' });
  }
};
