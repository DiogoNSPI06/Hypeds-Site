const router = require('express').Router()

router.get('/minecraft', (req, res) => {
  //res.render('minecraft', { title: 'HYPED | Minecraft Server' });
  res.sendFile('/home/runner/hypedscom/html/Minecraft.html')
})

module.exports = router;