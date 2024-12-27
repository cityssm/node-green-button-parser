import type {
  GreenButtonContentType,
  GreenButtonEntry,
  GreenButtonEntryWithApplicationInformationContent,
  GreenButtonEntryWithAuthorizationContent,
  GreenButtonEntryWithBatchListContent,
  GreenButtonEntryWithCustomerAccountContent,
  GreenButtonEntryWithCustomerAgreementContent,
  GreenButtonEntryWithCustomerContent,
  GreenButtonEntryWithElectricPowerQualitySummaryContent,
  GreenButtonEntryWithIntervalBlockContent,
  GreenButtonEntryWithLocalTimeParametersContent,
  GreenButtonEntryWithMeterContent,
  GreenButtonEntryWithMeterReadingContent,
  GreenButtonEntryWithReadingTypeContent,
  GreenButtonEntryWithServiceLocationContent,
  GreenButtonEntryWithServiceStatusContent,
  GreenButtonEntryWithServiceSupplierContent,
  GreenButtonEntryWithUsagePointContent,
  GreenButtonEntryWithUsageSummaryContent,
  GreenButtonJson,
  GreenButtonLinks
} from './types/entryTypes.js'

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'ApplicationInformation'
): GreenButtonEntryWithApplicationInformationContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'Authorization'
): GreenButtonEntryWithAuthorizationContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'BatchList'
): GreenButtonEntryWithBatchListContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'Customer'
): GreenButtonEntryWithCustomerContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'CustomerAccount'
): GreenButtonEntryWithCustomerAccountContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'CustomerAgreement'
): GreenButtonEntryWithCustomerAgreementContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'ElectricPowerQualitySummary'
): GreenButtonEntryWithElectricPowerQualitySummaryContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'IntervalBlock'
): GreenButtonEntryWithIntervalBlockContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'LocalTimeParameters'
): GreenButtonEntryWithLocalTimeParametersContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'Meter'
): GreenButtonEntryWithMeterContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'MeterReading'
): GreenButtonEntryWithMeterReadingContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'ReadingType'
): GreenButtonEntryWithReadingTypeContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'ServiceLocation'
): GreenButtonEntryWithServiceLocationContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'ServiceStatus'
): GreenButtonEntryWithServiceStatusContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'ServiceSupplier'
): GreenButtonEntryWithServiceSupplierContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'UsagePoint'
): GreenButtonEntryWithUsagePointContent[]

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: 'UsageSummary'
): GreenButtonEntryWithUsageSummaryContent[]

/**
 * Filters entries in a Green Button object to only include entries of a given content type.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonContentType} contentType Content type
 * @returns {GreenButtonEntry[]} A filtered list of Green Button entries
 */
export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: GreenButtonContentType
): GreenButtonEntry[] {
  const entries: GreenButtonEntry[] = []

  for (const entry of greenButtonJson.entries) {
    if (Object.hasOwn(entry.content, contentType)) {
      entries.push(entry)
    }
  }

  return entries
}

/**
 * Filters entries in a Green Button object to only include entries with a specific link value.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {string} link The link to look for.
 * @param {keyof GreenButtonLinks} relationship The link relationship (i.e. self, up, related)
 * @returns {GreenButtonEntry[]} A filtered list of Green Button entries
 */
export function getEntriesByLink(
  greenButtonJson: GreenButtonJson,
  link: string,
  relationship: keyof GreenButtonLinks
): GreenButtonEntry[] {
  const entries: GreenButtonEntry[] = []

  for (const entry of greenButtonJson.entries) {
    if (
      Object.hasOwn(entry.links, relationship) &&
      ((typeof entry.links[relationship] === 'string' &&
        entry.links[relationship] === link) ||
        entry.links[relationship]?.includes(link))
    ) {
      entries.push(entry)
    }
  }

  return entries
}

/**
 * Finds the related MeterReading entry.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonEntryWithIntervalBlockContent} entryWithIntervalBlock A Green Button entry that includes IntervalBlock content.
 * @returns {GreenButtonEntryWithMeterReadingContent | undefined} A related Green button entry that includes MeterReading content.
 */
export function getMeterReadingEntryFromIntervalBlockEntry(
  greenButtonJson: GreenButtonJson,
  entryWithIntervalBlock: GreenButtonEntryWithIntervalBlockContent
): GreenButtonEntryWithMeterReadingContent | undefined {
  const possibleMeterReadingEntries = getEntriesByLink(
    greenButtonJson,
    entryWithIntervalBlock.links.up ?? '',
    'related'
  )

  const meterReadingEntries = possibleMeterReadingEntries.filter(
    (possibleEntry) => {
      return possibleEntry.content.MeterReading !== undefined
    }
  )

  if (meterReadingEntries.length === 0) {
    return undefined
  }

  return meterReadingEntries[0] as GreenButtonEntryWithMeterReadingContent
}

