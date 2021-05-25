const router = require('koa-router')();  //注意：引入的方式

const userctrl = require('../controllers/user/user.controller.js');   // 引入用户模块逻辑层



router.post('/app/user/sendVercode', userctrl.sendVerCode)
        .post('/app/user/register', userctrl.register)
        .post('/app/user/sign', userctrl.sign)
        .post('/app/user/updateUserInfo', userctrl.updateUserInfo)
module.exports = router;


