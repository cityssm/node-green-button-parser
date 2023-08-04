// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/indent */

import type {
  GreenButtonContent,
  GreenButtonContentType
} from './entryTypes.js'

export interface AtomJson {
  feed?: {
    id?: string[]
    title?: string[]
    updated?: string[]
    link?: AtomJsonLink[]
    entry?: AtomJsonEntry[]
  }
  entry?: AtomJsonEntry
}

export interface AtomJsonLink {
  $: {
    rel: 'self' | 'up' | 'related'
    href: string
  }
}

export interface AtomJsonEntry {
  id?: string[]
  title?: string[]
  published?: string[]
  updated?: string[]
  link?: AtomJsonLink[]
  content: Array<Record<GreenButtonContentType, GreenButtonContent>>
}
