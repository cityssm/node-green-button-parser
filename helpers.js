export function getEntriesByContentType(greenButtonJson, contentType) {
    const entries = [];
    for (const entry of greenButtonJson.entries) {
        if (Object.hasOwn(entry.content, contentType)) {
            entries.push(entry);
        }
    }
    return entries;
}
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
export function getReadingTypeEntryFromIntervalBlockEntry(greenButtonJson, entryWithIntervalBlock) {
    const meterReadingEntry = getMeterReadingEntryFromIntervalBlockEntry(greenButtonJson, entryWithIntervalBlock);
    if (meterReadingEntry === undefined) {
        return undefined;
    }
    return getReadingTypeEntryFromMeterReadingEntry(greenButtonJson, meterReadingEntry);
}
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
