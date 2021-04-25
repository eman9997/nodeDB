let dbOrm=require('../util/sequelize.js');
const {DataTypes} = require('sequelize');


function setup(){
  const User = dbOrm.define('User', {
    firstName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(20)
    },
    balance: {
      type: DataTypes.FLOAT
    }
  }, {
    
  });
  
  User.sync({ force: true });

  return User;
}
// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

exports.module=setup();
