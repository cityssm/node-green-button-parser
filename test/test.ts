import * as assert from 'node:assert'
import * as fs from 'node:fs'

import * as greenButtonParser from '../index.js'

describe('greenButtonParser', () => {
  describe('urlToJson', () => {
    it('Parses customer_8.xml (URL)', async () => {
      const greenButtonFeed = await greenButtonParser.atomToGreenButtonJson(
        'https://raw.githubusercontent.com/cityssm/node-green-button-parser/main/test/data/customer_8.xml'
      )

      assert.ok(
        greenButtonFeed.entries.some((possibleItem) => {
          return possibleItem.content.contentType === 'IntervalBlock'
        })
      )
    })
  })

  describe('xmlToJson', () => {
    it('Parses customer_11.xml', async () => {
      const xml = fs.readFileSync('./test/data/customer_11.xml')
      const greenButtonFeed = await greenButtonParser.atomToGreenButtonJson(
        xml as unknown as string
      )

      assert.ok(
        greenButtonFeed.entries.some((possibleItem) => {
          return possibleItem.content.contentType === 'IntervalBlock'
        })
      )
    })

    it('Parses namespace.xml', async () => {
      const xml = fs.readFileSync('./test/data/namespace.xml')
      const greenButtonFeed = await greenButtonParser.atomToGreenButtonJson(
        xml as unknown as string
      )

      assert.ok(
        greenButtonFeed.entries.some((possibleItem) => {
          return possibleItem.content.contentType === 'UsagePoint'
        })
      )
    })
  })
})
