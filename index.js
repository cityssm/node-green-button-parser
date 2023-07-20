import { atomToGreenButtonJson } from './atomToGreenButtonJson.js';
import { fileToBuffer } from './utilities.js';
export { atomToGreenButtonJson } from './atomToGreenButtonJson.js';
export * as lookups from './lookups.js';
export async function atomFileToGreenButtonJson(filePath) {
    const buffer = await fileToBuffer(filePath);
    return await atomToGreenButtonJson(buffer.toString());
}
