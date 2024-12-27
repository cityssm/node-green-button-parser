/**
 * Filters entries in a Green Button object to only include entries of a given content type.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonContentType} contentType Content type
 * @returns {GreenButtonEntry[]} A filtered list of Green Button entries
 */
export function getEntriesByContentType(greenButtonJson, contentType) {
    const entries = [];
    for (const entry of greenButtonJson.entries) {
        if (Object.hasOwn(entry.content, contentType)) {
            entries.push(entry);
        }
    }
    return entries;
}
/**
 * Filters entries in a Green Button object to only include entries with a specific link value.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {string} link The link to look for.
 * @param {keyof GreenButtonLinks} relationship The link relationship (i.e. self, up, related)
 * @returns {GreenButtonEntry[]} A filtered list of Green Button entries
 */
export function getEntriesByLink(greenButtonJson, link, relationship) {
    const entries = [];
    for (const entry of greenButtonJson.entries) {
        if (Object.hasOwn(entry.links, relationship) &&
            ((typeof entry.links[relationship] === 'string' &&
                entry.links[relationship] === link) ||
                entry.links[relationship]?.includes(link))) {
            entries.push(entry);
        }
    }
    return entries;
}
/**
 * Finds the related MeterReading entry.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonEntryWithIntervalBlockContent} entryWithIntervalBlock A Green Button entry that includes IntervalBlock content.
 * @returns {GreenButtonEntryWithMeterReadingContent | undefined} A related Green button entry that includes MeterReading content.
 */
export function getMeterReadingEntryFromIntervalBlockEntry(greenButtonJson, entryWithIntervalBlock) {
    const possibleMeterReadingEntries = getEntriesByLink(greenButtonJson, entryWithIntervalBlock.links.up ?? '', 'related');
    const meterReadingEntries = possibleMeterReadingEntries.filter((possibleEntry) => {
        return possibleEntry.content.MeterReading !== undefined;
    });
    if (meterReadingEntries.length === 0) {
        return undefined;
    }
    return meterReadingEntries[0];
}
/**
 * Finds the related ReadingType entry.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonEntryWithMeterReadingContent} entryWithMeterReading A Green Button entry that includes MeterReading content.
 * @returns {GreenButtonEntryWithReadingTypeContent | undefined} A related Green Button entry with ReadingType content.
 */
export function getReadingTypeEntryFromMeterReadingEntry(greenButtonJson, entryWithMeterReading) {
    for (const relatedLink of entryWithMeterReading.links.related ?? []) {
        const possibleReadingTypeEntries = getEntriesByLink(greenButtonJson, relatedLink, 'self');
        const readingTypeEntries = possibleReadingTypeEntries.filter((possibleEntry) => {
            return possibleEntry.content.ReadingType !== undefined;
        });
        if (readingTypeEntries.length > 0) {
            return readingTypeEntries[0];
        }
    }
    return undefined;
}
/**
 * Finds the related ReadingType entry.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonEntryWithIntervalBlockContent} entryWithIntervalBlock A Green Button entry that includes IntervalBlock content.
 * @returns {GreenButtonEntryWithReadingTypeContent | undefined} A related Green Button entry with ReadingType content.
 */
export function getReadingTypeEntryFromIntervalBlockEntry(greenButtonJson, entryWithIntervalBlock) {
    const meterReadingEntry = getMeterReadingEntryFromIntervalBlockEntry(greenButtonJson, entryWithIntervalBlock);
    if (meterReadingEntry === undefined) {
        return undefined;
    }
    return getReadingTypeEntryFromMeterReadingEntry(greenButtonJson, meterReadingEntry);
}
/**
 * Finds the related UsagePoint entry.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonEntryWithMeterReadingContent | GreenButtonEntryWithUsageSummaryContent} entry A Green Button entry that includes either MeterReading or UsageSummary content.
 * @returns {GreenButtonEntryWithUsagePointContent | undefined} A related Green Button entry with UsagePoint content.
 */
export function getUsagePointEntryFromEntry(greenButtonJson, entry) {
    const possibleUsagePointEntries = getEntriesByLink(greenButtonJson, entry.links.up ?? '', 'related');
    const usagePointEntries = possibleUsagePointEntries.filter((possibleEntry) => {
        return possibleEntry.content.UsagePoint !== undefined;
    });
    if (usagePointEntries.length > 0) {
        return usagePointEntries[0];
    }
    return undefined;
}
/**
 * Finds the related UsagePoint entry.
 * @param {GreenButtonJson} greenButtonJson Green Button object
 * @param {GreenButtonEntryWithIntervalBlockContent} entryWithIntervalBlock A Green Button entry that includes IntervalBlock content.
 * @returns {GreenButtonEntryWithUsagePointContent | undefined} A related Green Button entry with UsagePoint content.
 */
export function getUsagePointEntryFromIntervalBlockEntry(greenButtonJson, entryWithIntervalBlock) {
    const meterReadingEntry = getMeterReadingEntryFromIntervalBlockEntry(greenButtonJson, entryWithIntervalBlock);
    if (meterReadingEntry === undefined) {
        return undefined;
    }
    return getUsagePointEntryFromEntry(greenButtonJson, meterReadingEntry);
}
export default {
    getEntriesByContentType,
    getEntriesByLink,
    getMeterReadingEntryFromIntervalBlockEntry,
    getReadingTypeEntryFromMeterReadingEntry,
    getReadingTypeEntryFromIntervalBlockEntry,
    getUsagePointEntryFromEntry,
    getUsagePointEntryFromIntervalBlockEntry
};
