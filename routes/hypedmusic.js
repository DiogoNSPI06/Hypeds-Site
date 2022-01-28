const router = require('express').Router()

router.get('/hypedmusic', (req, res) => {
  res.render('hypedmusic', { title: 'HYPED | HypedMusic' });
})

module.exports = router;