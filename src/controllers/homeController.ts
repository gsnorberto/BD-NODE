import { raw, Request, Response } from 'express';
import { Op } from 'sequelize'; 

// import { sequelize } from '../instances/mysql';
// import { sequelize } from '../instances/pg';

import { User } from '../models/User';

import { Product } from '../models/Product';

export const home = async (req: Request, res: Response) => {
   const search: string = 'Sar'

   //Pega todos os usuários do BD
   //let users = await User.findAll();

   //Pega os atributos especificados
   // let users = await User.findAll({
   //    attributes: ['name', ['age', 'idade']],
   //    raw: true
   // });

   //Não pega os atributos especificados
   // let users = await User.findAll({
   //    attributes: {exclude: ['id', 'age']}
   // });

   //Filtrar resultados por condicionais
   // let users = await User.findAll({
   //    where: { age: 18, name: 'Joana Rosa'  }
   // });

   //Filtrar por condicional "ou"
   // let users = await User.findAll({
   //    //where: { [Op.or]: [{age: 18}, {name: 'Gabriel Silva'}] }
   //    //Outra forma (quando apenas 1 campo)
   //    where: {
   //       age: [50, 18, 13]
   //    }
   // });

   //Filtrar por condicionais ">, <, ==, etc"
   // let users = await User.findAll({
   //    where: {
   //       age: {
   //          // [Op.gt]: 40 // "gt" (maior que), "gte" (maior ou igual), "lt" (menor que), "lte" (menor ou igual). gt = Greather Than, e = equal. lt = Lower Than
   //          // [Op.between]: [25, 50] // Todo mundo entre 25 e 50 anos. Também tem o "notbetween"
   //          // [Op.notIn]: [30, 55] // Todos que não tem 30 ou 55 anos
   //       }
   //    }
   // });

   //Filtrar por parte do nome digitado
   let users = await User.findAll({
      where: {
         name: {
            [Op.like]: `%${search}%` // Todos usuários que começam com "Ga" (com Mysql não tem diferença entre letras maiúsculas e minúsculas)
         }
      }
   });






   // try{
   //     await sequelize.authenticate();
   //     console.log("conexão estabelecida com sucesso!");
   // } catch(error){
   //     console.log(error);
   // }

   let age: number = 90;
   let showOld: boolean = false;

   if (age > 50) {
      showOld = true;
   }

   let list = Product.getAll();
   let expensiveList = Product.getFromPriceAfter(12);

   res.render('pages/home', {
      name: 'Bonieky',
      lastName: 'Lacerda',
      showOld,
      products: list,
      expensives: expensiveList,
      frasesDoDia: [],
      users
   });
};