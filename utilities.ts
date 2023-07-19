import 'core-js'
import type { PathLike } from 'node:fs'
import fs, { type FileHandle } from 'node:fs/promises'

export async function fileToBuffer(
  filePath: PathLike | FileHandle
): Promise<Buffer> {
  return await fs.readFile(filePath)
}

const numberRegExp = /^-?(?:\d*\.)?\d+$/

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function clearContentJson(contentJson: any): void {
  for (const key of Object.keys(contentJson)) {
    if (Array.isArray(contentJson[key]) && contentJson[key].length === 1) {
      contentJson[key] = contentJson[key][0]

      if (
        typeof contentJson[key] === 'string' &&
        contentJson[key].length > 0 &&
        numberRegExp.test(contentJson[key])
      ) {
        contentJson[key] = Number(contentJson[key])
      } else {
        clearContentJson(contentJson[key])
      }
    }
  }
}
