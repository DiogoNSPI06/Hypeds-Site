const router = require('express').Router()
const db = require('quick.db')

router.get('/contrato', (req, res) => {
  res.render('contrato', { title: 'HYPED | Contrato' });
  db.add("Clicks_Contrato", 1)
})

module.exports = router;