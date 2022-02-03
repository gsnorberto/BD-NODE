//Servidor para rodar em determinada porta do computador
//Utilizando o framework xpress

import express, {Request, Response} from 'express';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';

const server = express();

server.use('/', mainRoutes);
server.use('/painel', painelRoutes)

server.use((req: Request, res: Response)=>{
   res.status(404).send('Página não encontrada!')
})

//Rotas dinâmica



server.listen(80)