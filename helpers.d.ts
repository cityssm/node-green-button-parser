import type { GreenButtonEntry, GreenButtonEntryWithApplicationInformationContent, GreenButtonEntryWithAuthorizationContent, GreenButtonEntryWithBatchListContent, GreenButtonEntryWithCustomerAccountContent, GreenButtonEntryWithCustomerAgreementContent, GreenButtonEntryWithCustomerContent, GreenButtonEntryWithElectricPowerQualitySummaryContent, GreenButtonEntryWithIntervalBlockContent, GreenButtonEntryWithLocalTimeParametersContent, GreenButtonEntryWithMeterContent, GreenButtonEntryWithMeterReadingContent, GreenButtonEntryWithReadingTypeContent, GreenButtonEntryWithServiceLocationContent, GreenButtonEntryWithServiceStatusContent, GreenButtonEntryWithServiceSupplierContent, GreenButtonEntryWithUsagePointContent, GreenButtonEntryWithUsageSummaryContent, GreenButtonJson, GreenButtonLinks } from './types/entryTypes.js';
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'ApplicationInformation'): GreenButtonEntryWithApplicationInformationContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'Authorization'): GreenButtonEntryWithAuthorizationContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'BatchList'): GreenButtonEntryWithBatchListContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'Customer'): GreenButtonEntryWithCustomerContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'CustomerAccount'): GreenButtonEntryWithCustomerAccountContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'CustomerAgreement'): GreenButtonEntryWithCustomerAgreementContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'ElectricPowerQualitySummary'): GreenButtonEntryWithElectricPowerQualitySummaryContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'IntervalBlock'): GreenButtonEntryWithIntervalBlockContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'LocalTimeParameters'): GreenButtonEntryWithLocalTimeParametersContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'Meter'): GreenButtonEntryWithMeterContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'MeterReading'): GreenButtonEntryWithMeterReadingContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'ReadingType'): GreenButtonEntryWithReadingTypeContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'ServiceLocation'): GreenButtonEntryWithServiceLocationContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'ServiceStatus'): GreenButtonEntryWithServiceStatusContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'ServiceSupplier'): GreenButtonEntryWithServiceSupplierContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'UsagePoint'): GreenButtonEntryWithUsagePointContent[];
export declare function getEntriesByContentType(greenButtonJson: GreenButtonJson, contentType: 'UsageSummary'): GreenButtonEntryWithUsageSummaryContent[];
/**
 * Filters entries in a Green Button object to only include entries with a specific link value.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {string} link The link to look for.
 * @param {keyof GreenButtonLinks} relationship The link relationship (i.e. self, up, related)
 * @returns {GreenButtonEntry[]} A filtered list of Green Button entries
 */
export declare function getEntriesByLink(greenButtonJson: GreenButtonJson, link: string, relationship: keyof GreenButtonLinks): GreenButtonEntry[];
/**
 * Finds the related MeterReading entry.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonEntryWithIntervalBlockContent} entryWithIntervalBlock A Green Button entry that includes IntervalBlock content.
 * @returns {GreenButtonEntryWithMeterReadingContent | undefined} A related Green button entry that includes MeterReading content.
 */
export declare function getMeterReadingEntryFromIntervalBlockEntry(greenButtonJson: GreenButtonJson, entryWithIntervalBlock: GreenButtonEntryWithIntervalBlockContent): GreenButtonEntryWithMeterReadingContent | undefined;
/**
 * Finds the related ReadingType entry.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonEntryWithMeterReadingContent} entryWithMeterReading A Green Button entry that includes MeterReading content.
 * @returns {GreenButtonEntryWithReadingTypeContent | undefined} A related Green Button entry with ReadingType content.
 */
export declare function getReadingTypeEntryFromMeterReadingEntry(greenButtonJson: GreenButtonJson, entryWithMeterReading: GreenButtonEntryWithMeterReadingContent): GreenButtonEntryWithReadingTypeContent | undefined;
/**
 * Finds the related ReadingType entry.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonEntryWithIntervalBlockContent} entryWithIntervalBlock A Green Button entry that includes IntervalBlock content.
 * @returns {GreenButtonEntryWithReadingTypeContent | undefined} A related Green Button entry with ReadingType content.
 */
export declare function getReadingTypeEntryFromIntervalBlockEntry(greenButtonJson: GreenButtonJson, entryWithIntervalBlock: GreenButtonEntryWithIntervalBlockContent): GreenButtonEntryWithReadingTypeContent | undefined;
/**
 * Finds the related UsagePoint entry.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonEntryWithMeterReadingContent | GreenButtonEntryWithUsageSummaryContent} entry A Green Button entry that includes either MeterReading or UsageSummary content.
 * @returns {GreenButtonEntryWithUsagePointContent | undefined} A related Green Button entry with UsagePoint content.
 */
export declare function getUsagePointEntryFromEntry(greenButtonJson: GreenButtonJson, entry: GreenButtonEntryWithMeterReadingContent | GreenButtonEntryWithUsageSummaryContent): GreenButtonEntryWithUsagePointContent | undefined;
/**
 * Finds the related UsagePoint entry.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonEntryWithIntervalBlockContent} entryWithIntervalBlock A Green Button entry that includes IntervalBlock content.
 * @returns {GreenButtonEntryWithUsagePointContent | undefined} A related Green Button entry with UsagePoint content.
 */
export declare function getUsagePointEntryFromIntervalBlockEntry(greenButtonJson: GreenButtonJson, entryWithIntervalBlock: GreenButtonEntryWithIntervalBlockContent): GreenButtonEntryWithUsagePointContent | undefined;
declare const _default: {
    getEntriesByContentType: typeof getEntriesByContentType;
    getEntriesByLink: typeof getEntriesByLink;
    getMeterReadingEntryFromIntervalBlockEntry: typeof getMeterReadingEntryFromIntervalBlockEntry;
    getReadingTypeEntryFromMeterReadingEntry: typeof getReadingTypeEntryFromMeterReadingEntry;
    getReadingTypeEntryFromIntervalBlockEntry: typeof getReadingTypeEntryFromIntervalBlockEntry;
    getUsagePointEntryFromEntry: typeof getUsagePointEntryFromEntry;
    getUsagePointEntryFromIntervalBlockEntry: typeof getUsagePointEntryFromIntervalBlockEntry;
};
export default _default;
