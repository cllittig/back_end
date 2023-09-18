const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp','root','32130708', 
{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = 
{
    Sequelize: Sequelize,
    sequelize: sequelize
};