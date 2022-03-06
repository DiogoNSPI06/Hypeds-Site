const router = require('express').Router()

router.get('/minecraft', (req, res) => {
  res.render('minecraft', { title: 'HYPED | Minecraft Server' });
})

module.exports = router;