
const {DataTypes}= require("sequelize")
module.exports= (sequelize)=>{
    sequelize.define("activity",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        difficulty:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        duration:{
            type:DataTypes.DECIMAL,
            allowNull:false
        },
        season:{
            type:DataTypes.ENUM("Verano","Otoño","Invierno","Primavera"),
            allowNull:false
        }
    },{timestamps:false})
}

