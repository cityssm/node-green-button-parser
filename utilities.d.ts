import type { AtomJsonLink } from './types/atomTypes.js';
import type { GreenButtonLinks } from './types/entryTypes.js';
export declare function cleanContentJson(contentJson: any): void;
export declare function atomLinksToGreenButtonLinks(atomLinks?: AtomJsonLink[]): GreenButtonLinks;
type XmlProperty = string[] | Array<{
    _: string;
}>;
export declare function getFirstXmlString(xmlProperty?: XmlProperty): string;
export {};
