import assert from 'node:assert'
import fs from 'node:fs'

import {
  getEntriesByContentType,
  getReadingTypeEntryFromIntervalBlockEntry,
  getUsagePointEntryFromIntervalBlockEntry
} from '../helpers.js'
import {
  atomToGreenButtonJson,
  GreenButtonFunctionBlockBuilder
} from '../index.js'

describe('greenButtonParser', () => {
  it('Parses namespace.xml, should strip off namespace prefixes', async () => {
    const xml = fs.readFileSync('./test/data/namespace.xml')
    const greenButtonJson = await atomToGreenButtonJson(
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
    const greenButtonJson = await atomToGreenButtonJson(
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

    const usagePointEntry = getUsagePointEntryFromIntervalBlockEntry(
      greenButtonJson,
      intervalBlockEntries[0]
    )

    assert.ok(usagePointEntry !== undefined)
  })

  it('Parses entryOnly.xml', async () => {
    const xml = fs.readFileSync('./test/data/entryOnly.xml')
    const greenButtonJson = await atomToGreenButtonJson(
      xml as unknown as string
    )

    const authorizationEntries = getEntriesByContentType(
      greenButtonJson,
      'Authorization'
    )

    assert.ok(authorizationEntries.length > 0)
  })

  it('Parses cc_customer_13.xml (Over 25 MB)', async () => {
    const xml = fs.readFileSync('./test/data/cc_customer_13.xml')
    const greenButtonJson = await atomToGreenButtonJson(
      xml as unknown as string
    )

    const localTimeParameters = getEntriesByContentType(
      greenButtonJson,
      'LocalTimeParameters'
    )

    assert.ok(localTimeParameters.length > 0)
  })
})

describe('GreenButtonFunctionBlockBuilder', () => {
  it('Adds a function block', () => {
    const builder = new GreenButtonFunctionBlockBuilder()

    builder.addFunctionBlock(1)
    builder.addFunctionBlock(10)

    const functionBlockString = `_${builder.toString()}_`

    assert.ok(functionBlockString.includes('_1_'))
    assert.ok(!functionBlockString.includes('_2_'))
  })

  it('Adds a function block by name', () => {
    const builder = new GreenButtonFunctionBlockBuilder()

    builder.addFunctionBlockByName('Common')

    const functionBlockString = `_${builder.toString()}_`

    assert.ok(functionBlockString.includes('_1_'))
    assert.ok(!functionBlockString.includes('_2_'))
  })

  it('Removes a function block', () => {
    const builder = new GreenButtonFunctionBlockBuilder()

    builder.addFunctionBlock(1)
    assert.ok(`_${builder.toString()}_`.includes('_1_'))

    builder.removeFunctionBlock(1)
    assert.ok(!`_${builder.toString()}_`.includes('_1_'))
  })

  it('Initializes builder by string', () => {
    const builder = new GreenButtonFunctionBlockBuilder('1_10')

    const functionBlockString = `_${builder.toString()}_`

    assert.ok(functionBlockString.includes('_1_'))
    assert.ok(!functionBlockString.includes('_2_'))
  })
})
