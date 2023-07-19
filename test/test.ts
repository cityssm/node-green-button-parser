import * as assert from 'node:assert'

import * as greenButtonParser from '../index.js'

describe('greenButtonParser', () => {
  describe('fileToJson', () => {
    it('Parses customer_8.xml (small file)', async () => {
      const greenButtonFeed = await greenButtonParser.atomFileToGreenButtonJson(
        './test/data/customer_8.xml'
      )

      assert.ok(
        greenButtonFeed.items.some((possibleItem) => {
          return possibleItem.contentType === 'IntervalBlock'
        })
      )
    })

    it('Parses customer_11.xml (big file)', async () => {
      const greenButtonFeed = await greenButtonParser.atomFileToGreenButtonJson(
        './test/data/customer_11.xml'
      )

      assert.ok(
        greenButtonFeed.items.some((possibleItem) => {
          return possibleItem.contentType === 'IntervalBlock'
        })
      )
    })

    it('Parses namespace.xml', async () => {
      const greenButtonFeed = await greenButtonParser.atomFileToGreenButtonJson(
        './test/data/namespace.xml'
      )

      console.log(greenButtonFeed)

      assert.ok(
        greenButtonFeed.items.some((possibleItem) => {
          return possibleItem.contentType === 'UsagePoint'
        })
      )
    })
  })
})
