const models = require('../../../models')


const op = models.Sequelize.Op;

// static可以直接通过类名调用

class UserController {


    // 发送验证码
    static async sendVerCode(ctx, next) {
        // try {


        // } catch (error) {
        //     next(ctx.throw(error))
        // }

        let { mobile } = ctx.request.body;

        console.log('mobile', mobile)


        if (!mobile) {
            next(ctx.throw('手机号码不能为空'))
        }

        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            msg: '发送验证码成功',
        }
    }

    static async register(ctx, next) {
        //             result: "123656"
        let { mobile, vercode } = ctx.request.body;

        if (!mobile) {
            next(ctx.throw('手机号码不能为空'))
        }

        if (!vercode) {
            next(ctx.throw('验证码不能为空'))
        }

        if (vercode != '123656') {
            next(ctx.throw('验证码错误'))
        }

        await models.User.findOrCreate({
            raw: true,
            where: {
                mobile: mobile
            },
            defaults: {
                mobile: mobile
            },
            attributes: {
                exclude: ['password']
            }
        }).then(result => {
            console.log('result', result)
            ctx.session.userId = result[0].id;

            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '登录成功',
                user: result[0],
                token: "this a token"
            }
        })





    }

    static async sign(ctx, next) {
        //             result: "123656"
        let { username, password } = ctx.request.body;

        if (!username) {
            next(ctx.throw('用户名不能为空'))
        }

        if (!password) {
            next(ctx.throw('密码不能为空'))
        }


        let userExist = await models.User.findOne({
            raw: true,
            where: {
                [op.or]: [
                    {
                        email: username,
                    },
                    {
                        mobile: username,
                    },
                ]
            }
        })


        if (userExist) {  // 先判断用户是否存在
            let passwordItem = await models.User.findOne({
                raw: true,
                where: {
                    password
                }
            })

            if (passwordItem) {


                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '登录成功',
                    token: "this a token"
                }
            } else {
                next(ctx.throw('密码错误'))
            }

        } else {
            next(ctx.throw('用户不存在'))
        }



    }

    static async updateUserInfo(ctx, next) {
        let id = ctx.session.userId;
        let {userName, avatar, tags} = ctx.request.body;

       let count =  await models.User.update({
            userName, avatar, tags
        }, {
            where: {
                id
            }
        })

        if(count == 1){
            await  models.User.findOne({
                raw: true,
                attributes: {
                    exclude: ['password']
                },
                where: {
                    id
                }
            }).then(result =>{
                console.log(result)
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    user: result,
                    msg: '保存成功',
                }
            })
        }

    

    }




}

module.exports = UserController;

