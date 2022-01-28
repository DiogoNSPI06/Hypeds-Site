const router = require('express').Router()

router.get('/hypedbot', (req, res) => {
  res.render('hypedbot', { title: 'HYPED | HypedBot' });
})

module.exports = router;