export function getEntriesByContentType(contentType, greenButtonJson) {
    const entries = [];
    for (const entry of greenButtonJson.entries) {
        if (entry.content.contentType === contentType) {
            entries.push(entry);
        }
    }
    return entries;
}
