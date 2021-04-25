const { Sequelize } = require('sequelize');
const mysql=require('mysql2');


const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

didConnect();

module.exports = sequelize;

















async function didConnect(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
