study record

创建目录后 npm init




sequelize-cli 文件目录

migrations : 数据库迁移文件

models : ORM对应数据库表(关联)

seeders : 初始化脚本(一张表或者一个系统创建的时候,有一些原始的数据需要创建)


npx sequelize model:generate --name sysmenu --attributes menu_id:number,parent_id:number,name:string,url:string,perms:string,type:number,icon:number,order_num:number


npx sequelize-cli db:migrate --env=development

npx sequelize-cli db:migrate:undo 撤销迁移


npx sequelize-cli model:generate --name User --attributes id:string,mobile:string


npx sequelize model:generate --name user11 --attributes name:string,deadline:date,content:string

npx sequelize model:generate --name ask --attributes id:string,content:string

npx sequelize model:generate --name votes --attributes id:string,askId:string,userId:string