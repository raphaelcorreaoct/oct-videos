import DB from "./database";
import Sequelize from "sequelize";

const CategoryModel = DB.define("OCT_Categories", {
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
});

CategoryModel.sync({ force: false });

export default CategoryModel;
