export function getEntriesByContentType(greenButtonJson, contentType) {
    const entries = [];
    for (const entry of greenButtonJson.entries) {
        if (entry.content[contentType] !== undefined) {
            entries.push(entry);
        }
    }
    return entries;
}
export function getEntriesByLink(greenButtonJson, link, relationship) {
    const entries = [];
    for (const entry of greenButtonJson.entries) {
        if (entry.links[relationship] !== undefined &&
            ((typeof entry.links[relationship] === 'string' &&
                entry.links[relationship] === link) ||
                entry.links[relationship]?.includes(link))) {
            entries.push(entry);
        }
    }
    return entries;
}
export function getReadingTypeEntryFromIntervalBlockEntry(greenButtonJson, entryWithIntevalBlock) {
    const possibleMeterReadingEntries = getEntriesByLink(greenButtonJson, entryWithIntevalBlock.links.up ?? '', 'related');
    const meterReadingEntries = possibleMeterReadingEntries.filter((possibleEntry) => {
        return possibleEntry.content.MeterReading !== undefined;
    });
    if (meterReadingEntries.length === 0) {
        return undefined;
    }
    for (const meterReadingEntry of meterReadingEntries) {
        for (const relatedLink of meterReadingEntry.links.related ?? []) {
            const possibleReadingTypeEntries = getEntriesByLink(greenButtonJson, relatedLink, 'self');
            const readingTypeEntries = possibleReadingTypeEntries.filter((possibleEntry) => {
                return possibleEntry.content.ReadingType !== undefined;
            });
            if (readingTypeEntries.length > 0) {
                return readingTypeEntries[0];
            }
        }
    }
}
export default {
    getEntriesByContentType,
    getEntriesByLink,
    getReadingTypeEntryFromIntervalBlockEntry
};
