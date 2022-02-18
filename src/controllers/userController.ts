import { Request, Response } from 'express';
import { User } from '../models/User';

export const nome = (req: Request, res: Response) => {
   let nome: string = req.query.nome as string;
   let idade: string = req.query.idade as string;

   res.render('pages/nome', {
      nome,
      idade
   });
};

export const idadeForm = (req: Request, res: Response) => {
   res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
   let mostrarIdade: boolean = false;
   let idade: number = 0;

   if (req.body.ano) {
      let anoNascimento: number = parseInt(req.body.ano as string);
      let anoAtual: number = new Date().getFullYear();
      idade = anoAtual - anoNascimento;
      mostrarIdade = true;
   }

   res.render('pages/idade', {
      idade,
      mostrarIdade
   });
};

export const userForm = async (req: Request, res: Response) => {
   let emptyName = true;

   if(req.body.name) {
      emptyName = false;

      let name = req.body.name;

      //Cria instância de usuário
      const newUser = User.build({
         name
      })

      //Cria instância de idade (se tiver)
      if (req.body.age) {
         let age = req.body.age;
         newUser.age = age;
      }

      await newUser.save(); // Salva no BD
   }

   //Todos usuários do BD
   let users = await User.findAll();

   res.render('pages/home', {
      users,
      emptyName
   })
}

export const addAge = async (req: Request, res: Response) => {
   let id: string = req.params.id;

   let results = await User.findAll({where: {id}})

   if (results.length > 0){
      let usuario = results [0];
      usuario.age++;
      await usuario.save();
   }
   
   res.redirect('/');
}

export const decAge = async (req: Request, res: Response) => {
   let id: string = req.params.id;

   let results = await User.findAll({where: {id}})

   if (results.length > 0){
      let usuario = results [0];
      usuario.age--;
      await usuario.save();
   }
   res.redirect('/');
}

export const delAge = async (req: Request, res: Response) => {
   let id: string = req.params.id;

   let results = await User.findAll({where: {id}})

   if (results.length > 0){
      let usuario = results [0];
      usuario.destroy();
   }
   res.redirect('/');
}