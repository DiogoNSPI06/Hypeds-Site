const router = require('express').Router()

router.get('/contrato', (req, res) => {
  res.render('contrato', { title: 'HYPED | Contrato' });
})

module.exports = router;