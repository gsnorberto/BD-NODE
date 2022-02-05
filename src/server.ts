//Imports
import express, {Request, Response} from 'express';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';
import mustache from 'mustache-express';
import path from 'path';

// Conceder acesso à variável de ambiente ".env"
import dotenv from 'dotenv'
dotenv.config();

const server = express();

//Utilizando o mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache());

//Pastas estáticas
server.use(express.static(path.join(__dirname, '../public')))

//Habilitar a captura de dados via "post" (que vem no corpo da requisição)
server.use(express.urlencoded({extended: true}))

//Rotas estáticas
server.use('/', mainRoutes);
server.use('/painel', painelRoutes)
server.use((req: Request, res: Response)=>{
   res.status(404).send('Página não encontrada!')
})

//Rotas dinâmica
server.get('/noticia/:slug', (req: Request, res: Response) => {
   let slug: string = req.params.slug;
   res.send(`Noticia: ${slug}`)
})

server.listen(process.env.PORT)