const bank = require('./bank.js');
const user = bank.sequelize.define('usuario',
{
    fname: 
    {
        type: bank.Sequelize.STRING,
        allowNull: false
    },
    lname:
    {
        type: bank.Sequelize.STRING,
        allowNull: false    
    },

    id:
    {
        type: bank.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

user.sync({force: true});

module.exports = user;
