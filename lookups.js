// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable @cspell/spellchecker */
/*
 * Application Information
 */
export const dataCustodianApplicationStatuses = Object.freeze({
    1: 'Review',
    2: 'Production (Live)',
    3: 'On Hold',
    4: 'Revoked'
});
export const thirdPartyApplicationStatuses = Object.freeze({
    1: 'Development',
    2: 'ReviewTest',
    3: 'Production',
    4: 'Retired'
});
export const thirdPartyApplicationTypes = Object.freeze({
    1: 'Web',
    2: 'Desktop',
    3: 'Mobile',
    4: 'Device'
});
export const thirdPartyApplicationUses = Object.freeze({
    1: 'EnergyManagement',
    2: 'Comparisons',
    3: 'Government',
    4: 'Academic',
    5: 'LawEnforcement'
});
export const grantTypes = Object.freeze({
    client_credentials: 'Client Credentials',
    authorization_code: 'Authorization Code',
    refresh_token: 'Refresh Token'
});
export const responseTypes = Object.freeze({
    code: 'Code'
});
/*
 * Authorization
 */
export const authorizationStatuses = Object.freeze({
    0: 'Revoked',
    1: 'Active',
    2: 'Denied'
});
export const tokenTypes = Object.freeze({
    Bearer: 'Bearer'
});
export const authorizationErrors = Object.freeze({
    invalid_request: 'Invalid Request',
    invalid_client: 'Invalid Client',
    invalid_grant: 'Invalid Grant',
    unauthorized_client: 'Unauthorized Client',
    unsupported_grant_type: 'Unsupported Grant Type',
    invalid_redirect_uri: 'Invalid Redirect URI',
    invalid_client_metadata: 'Invalid Client Metadata',
    invalid_client_id: 'Invalid Client ID',
    access_denied: 'Access Denied',
    unsupported_response_type: 'Unsupported Response Type',
    server_error: 'Server Error',
    temporarily_unavailable: 'Temporarily Unavailable'
});
/*
 * Customer
 */
export const customerKinds = Object.freeze({
    residential: 'Residential customer',
    residentialAndCommercial: 'Residential and commercial customer',
    residentialAndStreetlight: 'Residential and streetlight customer',
    residentialStreetlightOthers: 'Residential streetlight or other related customer',
    residentialFarmService: 'Residential farm service customer',
    commercialIndustrial: 'Commercial industrial customer',
    pumpingLoad: 'Pumping load customer',
    windMachine: 'Wind machine customer',
    energyServiceSupplier: 'Customer as energy service supplier',
    energyServiceScheduler: 'Customer as energy service scheduler',
    enterprise: 'Represents the owning enterprise',
    regionalOperator: 'Represents a local operator of a larger enterprise',
    subsidiary: 'A subsidiary of a larger enterprise',
    internalUse: 'An internal use customer',
    other: 'Other kind of customer'
});
/*
 * Customer Account
 */
export const notificationMethodKinds = Object.freeze({
    call: 'Telephone call',
    email: 'Email message',
    letter: 'Letter',
    other: 'Other',
    ivr: 'Interactive Voice Response system'
});
/*
 * Customer Agreement
 */
export const enrollmentStatuses = Object.freeze({
    unenrolled: 'Currently not enrolled',
    enrolled: 'Currently enrolled',
    enrolledPending: 'Currently pending enrollment'
});
/*
 * Interval Block
 */
export const readingQualities = Object.freeze({
    0: 'Valid',
    7: 'Manually edited',
    8: 'Estimated using reference day',
    9: 'Estimated using linear interpolation',
    10: 'Questionable',
    11: 'Derived',
    12: 'Projected (forecast)',
    13: 'Mixed',
    14: 'Raw',
    15: 'Normalized for weather',
    16: 'Other',
    17: 'Validated',
    18: 'Verified',
    19: 'Revenue Quality'
});
/*
 * Meter
 */
