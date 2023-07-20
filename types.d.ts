import type * as lookups from './lookups.js';
type booleanString = 'true' | 'false';
type timestampNumber = number;
type urlString = `http://${string}` | `https://${string}`;
export type GreenButtonContentType = 'ApplicationInformation' | 'Authorization' | 'BatchList' | 'Customer' | 'CustomerAccount' | 'CustomerAgreement' | 'ElectricPowerUsageSummary' | 'EnergyUsageSummary' | 'IntervalBlock' | 'LocalTimeParameters' | 'Meter' | 'MeterReading' | 'ReadingType' | 'ServiceLocation' | 'ServiceStatus' | 'ServiceSupplier' | 'UsagePoint' | 'UsageSummary';
export interface GreenButtonJson {
    title: string;
    updatedDate: Date;
    link: string;
    entries: GreenButtonEntry[];
}
export interface GreenButtonEntry {
    id: string;
    title: string;
    link: string;
    publishedDate: Date;
    content: GreenButtonContent;
}
export interface BaseContent {
    contentType: GreenButtonContentType;
}
interface GreenButtonDuration {
    duration: number;
    start: number;
}
interface GreenButtonStatus {
    value?: string;
    dateTime?: number;
    remark?: string;
    reason?: string;
}
interface GreenButtonElectronicAddress {
    lan?: string;
    mac?: string;
    email1?: string;
    email2?: string;
    web?: string;
    radio?: string;
    userID?: string;
    password?: string;
}
interface GreenButtonStreetAddress {
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
interface GreenButtonTelephoneNumber {
    countryCode?: string | number;
    areaCode?: string | number;
    cityCode?: string | number;
    localNumber?: string | number;
    ext?: string | number;
    dialOut?: string | number;
    internationalPrefix?: string | number;
    ituPhone?: string;
}
interface GreenButtonSummaryMeasurement {
    powerOfTenMultiplier?: keyof typeof lookups.powerOfTenMultipliers;
    timeStamp?: timestampNumber;
    uom?: keyof typeof lookups.unitsOfMeasurement;
    value?: number;
    readingTypeRef?: urlString;
}
export interface ApplicationInformationContent extends BaseContent {
    contentType: 'ApplicationInformation';
    dataCustodianApplicationStatus: keyof typeof lookups.dataCustodianApplicationStatuses;
    dataCustodianApplicationStatusValue?: (typeof lookups.dataCustodianApplicationStatuses)[keyof typeof lookups.dataCustodianApplicationStatuses];
    dataCustodianResourceEndpoint: urlString;
    authorizationServerAuthorizationEndpoint: urlString;
    authorizationServerTokenEndpoint: urlString;
    redirect_uri: urlString;
    thirdPartyNotifyUri: urlString;
    client_id: string;
    client_secret: string;
    registration_access_token: string;
    thirdPartyApplicationDescription?: string;
    thirdPartyApplicationStatus?: keyof typeof lookups.thirdPartyApplicationStatuses;
    thirdPartyApplicationStatus_value?: (typeof lookups.thirdPartyApplicationStatuses)[keyof typeof lookups.thirdPartyApplicationStatuses];
    thirdPartyApplicationType?: keyof typeof lookups.thirdPartyApplicationTypes;
    thirdPartyApplicationType_value?: (typeof lookups.thirdPartyApplicationTypes)[keyof typeof lookups.thirdPartyApplicationTypes];
    thirdPartyApplicationUse?: keyof typeof lookups.thirdPartyApplicationUses;
    thirdPartyApplicationUse_value?: (typeof lookups.thirdPartyApplicationUses)[keyof typeof lookups.thirdPartyApplicationUses];
    thirdPartyPhone?: string;
    authorizationServerUri?: urlString;
    authorizationServerRegistrationEndpoint?: urlString;
    dataCustodianBulkRequestURI: urlString;
    thirdPartyScopeSelectionScreenURI: urlString;
    thirdPartyUserPortalScreenURI?: urlString;
    logo_uri?: urlString;
    client_name: string;
    client_uri?: urlString;
    tos_uri?: urlString;
    policy_uri?: urlString;
    software_id: string;
    software_version: string;
    client_id_issued_at: timestampNumber;
    client_secret_expires_at: timestampNumber;
    contacts?: string | string[];
    token_endpoint_auth_method: string;
    scope: string | string[];
    grant_types: Array<keyof typeof lookups.grantTypes>;
    grant_types_values?: Array<(typeof lookups.grantTypes)[keyof typeof lookups.grantTypes]>;
    response_types: keyof typeof lookups.responseTypes;
    response_types_value?: (typeof lookups.responseTypes)[keyof typeof lookups.responseTypes];
    registration_client_uri: urlString;
    dataCustodianId: string;
    dataCustodianScopeSelectionScreenURI: urlString;
}
export interface AuthorizationContent extends BaseContent {
    contentType: 'Authorization';
    authorizedPeriod?: GreenButtonDuration;
    publishedPeriod?: GreenButtonDuration;
    status: keyof typeof lookups.authorizationStatuses;
    status_value?: (typeof lookups.authorizationStatuses)[keyof typeof lookups.authorizationStatuses];
    expires_at: timestampNumber;
    grant_type?: keyof typeof lookups.grantTypes;
    grant_type_value?: (typeof lookups.grantTypes)[keyof typeof lookups.grantTypes];
    scope: string;
    token_type: keyof typeof lookups.tokenTypes;
    token_type_value: (typeof lookups.tokenTypes)[keyof typeof lookups.tokenTypes];
    error?: keyof typeof lookups.authorizationErrors;
    error_value?: (typeof lookups.authorizationErrors)[keyof typeof lookups.authorizationErrors];
    error_description?: string;
    error_uri?: urlString;
    resourceURI: urlString;
    authorizationURI: urlString;
}
export interface BatchListContent extends BaseContent {
    contentType: 'BatchList';
    resources: urlString | urlString[];
}
export interface CustomerContent extends BaseContent {
    contentType: 'Customer';
    kind?: keyof typeof lookups.customerKinds;
    kind_value?: (typeof lookups.customerKinds)[keyof typeof lookups.customerKinds];
    specialNeed?: string;
    vip?: booleanString;
    pucNumber?: string;
    status?: GreenButtonStatus;
    priority?: {
        value?: string;
        dateTime?: timestampNumber;
        remark?: string;
        reason?: string;
    };
    locale?: string;
    customerName?: string;
}
interface GreenButtonCustomerAccountNotification {
    methodKind: keyof typeof lookups.notificationMethodKinds;
    methodKind_value: (typeof lookups.notificationMethodKinds)[keyof typeof lookups.notificationMethodKinds];
    time: timestampNumber;
    note: string;
    customerNotificationKind: string;
}
export interface CustomerAccountContent extends BaseContent {
    contentType: 'CustomerAccount';
    type?: string;
    authorName?: string;
    createdDateTime?: timestampNumber;
    lastModifiedDateTime?: timestampNumber;
    revisionNumber?: string;
    electronicAddress?: GreenButtonElectronicAddress;
    subject?: string;
    title?: string;
    docStatus?: GreenButtonStatus;
    status?: GreenButtonStatus;
    comment?: string;
    billingCycle?: string;
    budgetBill?: string;
    lastBillAmount?: number;
    notifications?: GreenButtonCustomerAccountNotification[];
    contactInfo?: {
        streetAddress?: GreenButtonStreetAddress;
        postalAddress?: GreenButtonStreetAddress;
        phone1?: GreenButtonTelephoneNumber;
        phone2?: GreenButtonTelephoneNumber;
        electronicAddress?: GreenButtonElectronicAddress;
        organisationName?: string;
    };
    accountId?: string;
}
interface GreenButtonDemandResponseProgram {
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
export interface CustomerAgreementContent extends BaseContent {
    contentType: 'CustomerAgreement';
    type?: string;
    authorName?: string;
    createdDateTime?: timestampNumber;
    lastModifiedDateTime?: timestampNumber;
    revisionNumber?: string;
    electronicAddress?: GreenButtonElectronicAddress;
    subject?: string;
    title?: string;
    docStatus?: GreenButtonStatus;
    status?: GreenButtonStatus;
    comment?: string;
    signDate?: timestampNumber;
    validityInterval?: GreenButtonDuration;
    loadMgmt?: string;
    isPrePay?: booleanString;
    shutOffDateTime?: timestampNumber;
    DemandResponseProgram?: GreenButtonDemandResponseProgram[];
    PricingStructures?: urlString | urlString[];
    currency?: keyof typeof lookups.currencies;
    currency_value?: (typeof lookups.currencies)[keyof typeof lookups.currencies];
    futureStatus?: GreenButtonStatus;
    agreementId?: string;
}
export interface ElectricPowerQualitySummaryContent extends BaseContent {
    summaryInterval: GreenButtonDuration;
    flickerPlt?: number;
    flickerPst?: number;
    harmonicVoltage?: number;
    longInterruptions?: number;
    mainsVoltage?: number;
    measurementProtocol?: number;
    powerFrequency?: number;
    rapidVoltageChanges?: number;
    shortInterruptions?: number;
    supplyVoltageDips?: number;
    supplyVoltageVariations?: number;
    tempOvervoltage?: number;
}
interface GreenButtonIntervalReading {
    timePeriod?: GreenButtonDuration;
    value?: number;
    cost?: number;
    ReadingQuality?: Array<keyof typeof lookups.readingQualities>;
    ReadingQuality_values: Array<(typeof lookups.readingQualities)[keyof typeof lookups.readingQualities]>;
    consumptionTier?: number;
    tou?: number;
    cpp?: number;
}
export interface IntervalBlockContent extends BaseContent {
    contentType: 'IntervalBlock';
    interval: GreenButtonDuration;
    IntervalReading: GreenButtonIntervalReading[];
}
export interface LocalTimeParametersContent extends BaseContent {
    contentType: 'LocalTimeParameters';
    dstEndRule: string;
    dstOffset: number;
    dstStartRule: string;
    tzOffset: number;
}
interface GreenButtonMeterMultiplier {
    kind?: keyof typeof lookups.meterMultiplierKinds;
    kind_value?: (typeof lookups.meterMultiplierKinds)[keyof typeof lookups.meterMultiplierKinds];
    value?: number;
}
export interface MeterContent extends BaseContent {
    contentType: 'Meter';
    type?: string;
    utcNumber?: string;
    serialNumber?: string;
    lotNumber?: string;
    purchasePrice?: string;
    critical?: booleanString;
    electronicAddress?: GreenButtonElectronicAddress;
    lifecycle?: {
        manufacturedDate?: timestampNumber;
        purchaseDate?: timestampNumber;
        receivedDate?: timestampNumber;
        installationDate?: timestampNumber;
        removalDate?: timestampNumber;
        retiredDate?: timestampNumber;
    };
    acceptanceTest?: {
        type?: string;
        success?: booleanString;
        dateTime?: timestampNumber;
    };
    initialCondition?: string;
    initialLossOfLife?: number;
    isVirtual?: booleanString;
    isPan?: booleanString;
    installCode?: string;
    amrSystem?: string;
    formNumber?: string;
    MeterMultipliers?: GreenButtonMeterMultiplier[];
    intervalLength?: number;
}
export interface MeterReadingContent extends BaseContent {
    contentType: 'MeterReading';
}
export interface ReadingTypeContent extends BaseContent {
    contentType: 'ReadingType';
    accumulationBehaviour?: keyof typeof lookups.accumulationBehaviours;
    accumulationBehaviour_value?: (typeof lookups.accumulationBehaviours)[keyof typeof lookups.accumulationBehaviours];
    commodity?: keyof typeof lookups.commodities;
    commodity_value?: (typeof lookups.commodities)[keyof typeof lookups.commodities];
    consumptionTier?: number;
    currency?: keyof typeof lookups.currencies;
    currency_value?: (typeof lookups.currencies)[keyof typeof lookups.currencies];
    dataQualifier?: keyof typeof lookups.dataQualifiers;
    dataQualifier_value?: (typeof lookups.dataQualifiers)[keyof typeof lookups.dataQualifiers];
    defaultQuality?: keyof typeof lookups.readingQualities;
    defaultQuality_value?: (typeof lookups.readingQualities)[keyof typeof lookups.readingQualities];
    flowDirection?: keyof typeof lookups.flowDirections;
    flowDirection_value?: (typeof lookups.flowDirections)[keyof typeof lookups.flowDirections];
    intervalLength?: number;
    kind?: keyof typeof lookups.readingTypeKinds;
    kind_value?: (typeof lookups.readingTypeKinds)[keyof typeof lookups.readingTypeKinds];
    phase?: keyof typeof lookups.phaseCodes;
    phase_value?: (typeof lookups.phaseCodes)[keyof typeof lookups.phaseCodes];
    powerOfTenMultiplier?: keyof typeof lookups.powerOfTenMultipliers;
    powerOfTenMultiplier_value?: (typeof lookups.powerOfTenMultipliers)[keyof typeof lookups.powerOfTenMultipliers];
    timeAttribute?: keyof typeof lookups.timeAttributes;
    timeAttribute_value?: (typeof lookups.timeAttributes)[keyof typeof lookups.timeAttributes];
    tou?: number;
    uom?: keyof typeof lookups.unitsOfMeasurement;
    uom_value?: (typeof lookups.unitsOfMeasurement)[keyof typeof lookups.unitsOfMeasurement];
    cpp?: number;
    interharmonic?: number;
    measuringPeriod?: keyof typeof lookups.measuringPeriods;
    measuringPeriod_value?: (typeof lookups.measuringPeriods)[keyof typeof lookups.measuringPeriods];
    argument?: number;
}
interface GreenButtonPositionPoint {
    xPosition?: string;
    yPosition?: string;
    zPosition?: string;
}
export interface ServiceLocationContent extends BaseContent {
    contentType: 'ServiceLocation';
    type?: string;
    mainAddress?: GreenButtonStreetAddress;
    secondaryAddress?: GreenButtonStreetAddress;
    phone1?: GreenButtonTelephoneNumber;
    phone2?: GreenButtonTelephoneNumber;
    electronicAddress?: GreenButtonElectronicAddress;
    geoInfoReference?: string;
    direction?: string;
    status?: GreenButtonStatus;
    positionPoints?: GreenButtonPositionPoint | GreenButtonPositionPoint[];
    accessMethod?: string;
    siteAccessProblem?: string;
    needsInspection?: booleanString;
    UsagePoints?: GreenButtonUsagePoint | GreenButtonUsagePoint[];
    outageBlock?: string;
}
export interface ServiceStatusContent extends BaseContent {
    contentType: 'ServiceStatus';
    currentStatus: keyof typeof lookups.currentStatuses;
}
export interface ServiceSupplierContent extends BaseContent {
    contentType: 'ServiceSupplier';
    Organisation?: {
        streetAddress?: GreenButtonStreetAddress;
        postalAddress?: GreenButtonStreetAddress;
        phone1?: GreenButtonTelephoneNumber;
        phone2?: GreenButtonTelephoneNumber;
        electronicAddress?: GreenButtonElectronicAddress;
        organisationName?: string;
    };
    kind?: keyof typeof lookups.serviceSupplierKinds;
    issuerIdentificationNumber?: string;
    effectiveDate?: timestampNumber;
}
interface GreenButtonTariffRider {
    riderType: string;
    enrollmentStatus: keyof typeof lookups.enrollmentStatuses;
    effectiveDate: timestampNumber;
}
interface GreenButtonPNode {
    apnodeType: keyof typeof lookups.pnodeTypes;
    ref: string;
    startEffectiveDate?: timestampNumber;
    endEffectiveDate?: timestampNumber;
}
interface GreenButtonAggregateNode {
    anodeType: keyof typeof lookups.anodeTypes;
    ref: string;
    startEffectiveDate?: timestampNumber;
    endEffectiveDate?: timestampNumber;
}
interface GreenButtonUsagePoint {
    roleFlags?: string;
    ServiceCategory?: {
        kind: keyof typeof lookups.serviceCategoryKinds;
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
export interface UsagePointContent extends BaseContent, GreenButtonUsagePoint {
    contentType: 'UsagePoint';
}
interface GreenButtonCostAdditionalDetail {
    itemKind: keyof typeof lookups.costDetailItemKinds;
    note: string;
    amount?: number;
    rounding?: number;
    dateTime?: timestampNumber;
    measurement?: GreenButtonSummaryMeasurement;
    unitCost?: GreenButtonSummaryMeasurement;
    itemPeriod?: GreenButtonSummaryMeasurement;
}
export interface UsageSummaryContent extends BaseContent {
    contentType: 'UsageSummary' | 'EnergyUsageSummary' | 'ElectricPowerUsageSummary';
    billingPeriod: GreenButtonDuration;
    statusTimeStamp: timestampNumber;
    billLastPeriod?: number;
    billToDate?: number;
    costAdditionalLastPeriod?: number;
    costAdditionalDetailsLastPeriod?: GreenButtonCostAdditionalDetail | GreenButtonCostAdditionalDetail[];
    currency?: keyof typeof lookups.currencies;
    overallConsumptionLastPeriod?: GreenButtonSummaryMeasurement;
    currentBillingPeriodOverAllConsumption?: GreenButtonSummaryMeasurement;
    currentDayLastYearNetConsumption?: GreenButtonSummaryMeasurement;
    currentDayNetConsumption?: GreenButtonSummaryMeasurement;
    currentDayOverallConsumption?: GreenButtonSummaryMeasurement;
    peakDemand?: GreenButtonSummaryMeasurement;
    previousDayLastYearOverallConsumption?: GreenButtonSummaryMeasurement;
    previousDayNetConsumption?: GreenButtonSummaryMeasurement;
    previousDayOverallConsumption?: GreenButtonSummaryMeasurement;
    qualityOfReading?: keyof typeof lookups.readingQualities;
    ratchetDemand?: GreenButtonSummaryMeasurement;
    ratchetDemandPeriod?: GreenButtonDuration;
    commodity?: keyof typeof lookups.commodities;
    tariffProfile?: string;
    readCycle?: string;
    tariffRiderRefs?: {
        tariffRiderRef?: GreenButtonTariffRider | GreenButtonTariffRider[];
    };
    billingChargeSource?: {
        agencyName?: string;
    };
}
export type GreenButtonContent = ApplicationInformationContent | AuthorizationContent | BatchListContent | CustomerContent | CustomerAccountContent | CustomerAgreementContent | ElectricPowerQualitySummaryContent | IntervalBlockContent | LocalTimeParametersContent | MeterContent | MeterReadingContent | ReadingTypeContent | ServiceLocationContent | ServiceStatusContent | ServiceSupplierContent | UsagePointContent | UsageSummaryContent;
export {};
