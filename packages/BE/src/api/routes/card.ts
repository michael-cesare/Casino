import { Router, Request, Response } from 'express'
import { ICard } from 'models/src/card'

const route = Router()

export default (app: Router) => {
  app.use('/card', route)

  route.get('', async (req, res) => {
    const card:ICard = {
      code: '0000',
      text: 'a',
    }
    res.send(`card value:${card.text}`);
  });

  route.get('/all', async (req: Request, res: Response) => {
    const cards:ICard[] = [{
      code: '0000',
      text: 'a',
    }]
    res.send(`cards len:${cards.length}`);
  })

}
