import { raw, Request, Response } from 'express';
import { Op } from 'sequelize'; 

// import { sequelize } from '../instances/mysql';
// import { sequelize } from '../instances/pg';

import { User } from '../models/User';

import { Product } from '../models/Product';

export const home = async (req: Request, res: Response) => {
   //const search: string = 'Sar'

   // ****************** REMOÇÃO DE DADOS *********************

   // MÉTODO 1
   // let results = await User.findAll({ where: {name: 'Junior Vasconcelos'}})
   // if(results.length > 0){
   //    let usuario = results[0];

   //    await usuario.destroy();
   // }


   // MÉTODO 2

   // await User.destroy({
   //    where: {
   //       id: 11
   //    }
   // });

   // ****************** ATUALIZAÇÃO DADOS *********************

   // MÉTODO 1 (RECOMENDADO)

   // let results = await User.findAll({
   //    where: {
   //       id: 10
   //    }
   // })
   // if(results.length > 0){ //Encontrou resultados
   //    let usuario = results[0];
   //    usuario.age = 70;
   //    usuario.name = "Lafaiete Coutinho"

   //    await usuario.save(); // Salva no BD
   // }
   


   // MÉTODO 2

   //Atualização de vários usuários na tabela.
   // Atualiza a idade para 18 de todos usuários com menos de 18 anos nos BD
   // await User.update({ age: 18}, {
   //    where: {
   //       age: {
   //          [Op.lt]: 18
   //       }
   //    }
   // });

   //Atualização de único usuário na tabela
   // await User.update({ name: 'Seu Chico', age: 58}, {
   //    where: {
   //       id: 4
   //    }
   // });


   // ****************** INSERÇÃO DE DADOS *********************
   // Existem duas formas de inserção:

   // build + save
   // Cria a instância
   // const user = User.build({
   //    name: 'Agripiliano',
   //    age: 103
   // });
   // Salva a instância
   //await user.save();


   // create
   //Não precisa do save
   // try{
   //    const user = await User.create({
   //       name: 'Kiko',
   //       age: 'tesste'
   //    })
   // } catch(e){
   //    console.log('Ocorreu um erro: '+ e);
   // }



   // **************** CONSULTAS E FILTRAGEM *******************

   //Pega todos os usuários do BD
   let users = await User.findAll();

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
   // let users = await User.findAll({
   //    where: {
   //       name: {
   //          [Op.like]: `%${search}%` // Todos usuários que começam com "Ga" (com Mysql não tem diferença entre letras maiúsculas e minúsculas)
   //       }
   //    }
   // });

   //Ordenação
   // let users = await User.findAll({
   //    where: {
   //       age: {
   //          [Op.gte]: 18 
   //       }
   //    },
   //    //order: ['name'], // Crescente
   //    //order: [['name', 'ASC']], // Crescente. faz o mesmo do que a linha acima
   //    //order: [['name', 'DESC']] // Decrescente
   //    order: [['age', 'DESC'], ['name', 'DESC']] // Decrescente
   // });

   //Limitador de resultados - Lógica da paginação
   // let users = await User.findAll({
   //    where: {
   //       age: {
   //          [Op.gte]: 13 
   //       }
   //    },
   //    order: [['name', 'ASC']],
   //    offset: 4, //pula quatro itens
   //    limit: 2 //exibe os próximos dois itens (a partir do quinto item)
   // });
   






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