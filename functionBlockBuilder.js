const availableFunctionBlocks = Object.freeze({
    1: 'Common',
    2: 'Download My Data',
    3: 'Connect My Data',
    4: 'Interval Metering',
    5: 'Interval Electricity Metering',
    6: 'Demand Electricity Metering',
    7: 'Net Metering',
    8: 'Forward and Reverse Metering',
    9: 'Register Values',
    10: 'Gas',
    11: 'Water',
    12: 'Cost of Interval Data',
    13: 'Security and Privacy Classes',
    /**
     * @deprecated replaced by FB 31
     */
    14: 'Authorization and Authentication',
    15: 'Usage Summary',
    16: 'Usage Summary with Cost',
    17: 'Power Quality Summary',
    18: 'Multiple Usage Points',
    19: 'Partial Update Data',
    27: 'Usage Summary with Demands and Previous Day Attributes',
    28: 'Usage Summary Costs for Current Billing Period',
    29: 'Temperature Interval Metering',
    30: 'Common User Experience (DMD only)',
    31: 'Authorization and Authentication w/o Pre-Negotiated Scope',
    32: 'Resource Level REST',
    33: 'Management REST Services',
    34: 'SFTP for Bulk',
    35: 'REST for Bulk',
    36: 'Third Party Dynamic Registration',
    37: 'Query Parameters',
    38: 'On Demand Requests',
    39: 'PUSH Model',
    40: 'Offline Authorization',
    41: 'Manage ApplicationInformation Resource',
    44: 'Manage Authorization Resource',
    /**
     * @deprecated replaced by FB 51
     */
    46: 'Core Retail Customer',
    /**
     * @deprecated replaced by FB 67
     */
    47: 'REST for Retail Customer Bulk',
    /**
     * @deprecated replaced by FB 66
     */
    48: 'SFTP for Retail Customer Bulk',
    49: 'Retail Customer Management REST',
    50: 'Retail Customer Resource Level REST',
    51: 'Retail Customer Common',
    52: 'Retail Customer Download My Data',
    53: 'Retail Customer Connect My Data',
    54: 'Retail Customer Basic Information',
    55: 'Retail Customer Demographic Information',
    56: 'Retail Customer Billing Information',
    57: 'Retail Customer AccountAgreement Information',
    58: 'Retail Customer ServiceLocation Information',
    59: 'Retail Customer ServiceSupplier Information',
    60: 'Retail Customer Meter Information',
    61: 'Retail Customer EndDevice Information',
    62: 'Retail Customer ProgramDateIdMappings Information',
    64: 'Retail Customer Security and Privacy',
    65: 'Retail Customer Authorization and Authentication w/o Pre-Negotiated Scope',
    66: 'SFTP for Retail Customer Bulk',
    67: 'REST for Retail Customer Bulk',
    68: 'Retail Customer Query Parameters',
    69: 'Retail Customer PUSH Model',
    70: 'Retail Customer Offline Authorization'
});
function getFunctionBlockByName(functionBlockName) {
    const functionBlock = Object.keys(availableFunctionBlocks).find((possibleFunctionBlock) => {
        return (availableFunctionBlocks[possibleFunctionBlock] === functionBlockName);
    });
    if (functionBlock === undefined) {
        return undefined;
    }
    return Number.parseInt(functionBlock, 10);
}
export class GreenButtonFunctionBlockBuilder {
    #functionBlocks = new Set();
    constructor(functionBlockString = '') {
        const functionBlockSplit = functionBlockString.startsWith('FB=')
            ? functionBlockString.slice(3).split('_')
            : functionBlockString.split('_');
        for (const functionBlock of functionBlockSplit) {
            this.#functionBlocks.add(Number.parseInt(functionBlock, 10));
        }
    }
    addFunctionBlock(functionBlock) {
        this.#functionBlocks.add(functionBlock);
    }
    addFunctionBlockByName(functionBlockName) {
        const functionBlock = getFunctionBlockByName(functionBlockName);
        if (functionBlock !== undefined) {
            this.addFunctionBlock(functionBlock);
            return true;
        }
        return false;
    }
    removeFunctionBlock(functionBlock) {
        this.#functionBlocks.delete(functionBlock);
    }
    hasFunctionBlock(functionBlock) {
        return this.#functionBlocks.has(functionBlock);
    }
    toString() {
        return [...this.#functionBlocks.values()].join('_');
    }
}
