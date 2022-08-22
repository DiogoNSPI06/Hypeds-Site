const router = require('express').Router()
const db = require('quick.db')

router.get('/hypedbot', (req, res) => {
  res.render('hypedbot', { title: 'HYPED | HypedBot' });
  db.add("Clicks_HypedBot", 1)
})

module.exports = router;