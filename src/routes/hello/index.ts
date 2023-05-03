// Whole file belongs to the server-side.

import { Request, Response } from 'express'

export default {
    name: '/hello', method: 'GET',

    async execute(req: Request, res: Response) {
        res.send('Hello, World!')
    }
}