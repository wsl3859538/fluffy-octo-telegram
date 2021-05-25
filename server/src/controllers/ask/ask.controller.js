const models = require('../../../models')
const Sequelize = require('sequelize');


const op = models.Sequelize.Op;




class AskController {


    // 创建问题
    static async createAsk(ctx, next) {


        let { title, content, anonymity } = ctx.request.body;

        if (!title) {
            next(ctx.throw('问题不能为空'))
        }


        await models.Ask.create({
            title, content, anonymity,
            userId: ctx.session.userId,
            hot: 0,
            recommend: 1

        }).then(result => {
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '问题提交成功',
            }
        }).catch(err => {
            console.log(err)
            next(ctx.throw(err))
        });

    }

    // 获取问题列表
    static async getAskList(ctx, next) {

        console.log('req_query', ctx.request.query)

        let request = ctx.request.query

        let type = request.type;
        let keyword = request.keyword;

        let where = {};
        if(keyword){
            where = {
                title:{
                    [op.like]:'%' +keyword + '%'
                }
            }
            where[type] = 1
        }else{
            where[type] = 1
        }


        let limit = request.size;
        let pageIndex = request.page;
        let userId = ctx.session.userId;

        let offset = (pageIndex - 1) * limit


        limit = parseInt(limit);


        // 与用户表关联,查出发布问题的用户头像和tag,再根据条件查询该问题下与当前用户有关的点赞数
        let askList = await models.Ask.findAndCountAll({
            where,
            offset,
            limit,
            attributes: ['id', 'content', 'title', 'anonymity', 'votes', 'comments'],
            include: [{
                model: models.User,
                as: "user",
                attributes: ['avatar', 'tags', 'userName'],
            },

            // sequelize默认是左外连接，如果你有条件(whrer)，
            //它会给你变成内连接。这么做是有道理的,因为情况只返回内外条件都满足的数据。
            //为了能够保持外连接 只需要把写上required: false属性即可
            {
                model: models.Votes,
                as: "vote",
                required: false,   
                where: { userId },
                attributes: ['id'],
            },
        
            ]
    })


        let list = [];



// 数据拼接
askList.rows.forEach(askItem => {
    let obj = {
        anonymity: askItem.anonymity,
        content: askItem.content,
        id: askItem.id,
        title: askItem.title,
        userName: askItem.user.userName,
        tags: askItem.user.tags,
        avatar: askItem.user.avatar,
        votes: askItem.votes,
        comments: askItem.comments,
        isVote: askItem.vote.length > 0 ? true : false
    }

    list.push(obj)
})



let total = list.count;


let result = {
    list,
    total
}

ctx.response.status = 200;
ctx.body = {
    code: 200,
    msg: '查询成功',
    result: result
}
    }

    static async vote(ctx, next) {


    let { id, type } = ctx.request.body;

    let ask = await models.Ask.findByPk(id)

    // ask表实现votes数量的变更
    switch (type) {
        case 'up':
            await ask.increment('votes')
            // 更新到vote表
            await models.Votes.create({
                askId: ask.id,
                userId: ctx.session.userId
            }).then(result => {
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '操作成功',
                }
            }).catch(err => {
                console.log(err)
                next(ctx.throw(err))
            });
            break;
        case 'down':
            await ask.decrement('votes')
            break;
        case 'neutral':
            await ask.decrement('votes');

            await models.Votes.destroy({
                where: {
                    askId: id,
                    userId: ctx.session.userId
                }
            }).then(result => {
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '操作成功',
                }
            }).catch(err => {
                console.log(err)
                next(ctx.throw(err))
            });
            break;
        default:
            break;
    }





}


}

module.exports = AskController;

