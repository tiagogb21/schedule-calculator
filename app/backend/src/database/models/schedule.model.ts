import { DataTypes, Model } from "sequelize";
import db from "./index";

export default class Schedule extends Model {
  public id!: number;
  public createdBy!: string;
  public client!: string;
  public value!: string;
  public status!: string;
  public date!: Date;
}

Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: "schedules",
    underscored: false,
    timestamps: false,
  }
);
