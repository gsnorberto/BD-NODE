import { Request, Response } from "express";

export const name = (req: Request,res: Response)=> {
   let nome: string = req.query.nome as string;
   let idade: string = req.query.idade as string;
   
   res.render('pages/nome',{
      nome,
      idade
   })
}

export const ageForm = (req: Request,res: Response) => {
   res.render('pages/idade');
}

export const ageAction = (req: Request,res: Response) =>{
   let mostrarIdade: boolean = false;
   let idade: number = 0;

   if(req.body.ano){
      let anoNascimento = req.body.ano as string;
      let anoAtual:number = new Date().getFullYear();

      idade = anoAtual - parseInt(anoNascimento)
      mostrarIdade = true;
   }

   res.render('pages/idade',{
      idade,
      mostrarIdade
   });
}