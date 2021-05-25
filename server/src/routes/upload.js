
const router = require('koa-router')();  //注意：引入的方式
var fs = require('fs');
const path = require('path');

const func = require("../controllers/component/qiniu.controller.js");


// 图片上传
router.post('/app/upload', async function (ctx, next) {

  const file = ctx.request.files.file; // 获取上传文件

  console.log('file',file)

  const reader = fs.createReadStream(file.path);
  // 获取上传文件扩展名
  const ext = file.name.split(".").pop();
  // 命名文件以及拓展名
  const fileUrl = `${Date.now()}.${ext}`;


  let result = await func.uploadQiniu(reader, fileUrl)

  console.log('result', result)

  switch (result.code) {
    case 200:
      ctx.response.status = 200;
      ctx.body = {
        code: 200,
        msg: '上传成功',
        url: result.url
      }
      break;


    default:
      ctx.response.status = 500;
      ctx.body = result
      break;
  }



})

module.exports = router;