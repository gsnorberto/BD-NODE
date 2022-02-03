//Servidor para rodar em determinada porta do computador
//Utilizando o framework xpress

import express, {Request, Response} from 'express';
import path from 'path';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';

const server = express();

// __dirname faz referência ao local onde se encontra esse arquivo. Independente de onde foi inicializado o processo continuará funcionando pois está pegando o endereço absoluto até a pasta "public"
//Transforma a pasta public em estática
server.use(express.static(path.join(__dirname, '../public')))

server.use('/', mainRoutes);
server.use('/painel', painelRoutes)

//Página 404
server.use((req: Request, res: Response)=>{
   res.status(404).send('Página não encontrada!')
})

//Rotas dinâmica
server.get('/noticia/:slug', (req: Request, res: Response) => {
   let slug: string = req.params.slug;
   res.send(`Noticia: ${slug}`)
})



server.listen(80)