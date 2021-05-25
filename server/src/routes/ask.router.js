const router = require('koa-router')();  //注意：引入的方式

const askctrl = require('../controllers/ask/ask.controller.js');   // 引入用户模块逻辑层



router.post('/app/ask/createAsk', askctrl.createAsk)
    .get('/app/ask/list', askctrl.getAskList)
    .post('/app/ask/vote', askctrl.vote)

module.exports = router;
