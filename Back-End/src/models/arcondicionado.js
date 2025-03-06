import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const arCond = sequelize.define("arConds", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    responsavel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    setor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gas: {
        type: DataTypes.STRING,
        allowNull: false
    },
    servicos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tecnico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    proxmanutencao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    timestamps: true 
});



try {
    arCond.sync({force: false}).then(()=>{
        console.log("Tabela arConds criada com sucesso");
    })
}catch(error){
    console.error("Não foi criada a tabela:", error)
}


export default arCond;