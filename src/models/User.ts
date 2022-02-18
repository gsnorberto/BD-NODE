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
      type: DataTypes.STRING,
      get() { //Mostra os nomes do BD sempre em Maiúsculo
         const raw = this.getDataValue('name')
         return raw.toUpperCase()
      }
   },
   age: {
      type: DataTypes.INTEGER,
      defaultValue: 18,
      set(value: number){ //Sempre que um usuário digitar idade mennor que 18, a idade vai ser salva com 18 no BD. O set é muito útil em criptografias de senha, quando ele captura a senha digitada pelo usuário, criptografa e manda para o BD.
         if(value < 18){
            value = 18;
         }
         this.setDataValue('age',value)
      }
   }
},{
   tableName: 'users', //nome exato da tabela no BD
   timestamps: false //se deixar marcado como "true" vai assumir que existem os campos "createdAt" (data que foi criado o registro no BD) e o "updatedAt" (data que foi atualizado o registro no BD)
}
)