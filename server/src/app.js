const Koa = require('koa');
var bodyParser = require('koa-body');
const router = require('koa-router')();  //注意：引入的方式
// const models = require('../../models')

const session = require('koa-session');

const registerRouter = require('./routes')


const CONFIG = {
    key: 'koa:sess',        // cookie key (默认koa：sess)
    maxAge: 1296000000,       // cookie的过期时间,毫秒，默认为1天
    overwrite: true,        // 是否覆盖    (默认default true)
    httpOnly: false,        // cookie是否只有服务器端可以访问,默认为true
    signed: true,           // 签名默认true
    rolling: false,         // 在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
    renew: false,           // (boolean) 会话即将到期时,续订会话
};







const app = new Koa();
app.use(bodyParser({
    multipart: true 
}))

// 使用session
app.keys = ['secret'];      

app.use(session(CONFIG, app));


app.use(async (ctx, next) => {
    try {
        await next()
    } catch (err) {

        console.log('err',err)


        switch (err.statusCode) {
            // 封装错误500信息
            case 500:
                ctx.response.status = 200;
                ctx.response.body = {
                    code: 500,
                    msg: err.message
                }
                break;

            default:
                ctx.response.status = err.statusCode || err.status || 500;
                ctx.response.body = {
                    code: ctx.response.status,
                    message: err.message
                };
                break;
        }


        // 手动释放error事件
        ctx.app.emit('error', err, ctx);
    }
});
// 继续触发error事件
app.on('error', (err, ctx) => {
    console.log('server error', err.message);
    // console.error(err);
    return
});

app.use(registerRouter())

app.listen(8080, 'localhost', () => {
    console.log('app服务启动成功')
})