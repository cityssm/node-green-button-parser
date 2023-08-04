import assert from 'node:assert';
import fs from 'node:fs';
import { getEntriesByContentType, getReadingTypeEntryFromIntervalBlockEntry } from '../helpers.js';
import { atomToGreenButtonJson } from '../index.js';
describe('greenButtonParser', () => {
    it('Parses namespace.xml, should strip off namespace prefixes', async () => {
        const xml = fs.readFileSync('./test/data/namespace.xml');
        const greenButtonJson = await atomToGreenButtonJson(xml);
        assert.ok(greenButtonJson.entries.some((possibleItem) => {
            return Object.hasOwn(possibleItem.content, 'UsagePoint');
        }));
    });
    it('Parses intervals_APUC000000_electric.xml', async () => {
        const xml = fs.readFileSync('./test/data/intervals_APUC000000_electric.xml');
        const greenButtonJson = await atomToGreenButtonJson(xml);
        const intervalBlockEntries = getEntriesByContentType(greenButtonJson, 'IntervalBlock');
        assert.ok(intervalBlockEntries.length > 0);
        const readingTypeEntry = getReadingTypeEntryFromIntervalBlockEntry(greenButtonJson, intervalBlockEntries[0]);
        assert.ok(readingTypeEntry !== undefined);
    });
    it('Parses entryOnly.xml', async () => {
        const xml = fs.readFileSync('./test/data/entryOnly.xml');
        const greenButtonJson = await atomToGreenButtonJson(xml);
        const authorizationEntries = getEntriesByContentType(greenButtonJson, 'Authorization');
        assert.ok(authorizationEntries.length > 0);
    });
});
