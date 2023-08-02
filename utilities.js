const numberRegExp = /^-?(?:\d*\.)?\d+$/;
export function cleanContentJson(contentJson) {
    delete contentJson.$;
    if (Object.keys(contentJson).length === 1 && contentJson._ !== undefined) {
        contentJson = contentJson._;
    }
    for (const key of Object.keys(contentJson)) {
        if (Array.isArray(contentJson[key]) &&
            contentJson[key].length === 1 &&
            key !== 'IntervalBlock') {
            contentJson[key] = contentJson[key][0];
        }
        if (typeof contentJson[key] === 'string' &&
            contentJson[key].length > 0 &&
            numberRegExp.test(contentJson[key])) {
            contentJson[key] = Number(contentJson[key]);
        }
        else if (typeof contentJson[key] === 'object') {
            cleanContentJson(contentJson[key]);
        }
    }
}
export function atomLinksToGreenButtonLinks(atomLinks) {
    const linksJson = {
        related: []
    };
    for (const atomLink of atomLinks ?? []) {
        if (atomLink.$.rel === 'related') {
            linksJson.related?.push(atomLink.$.href);
        }
        else {
            linksJson[atomLink.$.rel] = atomLink.$.href;
        }
    }
    if (linksJson.related?.length === 0) {
        delete linksJson.related;
    }
    return linksJson;
}
export function getFirstXmlString(xmlProperty) {
    if (xmlProperty === undefined || xmlProperty.length === 0) {
        return '';
    }
    const first = xmlProperty[0];
    if (typeof first === 'string') {
        return first;
    }
    return first._;
}