export const meterMultiplierKinds = Object.freeze({
    kH: 'Meter watt-hour constant',
    transformerRatio: "The ratio of a transformer's primary and secondary windings",
    kR: 'Register multiplier',
    kE: 'Test constant',
    ctRatio: 'Current transformer ratio',
    ptRatio: 'Potential transformer ratio'
});
/*
 * Reading Type
 */
export const accumulationBehaviours = Object.freeze({
    0: 'None',
    1: 'Bulk Quantity',
    2: 'Continuous Cumulative',
    3: 'Cumulative',
    4: 'Delta Data',
    6: 'Indicating',
    9: 'Summation',
    10: 'Time Delay',
    12: 'Instantaneous',
    13: 'Latching Quantity',
    14: 'Bounded Quantity'
});
export const commodities = Object.freeze({
    0: 'None',
    1: 'Electricity Secondary Metered',
    2: 'Electricity Primary Metered',
    3: 'Communication',
    4: 'Air',
    5: 'Insulative Gas',
    6: 'Insulative Oil',
    7: 'Natural Gas',
    8: 'Propane',
    9: 'Potable Water',
    10: 'Steam',
    11: 'Waste Water',
    12: 'Heating Fluid',
    13: 'Cooling Fluid',
    14: 'Nonpotable Water',
    15: 'NOx',
    16: 'SO2',
    17: 'CH4',
    18: 'CO2',
    19: 'Carbon',
    20: 'HCH',
    21: 'PFC',
    22: 'SF6',
    23: 'TV Licence',
    24: 'Internet',
    25: 'Refuse',
    26: 'Electricity Transmission Metered'
});
export const dataQualifiers = Object.freeze({
    0: 'None',
    2: 'Average',
    4: 'Excess',
    5: 'High Threshold',
    7: 'Low Threshold',
    8: 'Maximum',
    9: 'Minimum',
    11: 'Nominal',
    12: 'Normal',
    16: 'Second Maximum',
    17: 'Second Minimum',
    23: 'Third Maximum',
    24: 'Fourth Maximum',
    25: 'Fifth Maximum',
    26: 'Sum'
});
export const flowDirections = Object.freeze({
    0: 'None',
    1: 'Forward',
    2: 'Lagging',
    3: 'Leading',
    4: 'Net',
    5: 'Q1 plus Q2',
    7: 'Q1 plus Q3',
    8: 'Q1 plus Q4',
    9: 'Q1 minus Q4',
    10: 'Q2 plus Q3',
    11: 'Q2 plus Q4',
    12: 'Q2 minus Q3',
    13: 'Q3 plus Q4',
    14: 'Q3 minus Q2',
    15: 'Quadrant 1',
    16: 'Quadrant 2',
    17: 'Quadrant 3',
    18: 'Quadrant 4',
    19: 'Reverse',
    20: 'Total',
    21: 'Total By Phase'
});
export const readingTypeKinds = Object.freeze({
    0: 'None',
    2: 'Apparent Power Factor',
    3: 'Currency',
    4: 'Current',
    5: 'Current Angle',
    6: 'Current Imbalance',
    7: 'Date',
    8: 'Demand',
    9: 'Distance',
    10: 'Distortion Volt Amperes',
    11: 'Energization',
    12: 'Energy',
    13: 'Energization Load Side',
    14: 'Fan',
    15: 'Frequency',
    16: 'Funds',
    17: 'IEEE 1366 ASAI',
    18: 'IEEE 1366 ASIDI',
    19: 'IEEE 1366 ASIFI',
    20: 'IEEE 1366 CAIDI',
    21: 'IEEE 1366 CAIFI',
    22: 'IEEE 1366 CEMIn',
    23: 'IEEE 1366 CEMSMIn',
    24: 'IEEE 1366 CTAIDI',
    25: 'IEEE 1366 MAIFI',
    26: 'IEEE 1366 MAIFIe',
    27: 'IEEE 1366 SAIDI',
    28: 'IEEE 1366 SAIFI',
    31: 'Line Losses',
    32: 'Losses',
    33: 'Negative Sequence',
    34: 'Phasor Power Factor',
    35: 'Phasor Reactive Power',
    36: 'Positive Sequence',
    37: 'Power',
    38: 'Power Factor',
    40: 'Quantity Power',
    41: 'Sag',
    42: 'Swell',
    43: 'Switch Position',
    44: 'Tap Position',
    45: 'Tariff Rate',
    46: 'Temperature',
    47: 'Total Harmonic Distortion',
    48: 'Transformer Losses',
    49: 'Unipede Voltage Dip 10 to 15',
    50: 'Unipede Voltage Dip 15 to 30',
    51: 'Unipede Voltage Dip 30 to 60',
    52: 'Unipede Voltage Dip 60 to 90',
    53: 'Unipede Voltage Dip 90 to 100',
    54: 'Voltage',
    55: 'Voltage Angle',
    56: 'Voltage Excursion',
    57: 'Voltage Imbalance',
    58: 'Volume',
    59: 'Zero Flow Duration',
    60: 'Zero Sequence',
    64: 'Distortion Power Factor',
    81: 'Frequency Excursion',
    90: 'Application Context',
    91: 'Ap Title',
    92: 'Asset Number',
    93: 'Bandwidth',
    94: 'Battery Voltage',
    95: 'Broadcast Address',
    96: 'Device Address Type 1',
    97: 'Device Address Type 2',
    98: 'Device Address Type 3',
    99: 'Device Address Type 4',
    100: 'Device Class',
    101: 'Electronic Serial Number',
    102: 'End Device ID',
    103: 'Group Address Type 1',
    104: 'Group Address Type 2',
    105: 'Group Address Type 3',
    106: 'Group Address Type 4',
    107: 'IP Address',
    108: 'MAC Address',
    109: 'Manufacturing Assigned Configuration ID',
    110: 'Manufacturing Assigned Physical Serial Number',
    111: 'Manufacturing Assigned Product Number',
    112: 'Manufacturing Assigned Unique Communication Address',
    113: 'Multi Cast Address',
    114: 'One Way Address',
    115: 'Signal Strength',
    116: 'Two Way Address',
    117: 'Signal to Noise Ratio',
    118: 'Alarm',
    119: 'Battery Carryover',
    120: 'Data Overflow Alarm',
    121: 'Demand Limit',
    122: 'Demand Reset',
    123: 'Diagnostic',
    124: 'Emergency Limit',
    125: 'Encoder Tamper',
    126: 'IEEE 1366 Momentary Interruption',
    127: 'IEEE 1366 Momentary Interruption Event',
    128: 'IEEE 1366 Sustained Interruption',
    129: 'Interruption Behaviour',
    130: 'Inversion Tamper',
    131: 'Load Interrupt',
    132: 'Load Shed',
    133: 'Maintenance',
    134: 'Physical Tamper',
    135: 'Power Loss Tamper',
    136: 'Power Outage',
    137: 'Power Quality',
    138: 'Power Restoration',
    139: 'Programmed',
    140: 'Pushbutton',
    141: 'Relay Activation',
    142: 'Relay Cycle',
    143: 'Removal Tamper',
    144: 'Reprogramming Tamper',
    145: 'Reverse Rotation Tamper',
    146: 'Switch Armed',
    147: 'Switch Disabled',
    148: 'Tamper',
    149: 'Watchdog Timeout',
    150: 'Bill Last Period',
    151: 'Bill To Date',
    152: 'Bill Carryover',
    153: 'Connection Fee',
    154: 'Audible Volume',
    155: 'Volumetric Flow'
});
export const phaseCodes = Object.freeze({
    225: 'ABCN',
    224: 'ABC',
    193: 'ABN',
    41: 'ACN',
    97: 'BCN',
    132: 'AB',
    96: 'AC',
    66: 'BC',
    129: 'AN',
    65: 'BN',
    33: 'CN',
    128: 'A',
    64: 'B',
    32: 'C',
    16: 'N',
    272: 'S2N',
    784: 'S12N',
    528: 'S1N',
    256: 'S2',
    768: 'S12',
    769: 'S12N',
    0: 'None',
    136: 'AtoAv',
    72: 'BAv',
    40: 'CAv',
    17: 'NG',
    512: 'S1'
});
export const timeAttributes = Object.freeze({
    0: 'None',
    8: 'Billing Period',
    11: 'Daily',
    13: 'Monthly',
    22: 'Seasonal',
    24: 'Weekly',
    32: 'Specified Period'
});
export const measuringPeriods = Object.freeze({
    0: 'None',
    1: 'Ten Minute',
    2: 'Fifteen Minute',
    3: 'One Minute',
    4: 'Twenty Four Hour',
    5: 'Thirty Minute',
    6: 'Five Minute',
    7: 'Sixty Minute',
    10: 'Two Minute',
    14: 'Three Minute',
    15: 'Present',
    16: 'Previous',
    31: 'Twenty Minute',
    50: 'Fixed Block 60 Min',
    51: 'Fixed Block 30 Min',
    52: 'Fixed Block 20 Min',
    53: 'Fixed Block 15 Min',
    54: 'Fixed Block 10 Min',
    55: 'Fixed Block 5 Min',
    56: 'Fixed Block 1 Min',
    57: 'Rolling Block 60 Min Interval 30 Min Sub Interval',
    58: 'Rolling Block 60 Min Interval 20 Min Sub Interval',
    59: 'Rolling Block 60 Min Interval 15 Min Sub Interval',
    60: 'Rolling Block 60 Min Interval 12 Min Sub Interval',
    61: 'Rolling Block 60 Min Interval 10 Min Sub Interval',
    62: 'Rolling Block 60 Min Interval 6 Min Sub Interval',
    63: 'Rolling Block 60 Min Interval 5 Min Sub Interval',
    64: 'Rolling Block 60 Min Interval 4 Min Sub Interval',
    65: 'Rolling Block 30 Min Interval 15 Min Sub Interval',
    66: 'Rolling Block 30 Min Interval 10 Min Sub Interval',
    67: 'Rolling Block 30 Min Interval 6 Min Sub Interval',
    68: 'Rolling Block 30 Min Interval 5 Min Sub Interval',
    69: 'Rolling Block 30 Min Interval 3 Min Sub Interval',
    70: 'Rolling Block 30 Min Interval 2 Min Sub Interval',
    71: 'Rolling Block 15 Min Interval 5 Min Sub Interval',
    72: 'Rolling Block 15 Min Interval 3 Min Sub Interval',
    73: 'Rolling Block 15 Min Interval 1 Min Sub Interval',
    74: 'Rolling Block 10 Min Interval 5 Min Sub Interval',
    75: 'Rolling Block 10 Min Interval 2 Min Sub Interval',
    76: 'Rolling Block 10 Min Interval 1 Min Sub Interval',
    77: 'Rolling Block 5 Min Interval 1 Min Sub Interval'
});
/*
 * Service Status
 */
