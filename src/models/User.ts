import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'

//Type geral do model de Usuários do BD
interface UserInstance extends Model{
   id: number;
   name: string;
   age: number;
}

export const User = sequelize.define<UserInstance>("User",{
   id: {
      primaryKey: true,
      autoIncrement: true, //Quando não especificar o id na criação do usuário, ele vai inserir um automaticamente
      type: DataTypes.INTEGER.UNSIGNED
   },
   name: {
      type: DataTypes.STRING
   },
   age: {
      type: DataTypes.INTEGER,
      defaultValue: 18
   }
},{
   tableName: 'users', //nome exato da tabela no BD
   timestamps: false //se deixar marcado como "true" vai assumir que existem os campos "createdAt" (data que foi criado o registro no BD) e o "updatedAt" (data que foi atualizado o registro no BD)
}
)