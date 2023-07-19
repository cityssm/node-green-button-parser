/// <reference types="node" />
/// <reference types="node" />
import type { PathLike } from 'node:fs';
import type { FileHandle } from 'node:fs/promises';
import type { GreenButtonJson } from './types.js';
export { atomToGreenButtonJson } from './atomToGreenButtonJson.js';
export declare function atomFileToGreenButtonJson(filePath: PathLike | FileHandle): Promise<GreenButtonJson>;
