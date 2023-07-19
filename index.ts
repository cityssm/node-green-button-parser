import type { PathLike } from 'node:fs'
import type { FileHandle } from 'node:fs/promises'

import { atomToGreenButtonJson } from './atomToGreenButtonJson.js'
import type { GreenButtonJson } from './types.js'
import { fileToBuffer } from './utilities.js'

export { atomToGreenButtonJson } from './atomToGreenButtonJson.js'

export async function atomFileToGreenButtonJson(
  filePath: PathLike | FileHandle
): Promise<GreenButtonJson> {
  const buffer = await fileToBuffer(filePath)
  return await atomToGreenButtonJson(buffer.toString())
}
