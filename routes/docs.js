const router = require('express').Router()

router.get('/docs', (req, res) => {
  //res.render('minecraft', { title: 'HYPED | Minecraft Server' });
  res.sendFile('/home/runner/hypedscom/html/Docs.html')
})

module.exports = router;