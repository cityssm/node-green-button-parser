/// <reference types="node" />
/// <reference types="node" />
import type { PathLike } from 'node:fs';
import type { FileHandle } from 'node:fs/promises';
import type { GreenButtonJson } from './contentTypes.js';
export { atomToGreenButtonJson } from './atomToGreenButtonJson.js';
export * as lookups from './lookups.js';
export declare function atomFileToGreenButtonJson(filePath: PathLike | FileHandle): Promise<GreenButtonJson>;
