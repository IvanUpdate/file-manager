import { openSync } from 'fs';
import { join } from 'path';

export const add_file = (fileName) => {
    try {
        const filePath = join(process.cwd(), fileName)
        openSync(filePath, 'w')
        console.log(`File ${fileName} was successfully created`)
    } catch(error) {
        console.log(error.message)
    }
}