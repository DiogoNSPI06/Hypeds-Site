const router = require('express').Router()

router.get('/tos', (req, res) => {
  res.render('tos', { title: 'HYPED | Tos' });
})

module.exports = router;