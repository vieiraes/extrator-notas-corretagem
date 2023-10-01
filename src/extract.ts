import { pdfToText } from 'pdf-ts'

export async function extract(path) {
    const text = (await pdfToText(path))
    console.log(text);
}
