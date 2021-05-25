'use strict';
const {
  Model, INTEGER, DATE, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      /**
    *   hasMany 一对多的关系   一个用户可以找到多个问题,所以用户表对于问题表来说来说,就是一对多的关系
    *   foreignKey 代表关联表的关联字段(问题表中的userId)
    *   sourceKey 代表自身外键(用户表的id)
    */

      models.User.hasMany(models.Ask, {
        as: 'ask', // 在读取数据时候include 里面也要同时指定 as: 'ask'
        foreignKey: 'id',
        targetKey: 'userId'
      })

      // models.User.belongsToMany(models.Ask, {
      //   through: models.Votes,
      //   foreignKey: 'id',
      //   as: 'askT',
      // })
    }
  };
  User.init({
    userName: STRING(10),
    mobile: INTEGER,
    email: STRING(50),
    avatar: STRING(100),
    password: STRING(30),
    tags: STRING(100)
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};