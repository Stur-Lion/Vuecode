var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/vueList', function(req, res, next) {
  res.render('vueList');
});
router.get('/data', function(req, res, next) {
  res.send({list:['a','b','c']})
});
router.get('/dataother', function(req, res, next) {
  res.send({list:['aa','bb','cc']})
});
router.post('/postData', function(req, res, next) {
  res.json({list:['娃娃','卡卡','啧啧']})
});

module.exports = router;
