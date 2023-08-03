import 'core-js'

import xml2js from 'xml2js'

import { updateGreenButtonContent } from './contentUpdaters.js'
import type { AtomJson } from './types/atomTypes.js'
import type {
  GreenButtonEntry,
  GreenButtonEntryContent,
  GreenButtonJson
} from './types/entryTypes.js'
import {
  atomLinksToGreenButtonLinks,
  cleanContentJson,
  getFirstXmlString
} from './utilities.js'

const parserOptions: xml2js.ParserOptions = {
  tagNameProcessors: [xml2js.processors.stripPrefix]
}

export async function atomToGreenButtonJson(
  atomXml: string
): Promise<GreenButtonJson> {
  const atomJson = (await xml2js.parseStringPromise(
    atomXml,
    parserOptions
  )) as AtomJson

  const greenButtonFeed: GreenButtonJson = {
    id: getFirstXmlString(atomJson.feed.id),
    title: getFirstXmlString(atomJson.feed.title),
    links: atomLinksToGreenButtonLinks(atomJson.feed.link ?? [], false),
    updatedDate:
      atomJson.feed.updated !== undefined && atomJson.feed.updated.length > 0
        ? new Date(atomJson.feed.updated[0])
        : undefined,
    entries: []
  }

  for (const item of atomJson.feed.entry ?? []) {
    const content = item.content[0]

    cleanContentJson(content)

    const greenButtonEntry: GreenButtonEntry = {
      id: getFirstXmlString(item.id),
      title: getFirstXmlString(item.title),
      links: atomLinksToGreenButtonLinks(item.link ?? [], true),
      publishedDate:
        item.published === undefined
          ? undefined
          : new Date(item.published as unknown as string),
      updatedDate:
        item.updated === undefined
          ? undefined
          : new Date(item.updated as unknown as string),
      content: content as unknown as GreenButtonEntryContent
    }

    updateGreenButtonContent(greenButtonEntry.content)

    greenButtonFeed.entries.push(greenButtonEntry)
  }

  return greenButtonFeed
}
