import { Request, Response } from 'express'

import { Product } from '../models/Product';

export const home = (req: Request,res: Response)=>{
   let user = { name: 'gabriel', age: 25 }
   let age: number = 90;
   let showOld: boolean = false;

   if(age > 50){
      showOld = true;
   }

   //Faz requisição ao "Model" (responsável por processar os dados do BD)
   let list = Product.getAll();
   let expensiveList = Product.getPriceAfter(12);

   //Envia para o "views" (Página de visualização dos dados processados)
   res.render('pages/home', { // nome da página na pasta "views"
      user,
      address: 'rua 5',
      showWelcome: true,
      showOld,
      products: list,
      expensiveProducts: expensiveList
   })
}