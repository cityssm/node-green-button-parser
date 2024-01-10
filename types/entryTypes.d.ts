import type lookups from '../lookups.js';
import type { GBBooleanString, GBTimestampNumber, GBUrlString, GreenButtonContactInfo, GreenButtonCostAdditionalDetail, GreenButtonCustomerAccountNotification, GreenButtonDemandResponseProgram, GreenButtonDuration, GreenButtonElectronicAddress, GreenButtonFunctionBlock, GreenButtonIntervalReading, GreenButtonMeterMultiplier, GreenButtonPositionPoint, GreenButtonStatus, GreenButtonStreetAddress, GreenButtonSummaryMeasurement, GreenButtonTariffRider, GreenButtonTelephoneNumber, GreenButtonUsagePoint } from './objectTypes.js';
export interface GreenButtonJson {
    id: string;
    title: string;
    updatedDate?: Date;
    links: GreenButtonLinks;
    entries: GreenButtonEntry[];
}
export interface GreenButtonEntry {
    id: string;
    title: string;
    links: GreenButtonLinks;
    publishedDate?: Date;
    updatedDate?: Date;
    content: GreenButtonEntryContent;
}
export interface GreenButtonEntryContent {
    ApplicationInformation?: ApplicationInformationContent;
    Authorization?: AuthorizationContent;
    BatchList?: BatchListContent;
    Customer?: CustomerContent;
    CustomerAccount?: CustomerAccountContent;
    CustomerAgreement?: CustomerAgreementContent;
    ElectricPowerQualitySummary?: ElectricPowerQualitySummaryContent;
    IntervalBlock?: IntervalBlockContent[];
    LocalTimeParameters?: LocalTimeParametersContent;
    Meter?: MeterContent;
    MeterReading?: MeterReadingContent;
    ReadingType?: ReadingTypeContent;
    ServiceLocation?: ServiceLocationContent;
    ServiceStatus?: ServiceStatusContent;
    ServiceSupplier?: ServiceSupplierContent;
    UsagePoint?: UsagePointContent;
    UsageSummary?: UsageSummaryContent;
}
export interface GreenButtonLinks {
    self?: string;
    selfUid?: string;
    up?: string;
    related?: string[];
}
export interface ApplicationInformationContent {
    dataCustodianApplicationStatus: keyof typeof lookups.dataCustodianApplicationStatuses;
    dataCustodianApplicationStatusValue?: (typeof lookups.dataCustodianApplicationStatuses)[keyof typeof lookups.dataCustodianApplicationStatuses];
    dataCustodianResourceEndpoint: GBUrlString;
    authorizationServerAuthorizationEndpoint: GBUrlString;
    authorizationServerTokenEndpoint: GBUrlString;
    redirect_uri: GBUrlString;
    thirdPartyNotifyUri: GBUrlString;
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
    authorizationServerUri?: GBUrlString;
    authorizationServerRegistrationEndpoint?: GBUrlString;
    dataCustodianBulkRequestURI: GBUrlString;
    thirdPartyScopeSelectionScreenURI: GBUrlString;
    thirdPartyUserPortalScreenURI?: GBUrlString;
    logo_uri?: GBUrlString;
    client_name: string;
    client_uri?: GBUrlString;
    tos_uri?: GBUrlString;
    policy_uri?: GBUrlString;
    software_id: string;
    software_version: string;
    client_id_issued_at: GBTimestampNumber;
    client_secret_expires_at: GBTimestampNumber;
    contacts?: string[];
    token_endpoint_auth_method: string;
    scope: string[];
    grant_types?: Array<keyof typeof lookups.grantTypes>;
    grant_types_values?: Array<(typeof lookups.grantTypes)[keyof typeof lookups.grantTypes]>;
    response_types: keyof typeof lookups.responseTypes;
    response_types_value?: (typeof lookups.responseTypes)[keyof typeof lookups.responseTypes];
    registration_client_uri: GBUrlString;
    dataCustodianId: string;
    dataCustodianScopeSelectionScreenURI: GBUrlString;
}
export interface AuthorizationContent {
    authorizedPeriod?: GreenButtonDuration;
    publishedPeriod?: GreenButtonDuration;
    status: keyof typeof lookups.authorizationStatuses;
    status_value?: (typeof lookups.authorizationStatuses)[keyof typeof lookups.authorizationStatuses];
    expires_at: GBTimestampNumber;
    grant_type?: keyof typeof lookups.grantTypes;
    grant_type_value?: (typeof lookups.grantTypes)[keyof typeof lookups.grantTypes];
    scope: string;
    scope_functionBlock: GreenButtonFunctionBlock;
    token_type: keyof typeof lookups.tokenTypes;
    token_type_value: (typeof lookups.tokenTypes)[keyof typeof lookups.tokenTypes];
    error?: keyof typeof lookups.authorizationErrors;
    error_value?: (typeof lookups.authorizationErrors)[keyof typeof lookups.authorizationErrors];
    error_description?: string;
    error_uri?: GBUrlString;
    resourceURI: GBUrlString;
    authorizationURI: GBUrlString;
    customerResourceURI: GBUrlString;
}
export interface BatchListContent {
    resources: GBUrlString[];
}
export interface CustomerContent {
    kind?: keyof typeof lookups.customerKinds;
    kind_value?: (typeof lookups.customerKinds)[keyof typeof lookups.customerKinds];
    specialNeed?: string;
    vip?: GBBooleanString;
    pucNumber?: string;
    status?: GreenButtonStatus;
    priority?: {
        value?: string;
        dateTime?: GBTimestampNumber;
        remark?: string;
        reason?: string;
    };
    locale?: string;
    customerName?: string;
}
export interface CustomerAccountContent {
    type?: string;
    authorName?: string;
    createdDateTime?: GBTimestampNumber;
    lastModifiedDateTime?: GBTimestampNumber;
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
    contactInfo?: GreenButtonContactInfo;
    accountId?: string;
}
export interface CustomerAgreementContent {
    type?: string;
    authorName?: string;
    createdDateTime?: GBTimestampNumber;
    lastModifiedDateTime?: GBTimestampNumber;
    revisionNumber?: string;
    electronicAddress?: GreenButtonElectronicAddress;
    subject?: string;
    title?: string;
    docStatus?: GreenButtonStatus;
    status?: GreenButtonStatus;
    comment?: string;
    signDate?: GBTimestampNumber;
    validityInterval?: GreenButtonDuration;
    loadMgmt?: string;
    isPrePay?: GBBooleanString;
    shutOffDateTime?: GBTimestampNumber;
    DemandResponseProgram?: GreenButtonDemandResponseProgram[];
    PricingStructures?: GBUrlString[];
    currency?: keyof typeof lookups.currencies;
    currency_value?: (typeof lookups.currencies)[keyof typeof lookups.currencies];
    futureStatus?: GreenButtonStatus;
    agreementId?: string;
}
export interface ElectricPowerQualitySummaryContent {
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
export interface IntervalBlockContent {
    interval: GreenButtonDuration;
    IntervalReading?: GreenButtonIntervalReading[];
}
export interface LocalTimeParametersContent {
    dstEndRule: string;
    dstOffset: number;
    dstStartRule: string;
    tzOffset: number;
}
export interface MeterContent {
    type?: string;
    utcNumber?: string;
    serialNumber?: string;
    lotNumber?: string;
    purchasePrice?: string;
    critical?: GBBooleanString;
    electronicAddress?: GreenButtonElectronicAddress;
    lifecycle?: {
        manufacturedDate?: GBTimestampNumber;
        purchaseDate?: GBTimestampNumber;
        receivedDate?: GBTimestampNumber;
        installationDate?: GBTimestampNumber;
        removalDate?: GBTimestampNumber;
        retiredDate?: GBTimestampNumber;
    };
    acceptanceTest?: {
        type?: string;
        success?: GBBooleanString;
        dateTime?: GBTimestampNumber;
    };
    initialCondition?: string;
    initialLossOfLife?: number;
    isVirtual?: GBBooleanString;
    isPan?: GBBooleanString;
    installCode?: string;
    amrSystem?: string;
    formNumber?: string;
    MeterMultipliers?: GreenButtonMeterMultiplier[];
    intervalLength?: number;
}
export interface MeterReadingContent {
}
export interface ReadingTypeContent {
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
export interface ServiceLocationContent {
    type?: string;
    mainAddress?: GreenButtonStreetAddress;
    secondaryAddress?: GreenButtonStreetAddress;
    phone1?: GreenButtonTelephoneNumber;
    phone2?: GreenButtonTelephoneNumber;
    electronicAddress?: GreenButtonElectronicAddress;
    geoInfoReference?: string;
    direction?: string;
    status?: GreenButtonStatus;
    positionPoints?: GreenButtonPositionPoint[];
    accessMethod?: string;
    siteAccessProblem?: string;
    needsInspection?: GBBooleanString;
    UsagePoints?: GreenButtonUsagePoint[];
    outageBlock?: string;
}
export interface ServiceStatusContent {
    currentStatus: keyof typeof lookups.currentStatuses;
    currentStatus_value?: (typeof lookups.currentStatuses)[keyof typeof lookups.currentStatuses];
}
export interface ServiceSupplierContent {
    Organisation?: GreenButtonContactInfo;
    kind?: keyof typeof lookups.serviceSupplierKinds;
    kind_value?: (typeof lookups.serviceSupplierKinds)[keyof typeof lookups.serviceSupplierKinds];
    issuerIdentificationNumber?: string;
    effectiveDate?: GBTimestampNumber;
}
export interface UsagePointContent extends GreenButtonUsagePoint {
}
export interface UsageSummaryContent {
    billingPeriod: GreenButtonDuration;
    statusTimeStamp: GBTimestampNumber;
    billLastPeriod?: number;
    billToDate?: number;
    costAdditionalLastPeriod?: number;
    costAdditionalDetailsLastPeriod?: GreenButtonCostAdditionalDetail[];
    currency?: keyof typeof lookups.currencies;
    currency_value?: (typeof lookups.currencies)[keyof typeof lookups.currencies];
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
    qualityOfReading_value?: (typeof lookups.readingQualities)[keyof typeof lookups.readingQualities];
    ratchetDemand?: GreenButtonSummaryMeasurement;
    ratchetDemandPeriod?: GreenButtonDuration;
    commodity?: keyof typeof lookups.commodities;
    commodity_value?: (typeof lookups.commodities)[keyof typeof lookups.commodities];
    tariffProfile?: string;
    readCycle?: string;
    tariffRiderRefs?: {
        tariffRiderRef?: GreenButtonTariffRider[];
    };
    billingChargeSource?: {
        agencyName?: string;
    };
}
export type GreenButtonContentType = 'ApplicationInformation' | 'Authorization' | 'BatchList' | 'Customer' | 'CustomerAccount' | 'CustomerAgreement' | 'ElectricPowerQualitySummary' | 'ElectricPowerUsageSummary' | 'EnergyUsageSummary' | 'IntervalBlock' | 'LocalTimeParameters' | 'Meter' | 'MeterReading' | 'ReadingType' | 'ServiceLocation' | 'ServiceStatus' | 'ServiceSupplier' | 'UsagePoint' | 'UsageSummary';
export type GreenButtonContent = ApplicationInformationContent | AuthorizationContent | BatchListContent | CustomerContent | CustomerAccountContent | CustomerAgreementContent | ElectricPowerQualitySummaryContent | IntervalBlockContent | LocalTimeParametersContent | MeterContent | MeterReadingContent | ReadingTypeContent | ServiceLocationContent | ServiceStatusContent | ServiceSupplierContent | UsagePointContent | UsageSummaryContent;
export interface GreenButtonEntryWithApplicationInformationContent extends GreenButtonEntry {
    content: {
        ApplicationInformation: ApplicationInformationContent;
    };
}
export interface GreenButtonEntryWithAuthorizationContent extends GreenButtonEntry {
    content: {
        Authorization: AuthorizationContent;
    };
}
export interface GreenButtonEntryWithBatchListContent extends GreenButtonEntry {
    content: {
        BatchList: BatchListContent;
    };
}
export interface GreenButtonEntryWithCustomerContent extends GreenButtonEntry {
    content: {
        Customer: CustomerContent;
    };
}
export interface GreenButtonEntryWithCustomerAccountContent extends GreenButtonEntry {
    content: {
        CustomerAccount: CustomerAccountContent;
    };
}
export interface GreenButtonEntryWithCustomerAgreementContent extends GreenButtonEntry {
    content: {
        CustomerAgreement: CustomerAgreementContent;
    };
}
export interface GreenButtonEntryWithElectricPowerQualitySummaryContent extends GreenButtonEntry {
    content: {
        ElectricPowerQualitySummary: ElectricPowerQualitySummaryContent;
    };
}
export interface GreenButtonEntryWithIntervalBlockContent extends GreenButtonEntry {
    content: {
        IntervalBlock: IntervalBlockContent[];
    };
}
export interface GreenButtonEntryWithLocalTimeParametersContent extends GreenButtonEntry {
    content: {
        LocalTimeParameters: LocalTimeParametersContent;
    };
}
export interface GreenButtonEntryWithMeterContent extends GreenButtonEntry {
    content: {
        Meter: MeterContent;
    };
}
export interface GreenButtonEntryWithMeterReadingContent extends GreenButtonEntry {
    content: {
        MeterReading: MeterReadingContent;
    };
}
export interface GreenButtonEntryWithReadingTypeContent extends GreenButtonEntry {
    content: {
        ReadingType: ReadingTypeContent;
    };
}
export interface GreenButtonEntryWithServiceLocationContent extends GreenButtonEntry {
    content: {
        ServiceLocation: ServiceLocationContent;
    };
}
export interface GreenButtonEntryWithServiceStatusContent extends GreenButtonEntry {
    content: {
        ServiceStatus: ServiceStatusContent;
    };
}
export interface GreenButtonEntryWithServiceSupplierContent extends GreenButtonEntry {
    content: {
        ServiceSupplier: ServiceSupplierContent;
    };
}
export interface GreenButtonEntryWithUsagePointContent extends GreenButtonEntry {
    content: {
        UsagePoint: UsagePointContent;
    };
}
export interface GreenButtonEntryWithUsageSummaryContent extends GreenButtonEntry {
    content: {
        UsageSummary: UsageSummaryContent;
    };
}
