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

export function getEntriesByContentType(
  greenButtonJson: GreenButtonJson,
  contentType: GreenButtonContentType
): GreenButtonEntry[] {
  const entries: GreenButtonEntry[] = []

  for (const entry of greenButtonJson.entries) {
    if (entry.content[contentType] !== undefined) {
      entries.push(entry)
    }
  }

  return entries
}

export function getEntriesByLink(
  greenButtonJson: GreenButtonJson,
  link: string,
  relationship: keyof GreenButtonLinks
): GreenButtonEntry[] {
  const entries: GreenButtonEntry[] = []

  for (const entry of greenButtonJson.entries) {
    if (
      entry.links[relationship] !== undefined &&
      ((typeof entry.links[relationship] === 'string' &&
        entry.links[relationship] === link) ||
        entry.links[relationship]?.includes(link))
    ) {
      entries.push(entry)
    }
  }

  return entries
}

export function getReadingTypeEntryFromIntervalBlockEntry(
  greenButtonJson: GreenButtonJson,
  entryWithIntevalBlock: GreenButtonEntryWithIntervalBlockContent
): GreenButtonEntryWithReadingTypeContent | undefined {
  const possibleMeterReadingEntries = getEntriesByLink(
    greenButtonJson,
    entryWithIntevalBlock.links.up ?? '',
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

  for (const meterReadingEntry of meterReadingEntries) {
    for (const relatedLink of meterReadingEntry.links.related ?? []) {
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
  }
}
