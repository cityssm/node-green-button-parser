import * as assert from 'node:assert';
import * as greenButtonParser from '../index.js';
describe('greenButtonParser', () => {
    describe('urlToJson', () => {
        it('Parses customer_8.xml (URL)', async () => {
            const greenButtonFeed = await greenButtonParser.atomToGreenButtonJson('https://raw.githubusercontent.com/cityssm/node-green-button-parser/main/test/data/customer_8.xml');
            assert.ok(greenButtonFeed.entries.some((possibleItem) => {
                console.log(possibleItem);
                return possibleItem.content.contentType === 'IntervalBlock';
            }));
        });
    });
    describe('fileToJson', () => {
        it('Parses customer_11.xml (File)', async () => {
            const greenButtonFeed = await greenButtonParser.atomFileToGreenButtonJson('./test/data/customer_11.xml');
            assert.ok(greenButtonFeed.entries.some((possibleItem) => {
                return possibleItem.content.contentType === 'IntervalBlock';
            }));
        });
        it('Parses namespace.xml', async () => {
            const greenButtonFeed = await greenButtonParser.atomFileToGreenButtonJson('./test/data/namespace.xml');
            assert.ok(greenButtonFeed.entries.some((possibleItem) => {
                return possibleItem.content.contentType === 'UsagePoint';
            }));
        });
    });
});
