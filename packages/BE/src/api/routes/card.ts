import { Router, Request, Response } from 'express'
import { ICard } from 'models/src/card'

const cardRoute = Router()

export default (app: Router) => {
  app.use('/card', cardRoute)

  cardRoute.get('', async (req, res) => {
    const card:ICard = {
      code: '0000',
      text: 'a',
    }
    res.send(`card value:${card.text}`);
  });

  cardRoute.get('/all', async (req: Request, res: Response) => {
    const cards:ICard[] = [{
      code: '0000',
      text: 'a',
    }]
    res.send(`cards len:${cards.length}`);
  })

}
