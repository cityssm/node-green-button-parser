import isUrl from 'is-url';
import Parser from 'rss-parser';
import xml2js from 'xml2js';
import { clearContentJson } from './utilities.js';
const parser = new Parser();
export async function atomToGreenButtonJson(atomXmlOrUrl) {
    const atomJson = isUrl(atomXmlOrUrl)
        ? await parser.parseURL(atomXmlOrUrl)
        : await parser.parseString(atomXmlOrUrl);
    const greenButtonFeed = {
        title: atomJson.title ?? '',
        link: atomJson.link ?? '',
        updatedDate: new Date(atomJson.lastBuildDate),
        items: []
    };
    for (const item of atomJson.items) {
        let contentJson = await xml2js.parseStringPromise(item.content ?? '', {
            ignoreAttrs: true,
            tagNameProcessors: [xml2js.processors.stripPrefix]
        });
        contentJson = Object.hasOwn(contentJson, 'div')
            ? contentJson.div
            : contentJson;
        clearContentJson(contentJson);
        const contentType = Object.keys(contentJson)[0];
        const greenButtonItem = Object.assign({
            id: item.guid ?? '',
            title: item.title ?? '',
            link: item.link ?? '',
            publishedDate: new Date(item.pubDate ?? ''),
            contentType
        }, contentJson[contentType]);
        greenButtonFeed.items.push(greenButtonItem);
    }
    return greenButtonFeed;
}
