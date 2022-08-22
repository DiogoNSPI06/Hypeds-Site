const router = require('express').Router()
const db = require('quick.db')

router.get('/docs', (req, res) => {
  //res.render('minecraft', { title: 'HYPED | Minecraft Server' });
  res.sendFile('/home/runner/hypedscom/html/Docs.html')
  db.add("Clicks_Docs", 1)
})

module.exports = router;