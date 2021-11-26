import { Sequelize } from "sequelize";
import db from '../config/database.js'


const User = db.define('User', {
    id: {
        primaryKey: true,
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
    },
    user_name: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    mobile_number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    freezeTableName: true,
});

export default User;