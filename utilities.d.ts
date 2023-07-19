/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import type { PathLike } from 'node:fs';
import { type FileHandle } from 'node:fs/promises';
export declare function fileToBuffer(filePath: PathLike | FileHandle): Promise<Buffer>;
export declare function clearContentJson(contentJson: any): void;