/**
 * Finds the related ReadingType entry.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonEntryWithMeterReadingContent} entryWithMeterReading A Green Button entry that includes MeterReading content.
 * @returns {GreenButtonEntryWithReadingTypeContent | undefined} A related Green Button entry with ReadingType content.
 */
export function getReadingTypeEntryFromMeterReadingEntry(
  greenButtonJson: GreenButtonJson,
  entryWithMeterReading: GreenButtonEntryWithMeterReadingContent
): GreenButtonEntryWithReadingTypeContent | undefined {
  for (const relatedLink of entryWithMeterReading.links.related ?? []) {
    const possibleReadingTypeEntries = getEntriesByLink(
      greenButtonJson,
      relatedLink,
      'self'
    )

    const readingTypeEntries = possibleReadingTypeEntries.filter(
      (possibleEntry) => {
        return possibleEntry.content.ReadingType !== undefined
      }
    )

    if (readingTypeEntries.length > 0) {
      return readingTypeEntries[0] as GreenButtonEntryWithReadingTypeContent
    }
  }

  return undefined
}

/**
 * Finds the related ReadingType entry.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonEntryWithIntervalBlockContent} entryWithIntervalBlock A Green Button entry that includes IntervalBlock content.
 * @returns {GreenButtonEntryWithReadingTypeContent | undefined} A related Green Button entry with ReadingType content.
 */
export function getReadingTypeEntryFromIntervalBlockEntry(
  greenButtonJson: GreenButtonJson,
  entryWithIntervalBlock: GreenButtonEntryWithIntervalBlockContent
): GreenButtonEntryWithReadingTypeContent | undefined {
  const meterReadingEntry = getMeterReadingEntryFromIntervalBlockEntry(
    greenButtonJson,
    entryWithIntervalBlock
  )

  if (meterReadingEntry === undefined) {
    return undefined
  }

  return getReadingTypeEntryFromMeterReadingEntry(
    greenButtonJson,
    meterReadingEntry
  )
}

/**
 * Finds the related UsagePoint entry.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonEntryWithMeterReadingContent | GreenButtonEntryWithUsageSummaryContent} entry A Green Button entry that includes either MeterReading or UsageSummary content.
 * @returns {GreenButtonEntryWithUsagePointContent | undefined} A related Green Button entry with UsagePoint content.
 */
export function getUsagePointEntryFromEntry(
  greenButtonJson: GreenButtonJson,
  entry:
    | GreenButtonEntryWithMeterReadingContent
    | GreenButtonEntryWithUsageSummaryContent
): GreenButtonEntryWithUsagePointContent | undefined {
  const possibleUsagePointEntries = getEntriesByLink(
    greenButtonJson,
    entry.links.up ?? '',
    'related'
  )

  const usagePointEntries = possibleUsagePointEntries.filter(
    (possibleEntry) => {
      return possibleEntry.content.UsagePoint !== undefined
    }
  )

  if (usagePointEntries.length > 0) {
    return usagePointEntries[0] as GreenButtonEntryWithUsagePointContent
  }
  return undefined
}

/**
 * Finds the related UsagePoint entry.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonEntryWithIntervalBlockContent} entryWithIntervalBlock A Green Button entry that includes IntervalBlock content.
 * @returns {GreenButtonEntryWithUsagePointContent | undefined} A related Green Button entry with UsagePoint content.
 */
export function getUsagePointEntryFromIntervalBlockEntry(
  greenButtonJson: GreenButtonJson,
  entryWithIntervalBlock: GreenButtonEntryWithIntervalBlockContent
): GreenButtonEntryWithUsagePointContent | undefined {
  const meterReadingEntry = getMeterReadingEntryFromIntervalBlockEntry(
    greenButtonJson,
    entryWithIntervalBlock
  )

  if (meterReadingEntry === undefined) {
    return undefined
  }

  return getUsagePointEntryFromEntry(greenButtonJson, meterReadingEntry)
}

export default {
  getEntriesByContentType,
  getEntriesByLink,
  getMeterReadingEntryFromIntervalBlockEntry,
  getReadingTypeEntryFromMeterReadingEntry,
  getReadingTypeEntryFromIntervalBlockEntry,
  getUsagePointEntryFromEntry,
  getUsagePointEntryFromIntervalBlockEntry
}
