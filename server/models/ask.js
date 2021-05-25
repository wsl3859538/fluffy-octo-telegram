'use strict';
const {
  Model, INTEGER, DATE, STRING, TEXT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /**
      *   belongsTo 多对一的关系   多个问题可以属于一个用户,所以问题表对于用户表来说,就是多对一的关系
      *   targetKey 代表关联表的关联字段(用户表中的id)
      *   foreignKey 代表自身外键(ask表的userId)
      *   注意和hasMany不同
    */

      models.Ask.belongsTo(models.User, {
        as: 'user', // 在读取数据时候include 里面也要同时指定 as: 'user'
        foreignKey: 'userId',
        targetKey: 'id'
      })

      /**
       *   hasMany 一对多的关系   一个问题可以有多个点赞
       *   foreignKey 代表关联表的关联字段(问题表中的userId)
       *   sourceKey 代表自身外键(用户表的id)
       */

      models.Ask.hasMany(models.Votes, {
        as: 'vote', // 在读取数据时候include 里面也要同时指定 as: 'user'
        foreignKey: 'askId',
        sourceKey: 'id'
      })

  

    }
  };
  Ask.init({
    title: STRING(50),
    userId: STRING(50),
    content: TEXT,
    recommend: INTEGER(),
    hot: INTEGER(),
    anonymity: INTEGER(),  // 是否是匿名 0 不是 1是
    comments: INTEGER(),
    votes: INTEGER(),
    like: INTEGER()
  }, {
    sequelize,
    modelName: 'Ask',
  });
  return Ask;
};