export const currentStatuses = Object.freeze({
    0: 'Unavailable',
    1: 'Normal'
});
/*
 * Service Supplier
 */
export const serviceSupplierKinds = Object.freeze({
    utility: 'Delivers service to the customer',
    retailer: 'Sells service but does not delivery to the customer',
    other: 'Other kind of supplier',
    lse: 'Load Service Entity',
    mdma: 'Meter Data Management Agent',
    msp: 'Meter Service Provider'
});
/*
 * Usage Point
 */
export const serviceCategoryKinds = Object.freeze({
    0: 'Electricity',
    1: 'Gas',
    2: 'Water',
    3: 'Time',
    4: 'Heat',
    5: 'Refuse',
    6: 'Sewerage',
    7: 'Rates',
    8: 'TV Licence',
    9: 'Internet'
});
export const amiBillingReadyStatuses = Object.freeze({
    amiCapable: 'Usage point is equipped with an AMI capable meter that is not yet currently equipped with a communications module.',
    amiDisabled: 'Usage point is equipped with an AMI capable meter; however, the AMI functionality has been disabled or is not being used.',
    billingApproved: 'Usage point is equipped with an operating AMI capable meter and accuracy has been certified for billing purposes.',
    enabled: 'Usage point is equipped with an AMI capable meter having communications capability.',
    nonAmi: 'Usage point is equipped with a non AMI capable meter.',
    nonMetered: 'Usage point is not currently equipped with a meter.',
    operable: 'Usage point is equipped with an AMI capable meter that is functioning and communicating with the AMI network.'
});
export const connectionStates = Object.freeze({
    connected: 'The usage point is connected to the network and able to receive or send the applicable commodity (electricity, gas, water, etc.).',
    logicallyDisconnected: 'The usage point has been disconnected through operation of a disconnect function within the meter present at the usage point. The usage point is unable to receive or send the applicable commodity (electricity, gas, water, etc.) A logical disconnect can often be achieved without utilising a field crew.',
    physicallyDisconnected: 'The usage point has been disconnected from the network at a point upstream of the meter. The usage point is unable to receive or send the applicable commodity (electricity, gas, water, etc.). A physical disconnect is often achieved by utilising a field crew.'
});
export const pnodeTypes = Object.freeze({
    AG: 'Aggregated Generation',
    CPZ: 'Custom Price Zone',
    DPZ: 'Default Price Zone',
    LAP: 'Load Aggregation Point',
    TH: 'Trading Hub',
    SYS: 'System Zone',
    CA: 'Control Area',
    DCA: 'Designated Congestion Area',
    GA: 'Generic Aggregation',
    GH: 'Generic Hub',
    EHV: '500 kV - Extra High Voltage aggregate price nodes',
    ZN: 'Zone',
    INT: 'Interface',
    BUS: 'Bus'
});
export const anodeTypes = Object.freeze({
    SYS: 'System Zone/Region',
    RUC: 'RUC Zone',
    LFZ: 'Load Forecast Zone',
    REG: 'Market Energy/Ancillary Service Region',
    AGR: 'Aggregate Generation Resource',
    POD: 'Point of Delivery',
    ALR: 'Aggregate Load Resource',
    LTAC: 'Load TransmissionAccessCharge (TAC) Group',
    ACA: 'Adjacent Control Area',
    ASR: 'Aggregated System Resource',
    ECA: 'Embedded Control Area'
});
/*
 * Usage Summary
 */
