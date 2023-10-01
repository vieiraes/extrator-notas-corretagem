import express from 'express'
import { Request, Response } from 'express'
import fs from 'fs/promises'
import { pdfToText, pdfToPages } from 'pdf-ts'


///


// const pdf = await fs.readFile('./path/to/file.pdf');
// const text = await pdfToText(pdf);
// console.log(text);



///




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
        .then((data) => {

            const formatado = JSON.stringify(data)
            
            
            JSON.stringify(JSON.parse(formatado))

            res.send({ formatado })
        })

})


export { router }