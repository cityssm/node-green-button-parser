import 'core-js';
import isUrl from 'is-url';
import Parser from 'rss-parser';
import xml2js from 'xml2js';
import { updateGreenButtonContent } from './contentUpdaters.js';
import { cleanContentJson } from './utilities.js';
const parser = new Parser();
export async function atomToGreenButtonJson(atomXmlOrUrl) {
    const atomJson = isUrl(atomXmlOrUrl)
        ? await parser.parseURL(atomXmlOrUrl)
        : await parser.parseString(atomXmlOrUrl);
    const greenButtonFeed = {
        title: atomJson.title ?? '',
        link: atomJson.link ?? '',
        updatedDate: new Date(atomJson.lastBuildDate),
        entries: []
    };
    for (const item of atomJson.items) {
        let contentJson = await xml2js.parseStringPromise(item.content ?? '', {
            ignoreAttrs: true,
            tagNameProcessors: [xml2js.processors.stripPrefix]
        });
        contentJson = Object.hasOwn(contentJson, 'div')
            ? contentJson.div
            : contentJson;
        cleanContentJson(contentJson);
        const contentType = Object.keys(contentJson)[0];
        let content = contentJson[contentType];
        if (contentType === 'IntervalBlock') {
            content = {
                contentType: 'IntervalBlock',
                intervalBlocks: (Array.isArray(content) ? content : [content])
            };
        }
        else if (contentType === 'MeterReading') {
            content = {
                contentType: 'MeterReading'
            };
        }
        else {
            content.contentType = contentType;
        }
        const greenButtonEntry = {
            id: item.guid ?? '',
            title: item.title ?? '',
            link: item.link ?? '',
            publishedDate: new Date(item.pubDate ?? ''),
            content
        };
        updateGreenButtonContent(greenButtonEntry.content);
        greenButtonFeed.entries.push(greenButtonEntry);
    }
    return greenButtonFeed;
}
