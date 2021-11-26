import { Sequelize } from "sequelize";
// import { STRING, Optional, Model, UUID, UUIDV4, ENUM, TEXT } from 'sequelize';
import db from '../config/database.js'

const Product = db.define('Product',
    {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            // allowNull: false,
            defaultValue: Sequelize.UUIDV4
        },
        product_name: {
            type: Sequelize.STRING,
            // allowNull: false
        },
        product_description: {
            type: Sequelize.TEXT,
        },
        product_image: {
            type: Sequelize.BLOB,
            // allowNull: false
        },
        product_price: {
            type: Sequelize.INTEGER,
            // allowNull:false
        }
    },
    {
        freezeTableName: true, // Model tableName will be the same as the model name
    });

export default Product;