import DB from "./database";
import Sequelize from "sequelize";
import Category from "./CategoryModel";

const ContentModel = DB.define("OCT_Content", {
  title: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  file: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  likes: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  unlike: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  keywords: {
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

Category.hasMany(ContentModel);
ContentModel.hasMany(Category);

ContentModel.sync({ force: false });

export default ContentModel;
