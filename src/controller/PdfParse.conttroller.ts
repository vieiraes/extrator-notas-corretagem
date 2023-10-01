import express from 'express'
import { Request, Response } from 'express'
const fs = require('fs');
const pdfParse = require('pdf-parse');


const router = express.Router()



router.post('/pdf-parse', (req: Request, res: Response) => {
    const { path }: { path: string } = req.body

    let dataBuffer = fs.readFileSync(path);
    pdfParse(dataBuffer).then(function (data) {

        // number of pages
        // console.log(data.numpages);
        // number of rendered pages
        // console.log(data.numrender);
        // // PDF info
        // console.log(data.info);
        // // PDF metadata
        // console.log(data.metadata);
        // // PDF.js version
        // // check https://mozilla.github.io/pdf.js/getting_started/
        // console.log(data.version);
        // // PDF text
        console.log(data.text)

        const responseArray = data.text.split('\n')


        const numeroNota = responseArray.slice(8, 9)
        const dataPregao = responseArray.slice(12, 13)
        const corretora = responseArray.slice(13, 14)

        res.send({
            numeroNota,
            corretora,
            dataPregao,
            raw: responseArray,
        },
        )
    });




})


export { router }





