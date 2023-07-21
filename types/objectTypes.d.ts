import type * as lookups from '../lookups.js';
export type booleanString = 'true' | 'false';
export type timestampNumber = number;
export type urlString = `http://${string}` | `https://${string}`;
export interface GreenButtonDuration {
    duration: number;
    start: number;
}
export interface GreenButtonStatus {
    value?: string;
    dateTime?: number;
    remark?: string;
    reason?: string;
}
export interface GreenButtonElectronicAddress {
    lan?: string;
    mac?: string;
    email1?: string;
    email2?: string;
    web?: string;
    radio?: string;
    userID?: string;
    password?: string;
}
export interface GreenButtonStreetAddress {
    streetDetail?: {
        number?: string;
        name?: string;
        suffix?: string;
        prefix?: string;
        type?: string;
        code?: string;
        buildingName?: string;
        suiteNumber?: string;
        addressGeneral?: string;
        addressGeneral2?: string;
        addressGeneral3?: string;
        withinTownLimits?: booleanString;
    };
    townDetail?: {
        code?: string;
        section?: string;
        name?: string;
        county?: string;
        stateOrProvince?: string;
        country?: string;
    };
    status?: GreenButtonStatus;
    postalCode?: string;
    poBox?: string;
}
export interface GreenButtonTelephoneNumber {
    countryCode?: string | number;
    areaCode?: string | number;
    cityCode?: string | number;
    localNumber?: string | number;
    ext?: string | number;
    dialOut?: string | number;
    internationalPrefix?: string | number;
    ituPhone?: string;
}
export interface GreenButtonSummaryMeasurement {
    powerOfTenMultiplier?: keyof typeof lookups.powerOfTenMultipliers;
    timeStamp?: timestampNumber;
    uom?: keyof typeof lookups.unitsOfMeasurement;
    value?: number;
    readingTypeRef?: urlString;
}
export interface GreenButtonCustomerAccountNotification {
    methodKind: keyof typeof lookups.notificationMethodKinds;
    methodKind_value: (typeof lookups.notificationMethodKinds)[keyof typeof lookups.notificationMethodKinds];
    time: timestampNumber;
    note: string;
    customerNotificationKind: string;
}
export interface GreenButtonDemandResponseProgram {
    programName?: string;
    enrollmentStatus?: keyof typeof lookups.enrollmentStatuses;
    enrollmentStatus_value?: (typeof lookups.enrollmentStatuses)[keyof typeof lookups.enrollmentStatuses];
    programDescription?: urlString;
    programDate?: {
        programDate?: timestampNumber;
        programDateDescription?: string;
    };
    capacityReservationLevel?: GreenButtonSummaryMeasurement;
    DRProgramNomination?: GreenButtonSummaryMeasurement;
}
export interface GreenButtonIntervalReading {
    timePeriod?: GreenButtonDuration;
    value?: number;
    cost?: number;
    ReadingQuality?: Array<keyof typeof lookups.readingQualities>;
    ReadingQuality_values: Array<(typeof lookups.readingQualities)[keyof typeof lookups.readingQualities]>;
    consumptionTier?: number;
    tou?: number;
    cpp?: number;
}
export interface GreenButtonMeterMultiplier {
    kind?: keyof typeof lookups.meterMultiplierKinds;
    kind_value?: (typeof lookups.meterMultiplierKinds)[keyof typeof lookups.meterMultiplierKinds];
    value?: number;
}
export interface GreenButtonPositionPoint {
    xPosition?: string;
    yPosition?: string;
    zPosition?: string;
}
export interface GreenButtonTariffRider {
    riderType: string;
    enrollmentStatus: keyof typeof lookups.enrollmentStatuses;
    enrollmentStatus_value?: (typeof lookups.enrollmentStatuses)[keyof typeof lookups.enrollmentStatuses];
    effectiveDate: timestampNumber;
}
export interface GreenButtonPNode {
    apnodeType: keyof typeof lookups.pnodeTypes;
    ref: string;
    startEffectiveDate?: timestampNumber;
    endEffectiveDate?: timestampNumber;
}
export interface GreenButtonAggregateNode {
    anodeType: keyof typeof lookups.anodeTypes;
    ref: string;
    startEffectiveDate?: timestampNumber;
    endEffectiveDate?: timestampNumber;
}
export interface GreenButtonUsagePoint {
    roleFlags?: string;
    ServiceCategory?: {
        kind: keyof typeof lookups.serviceCategoryKinds;
        kind_value: (typeof lookups.serviceCategoryKinds)[keyof typeof lookups.serviceCategoryKinds];
    };
    status?: 0 | 1;
    ServiceDeliveryPoint?: {
        name?: string;
        tariffProfile?: string;
        customerAgreement?: string;
        tariffRiderRefs?: {
            tariffRiderRef?: GreenButtonTariffRider | GreenButtonTariffRider[];
        };
    };
    amiBillingReady?: keyof typeof lookups.amiBillingReadyStatuses;
    checkBilling?: booleanString;
    connectionState?: keyof typeof lookups.connectionStates;
    estimatedLoad?: GreenButtonSummaryMeasurement;
    grounded?: booleanString;
    isSdp?: booleanString;
    isVirtual?: booleanString;
    minimalUsageExpected?: booleanString;
    nominalServiceVoltage?: GreenButtonSummaryMeasurement;
    outageRegion?: string;
    phaseCode?: keyof typeof lookups.phaseCodes;
    ratedCurrent?: GreenButtonSummaryMeasurement;
    ratedPower?: GreenButtonSummaryMeasurement;
    readCycle?: string;
    readRoute?: string;
    serviceDeliveryRemark?: string;
    servicePriority?: string;
    pnodeRefs?: {
        pnodeRef: GreenButtonPNode | GreenButtonPNode[];
    };
    aggregateNodeRefs?: {
        aggregateNodeRef: GreenButtonAggregateNode | GreenButtonAggregateNode[];
    };
}
export interface GreenButtonCostAdditionalDetail {
    itemKind: keyof typeof lookups.costDetailItemKinds;
    itemKind_value?: (typeof lookups.costDetailItemKinds)[keyof typeof lookups.costDetailItemKinds];
    note: string;
    amount?: number;
    rounding?: number;
    dateTime?: timestampNumber;
    measurement?: GreenButtonSummaryMeasurement;
    unitCost?: GreenButtonSummaryMeasurement;
    itemPeriod?: GreenButtonSummaryMeasurement;
}
