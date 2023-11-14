import xml2js from 'xml2js';
import { updateGreenButtonContent } from './contentUpdaters.js';
import { atomLinksToGreenButtonLinks, cleanContentJson, getFirstXmlString } from './utilities.js';
const parserOptions = {
    tagNameProcessors: [xml2js.processors.stripPrefix]
};
export async function atomToGreenButtonJson(atomXml) {
    const atomJson = (await xml2js.parseStringPromise(atomXml, parserOptions));
    let greenButtonFeed;
    let atomJsonEntries = [];
    if (atomJson.entry !== undefined) {
        greenButtonFeed = {
            id: getFirstXmlString(atomJson.entry.id),
            title: getFirstXmlString(atomJson.entry.title),
            links: atomLinksToGreenButtonLinks(atomJson.entry.link ?? [], false),
            updatedDate: atomJson.entry.updated !== undefined &&
                atomJson.entry.updated.length > 0
                ? new Date(atomJson.entry.updated[0])
                : undefined,
            entries: []
        };
        atomJsonEntries = [atomJson.entry];
    }
    else if (atomJson.feed !== undefined) {
        greenButtonFeed = {
            id: getFirstXmlString(atomJson.feed.id),
            title: getFirstXmlString(atomJson.feed.title),
            links: atomLinksToGreenButtonLinks(atomJson.feed.link ?? [], false),
            updatedDate: atomJson.feed.updated !== undefined && atomJson.feed.updated.length > 0
                ? new Date(atomJson.feed.updated[0])
                : undefined,
            entries: []
        };
        atomJsonEntries = atomJson.feed.entry ?? [];
    }
    else {
        throw new Error('Invalid Green Button XML');
    }
    for (const item of atomJsonEntries) {
        const content = item.content[0];
        cleanContentJson(content);
        const greenButtonEntry = {
            id: getFirstXmlString(item.id),
            title: getFirstXmlString(item.title),
            links: atomLinksToGreenButtonLinks(item.link ?? [], true),
            publishedDate: item.published === undefined
                ? undefined
                : new Date(item.published),
            updatedDate: item.updated === undefined
                ? undefined
                : new Date(item.updated),
            content: content
        };
        updateGreenButtonContent(greenButtonEntry.content);
        greenButtonFeed.entries.push(greenButtonEntry);
    }
    return greenButtonFeed;
}
