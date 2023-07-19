import 'core-js';
import fs from 'node:fs/promises';
export async function fileToBuffer(filePath) {
    return await fs.readFile(filePath);
}
const numberRegExp = /^-?(?:\d*\.)?\d+$/;
export function clearContentJson(contentJson) {
    for (const key of Object.keys(contentJson)) {
        if (Array.isArray(contentJson[key]) && contentJson[key].length === 1) {
            contentJson[key] = contentJson[key][0];
            if (typeof contentJson[key] === 'string' &&
                contentJson[key].length > 0 &&
                numberRegExp.test(contentJson[key])) {
                contentJson[key] = Number(contentJson[key]);
            }
            else {
                clearContentJson(contentJson[key]);
            }
        }
    }
}