export const costDetailItemKinds = Object.freeze({
    1: 'Energy Generation Fee',
    2: 'Energy Delivery Fee',
    3: 'Energy Usage Fee',
    4: 'Administrative Fee',
    5: 'Tax',
    6: 'Energy Generation Credit',
    7: 'Energy Delivery Credit',
    8: 'Administrative Credit',
    9: 'Payment',
    10: 'Information'
});
/*
 * Measurement
 */
export const powerOfTenMultipliers = Object.freeze({
    '-12': 'Pico',
    '-9': 'Nano',
    '-6': 'Micro',
    '-3': 'Milli',
    '-2': 'Centi',
    '-1': 'Deci',
    0: 'None',
    1: 'Deca',
    2: 'Hecto',
    3: 'Kilo',
    6: 'Mega',
    9: 'Giga',
    12: 'Tera'
});
export const unitsOfMeasurement = Object.freeze({
    61: 'VA',
    38: 'W',
    63: 'VAr',
    71: 'VAh',
    72: 'Wh',
    73: 'VArh',
    29: 'V',
    30: 'ohm',
    5: 'A',
    25: 'F',
    28: 'H',
    23: 'degC',
    27: 'sec',
    159: 'min',
    160: 'h',
    9: 'deg',
    10: 'rad',
    31: 'J',
    32: 'n',
    53: 'siemens',
    0: 'none',
    33: 'Hz',
    3: 'g',
    39: 'pa',
    2: 'm',
    41: 'm2',
    42: 'm3',
    69: 'A2',
    105: 'A2h',
    70: 'A2s',
    106: 'Ah',
    152: 'APerA',
    103: 'APerM',
    68: 'As',
    79: 'b',
    113: 'bm',
    22: 'bq',
    132: 'btu',
    133: 'btuPerH',
    8: 'cd',
    76: 'char',
    75: 'HzPerSec',
    114: 'code',
    65: 'cosTheta',
    111: 'count',
    119: 'ft3',
    120: 'ft3compensated',
    123: 'ft3compensatedPerH',
    78: 'gM2',
    144: 'gPerG',
    21: 'gy',
    150: 'HzPerHz',
    77: 'charPerSec',
    130: 'imperialGal',
    131: 'imperialGalPerH',
    51: 'jPerK',
    165: 'jPerKg',
    6: 'K',
    158: 'kat',
    47: 'kgM',
    48: 'kgPerM3',
    134: 'litre',
    157: 'litreCompensated',
    138: 'litreCompensatedPerH',
    137: 'litrePerH',
    143: 'litrePerLitre',
    82: 'litrePerSec',
    156: 'litreUncompensated',
    139: 'litreUncompensatedPerH',
    35: 'lm',
    34: 'lx',
    49: 'm2PerSec',
    167: 'm3compensated',
    126: 'm3compensatedPerH',
    125: 'm3PerH',
    45: 'm3PerSec',
    166: 'm3uncompensated',
    127: 'm3uncompensatedPerH',
    118: 'meCode',
    7: 'mol',
    147: 'molPerKg',
    145: 'molPerM3',
    146: 'molPerMol',
    80: 'money',
    148: 'mPerM',
    46: 'mPerM3',
    43: 'mPerSec',
    44: 'mPerSec2',
    102: 'ohmM',
    155: 'paA',
    140: 'paG',
    141: 'psiA',
    142: 'psiG',
    100: 'q',
    161: 'q45',
    163: 'q45h',
    162: 'q60',
    164: 'q60h',
    101: 'qh',
    54: 'radPerSec',
    154: 'rev',
    4: 'revPerSec',
    149: 'secPerSec',
    11: 'sr',
    109: 'status',
    24: 'sv',
    37: 't',
    169: 'therm',
    108: 'timeStamp',
    128: 'usGal',
    129: 'usGalPerH',
    67: 'V2',
    104: 'V2h',
    117: 'VAhPerRev',
    116: 'VArhPerRev',
    74: 'VPerHz',
    151: 'VPerV',
    66: 'Vs',
    36: 'wb',
    107: 'WhPerM3',
    115: 'WhPerRev',
    50: 'wPerMK',
    81: 'WPerSec',
    153: 'WPerVA',
    168: 'WPerW'
});
export const currencies = Object.freeze({
    840: 'USD',
    978: 'EUR',
    36: 'AUD',
    124: 'CAD',
    756: 'CHF',
    156: 'CNY',
    208: 'DKK',
    826: 'GBP',
    392: 'JPY',
    578: 'NOK',
    643: 'RUB',
    752: 'SEK',
    356: 'INR',
    0: 'Other'
});
export default {
    dataCustodianApplicationStatuses,
    thirdPartyApplicationStatuses,
    thirdPartyApplicationTypes,
    thirdPartyApplicationUses,
    grantTypes,
    responseTypes,
    authorizationStatuses,
    tokenTypes,
    authorizationErrors,
    customerKinds,
    notificationMethodKinds,
    enrollmentStatuses,
    readingQualities,
    meterMultiplierKinds,
    accumulationBehaviours,
    commodities,
    dataQualifiers,
    flowDirections,
    readingTypeKinds,
    phaseCodes,
    timeAttributes,
    measuringPeriods,
    currentStatuses,
    serviceSupplierKinds,
    serviceCategoryKinds,
    amiBillingReadyStatuses,
    connectionStates,
    pnodeTypes,
    anodeTypes,
    costDetailItemKinds,
    powerOfTenMultipliers,
    unitsOfMeasurement,
    currencies
};
