import { rest } from 'msw';

export const handlers = [
    rest.get('https://cat-fact.herokuapp.com/facts/random', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([{ _id: 2, text: 'msw' }])
        )
    })
]