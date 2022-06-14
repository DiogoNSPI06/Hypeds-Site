const router = require('express').Router()

router.get('/tos', (req, res) => {
  res.sendFile('/home/runner/hypedscom/html/TOS.html')
})

module.exports = router;