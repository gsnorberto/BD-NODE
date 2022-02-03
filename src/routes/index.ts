import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request,res: Response)=>{
   //pegar os produtos do banco de dados
   //organizar as informações desses produtos
   //envia para o template engine
   res.send('Olá Mundo!')
});

router.get('/contato', (req: Request,res: Response)=>{
   res.send('Formulário de Contato')
});

router.get('/sobre', (req: Request,res: Response)=>{
   res.send('Página Sobre')
});

export default router;