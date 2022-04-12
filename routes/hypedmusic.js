const router = require('express').Router()

router.get('/hypedmusic', (req, res) => {
  //res.render('hypedmusic', { title: 'HYPED | HypedMusic' });
  res.sendFile('/home/runner/hypedscom/html/Hyped-Music.html')
})

module.exports = router;