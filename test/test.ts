import * as assert from 'node:assert'
import * as fs from 'node:fs'

import {
  getEntriesByContentType,
  getReadingTypeEntryFromIntervalBlockEntry
} from '../helpers.js'
import * as greenButtonParser from '../index.js'

describe('greenButtonParser', () => {
  it('Parses namespace.xml, should strip off namespace prefixes', async () => {
    const xml = fs.readFileSync('./test/data/namespace.xml')
    const greenButtonJson = await greenButtonParser.atomToGreenButtonJson(
      xml as unknown as string
    )

    assert.ok(
      greenButtonJson.entries.some((possibleItem) => {
        return Object.hasOwn(possibleItem.content, 'UsagePoint')
      })
    )
  })

  it('Parses intervals_APUC000000_electric.xml', async () => {
    const xml = fs.readFileSync('./test/data/intervals_APUC000000_electric.xml')
    const greenButtonJson = await greenButtonParser.atomToGreenButtonJson(
      xml as unknown as string
    )

    const intervalBlockEntries = getEntriesByContentType(
      greenButtonJson,
      'IntervalBlock'
    )

    assert.ok(intervalBlockEntries.length > 0)

    const readingTypeEntry = getReadingTypeEntryFromIntervalBlockEntry(
      greenButtonJson,
      intervalBlockEntries[0]
    )

    assert.ok(readingTypeEntry !== undefined)
  })
})
