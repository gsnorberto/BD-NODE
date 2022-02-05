import { Request, Response } from 'express'

export const contact = (req: Request,res: Response)=>{
   res.render('pages/contato')
}

export const about = (req: Request,res: Response)=>{
   res.render('pages/sobre')
}