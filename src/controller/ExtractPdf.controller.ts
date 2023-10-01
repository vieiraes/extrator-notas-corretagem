import express from 'express'
import { Request, Response } from 'express'
import fs from 'fs/promises'
import { pdfToPages } from 'pdf-ts'


const router = express.Router()

router.post('/pdf', (req: Request, res: Response) => {
    const { path }: { path: string } = req.body

    async function extract(path) {
        const file = await fs.readFile(path);
        const text = await pdfToPages(file)
        console.log(text)
        return text
    }

     extract(path)

})


export { router }