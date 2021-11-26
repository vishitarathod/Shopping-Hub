import { Sequelize } from 'sequelize';

export default new Sequelize('Shopping_Hub', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
});