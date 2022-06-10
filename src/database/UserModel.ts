import DB from "./database";
import Sequelize from "sequelize";

const UserModel = DB.define("OCT_Users", {
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  avatar: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  login: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  permission_level: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

UserModel.sync({ force: false });

export default UserModel;
