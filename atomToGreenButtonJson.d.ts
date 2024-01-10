import type { GreenButtonJson } from './types/entryTypes.js';
/**
 * Parses a string of Green Button XML into a JavaScript object.
 * @param {string} atomXml A string of valid Green Button XML.
 * @returns {GreenButtonJson} Green Button object
 */
export declare function atomToGreenButtonJson(atomXml: string): Promise<GreenButtonJson>;
