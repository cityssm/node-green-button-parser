// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/indent */

import type { GreenButtonContentType } from './types/contentTypes.js'
import type {
  ApplicationInformationEntry,
  AuthorizationEntry,
  BatchListEntry,
  CustomerAccountEntry,
  CustomerAgreementEntry,
  CustomerEntry,
  ElectricPowerQualitySummaryEntry,
  GreenButtonEntry,
  GreenButtonJson,
  IntervalBlockEntry,
  LocalTimeParametersEntry,
  MeterEntry,
  MeterReadingEntry,
  ReadingTypeEntry,
  ServiceLocationEntry,
  ServiceStatusEntry,
  ServiceSupplierEntry,
  UsagePointEntry,
  UsageSummaryEntry
} from './types/entryTypes.js'

export function getEntriesByContentType(
  contentType: 'ApplicationInformation',
  greenButtonJson: GreenButtonJson
): ApplicationInformationEntry[]

export function getEntriesByContentType(
  contentType: 'Authorization',
  greenButtonJson: GreenButtonJson
): AuthorizationEntry[]

export function getEntriesByContentType(
  contentType: 'BatchList',
  greenButtonJson: GreenButtonJson
): BatchListEntry[]

export function getEntriesByContentType(
  contentType: 'Customer',
  greenButtonJson: GreenButtonJson
): CustomerEntry[]

export function getEntriesByContentType(
  contentType: 'CustomerAccount',
  greenButtonJson: GreenButtonJson
): CustomerAccountEntry[]

export function getEntriesByContentType(
  contentType: 'CustomerAgreement',
  greenButtonJson: GreenButtonJson
): CustomerAgreementEntry[]

export function getEntriesByContentType(
  contentType: 'ElectricPowerQualitySummary',
  greenButtonJson: GreenButtonJson
): ElectricPowerQualitySummaryEntry[]

export function getEntriesByContentType(
  contentType: 'IntervalBlock',
  greenButtonJson: GreenButtonJson
): IntervalBlockEntry[]

export function getEntriesByContentType(
  contentType: 'LocalTimeParameters',
  greenButtonJson: GreenButtonJson
): LocalTimeParametersEntry[]

export function getEntriesByContentType(
  contentType: 'Meter',
  greenButtonJson: GreenButtonJson
): MeterEntry[]

export function getEntriesByContentType(
  contentType: 'MeterReading',
  greenButtonJson: GreenButtonJson
): MeterReadingEntry[]

export function getEntriesByContentType(
  contentType: 'ReadingType',
  greenButtonJson: GreenButtonJson
): ReadingTypeEntry[]

export function getEntriesByContentType(
  contentType: 'ServiceLocation',
  greenButtonJson: GreenButtonJson
): ServiceLocationEntry[]

export function getEntriesByContentType(
  contentType: 'ServiceStatus',
  greenButtonJson: GreenButtonJson
): ServiceStatusEntry[]

export function getEntriesByContentType(
  contentType: 'ServiceSupplier',
  greenButtonJson: GreenButtonJson
): ServiceSupplierEntry[]

export function getEntriesByContentType(
  contentType: 'UsagePoint',
  greenButtonJson: GreenButtonJson
): UsagePointEntry[]

export function getEntriesByContentType(
  contentType: 'UsageSummary',
  greenButtonJson: GreenButtonJson
): UsageSummaryEntry[]

export function getEntriesByContentType(
  contentType: GreenButtonContentType,
  greenButtonJson: GreenButtonJson
): GreenButtonEntry[] {
  const entries: GreenButtonEntry[] = []

  for (const entry of greenButtonJson.entries) {
    if (entry.content.contentType === contentType) {
      entries.push(entry)
    }
  }

  return entries
}
