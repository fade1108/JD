const express = require('express');
//创建路由器对象
var router  = express.Router();
router.get('/insert',function (err,result) {
   res.send("123");
});
module.exports = router;

