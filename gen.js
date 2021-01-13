var shell = require("shelljs");
shell.exec(
  `sequelize model:generate --name User --attributes email:STRING,firstName:STRING,lastName:STRING,userName:STRING,password:STRING,status:STRING`
);
