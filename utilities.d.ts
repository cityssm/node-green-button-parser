/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import 'core-js';
import type { PathLike } from 'node:fs';
import { type FileHandle } from 'node:fs/promises';
import type { GreenButtonContent } from './types.js';
export declare function fileToBuffer(filePath: PathLike | FileHandle): Promise<Buffer>;
export declare function cleanContentJson(contentJson: any): void;
export declare function populateLookupValues(content: GreenButtonContent): void;
