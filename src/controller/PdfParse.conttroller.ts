import express from 'express'
import { Request, Response } from 'express'
const fs = require('fs');
const pdfParse = require('pdf-parse');


const router = express.Router()



router.post('/pdf-parse', (req: Request, res: Response) => {
    const { path }: { path: string } = req.body

    let dataBuffer = fs.readFileSync(path);
    pdfParse(dataBuffer).then(function (data) {

        console.log(data.text)

        const arrayInteiro = data.text.split('\n')

        let stringAlvo = "NOTA DE NEGOCIAÇÃO"


        function splitArray(array, stringAlvo) {

            let indiceSTringAlvo = array.indexOf(stringAlvo)

            let arrayAntes = array.slice(0, indiceSTringAlvo)
            let arrayDepois = array.slice(indiceSTringAlvo + 1)

            return { arrayAntes, arrayDepois }
        }

        const resultado = splitArray(arrayInteiro, stringAlvo)

        res.send({
            resultado,
            raw: arrayInteiro,
        },
        )
    });
})


export { router }





