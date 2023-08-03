// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/indent */

import type * as lookups from '../lookups.js'

// eslint-disable-next-line import/namespace
import type * as objectTypes from './objectTypes.js'

export interface GreenButtonJson {
  id: string
  title: string
  updatedDate?: Date
  links: GreenButtonLinks
  entries: GreenButtonEntry[]
}

export interface GreenButtonEntry {
  id: string
  title: string
  links: GreenButtonLinks
  publishedDate?: Date
  updatedDate?: Date
  content: GreenButtonEntryContent
}

export interface GreenButtonEntryContent {
  ApplicationInformation?: ApplicationInformationContent
  Authorization?: AuthorizationContent
  BatchList?: BatchListContent
  Customer?: CustomerContent
  CustomerAccount?: CustomerAccountContent
  CustomerAgreement?: CustomerAgreementContent
  ElectricPowerQualitySummary?: ElectricPowerQualitySummaryContent
  IntervalBlock?: IntervalBlockContent[]
  LocalTimeParameters?: LocalTimeParametersContent
  Meter?: MeterContent
  MeterReading?: MeterReadingContent
  ReadingType?: ReadingTypeContent
  ServiceLocation?: ServiceLocationContent
  ServiceStatus?: ServiceStatusContent
  ServiceSupplier?: ServiceSupplierContent
  UsagePoint?: UsagePointContent
  UsageSummary?: UsageSummaryContent
}

export interface GreenButtonLinks {
  self?: string
  selfUid?: string
  up?: string
  related?: string[]
}

/*
 * Content Types
 */

export interface ApplicationInformationContent {
  dataCustodianApplicationStatus: keyof typeof lookups.dataCustodianApplicationStatuses
  dataCustodianApplicationStatusValue?: (typeof lookups.dataCustodianApplicationStatuses)[keyof typeof lookups.dataCustodianApplicationStatuses]

  dataCustodianResourceEndpoint: objectTypes.urlString
  authorizationServerAuthorizationEndpoint: objectTypes.urlString
  authorizationServerTokenEndpoint: objectTypes.urlString
  redirect_uri: objectTypes.urlString
  thirdPartyNotifyUri: objectTypes.urlString
  client_id: string
  client_secret: string
  registration_access_token: string
  thirdPartyApplicationDescription?: string

  thirdPartyApplicationStatus?: keyof typeof lookups.thirdPartyApplicationStatuses
  thirdPartyApplicationStatus_value?: (typeof lookups.thirdPartyApplicationStatuses)[keyof typeof lookups.thirdPartyApplicationStatuses]

  thirdPartyApplicationType?: keyof typeof lookups.thirdPartyApplicationTypes
  thirdPartyApplicationType_value?: (typeof lookups.thirdPartyApplicationTypes)[keyof typeof lookups.thirdPartyApplicationTypes]

  thirdPartyApplicationUse?: keyof typeof lookups.thirdPartyApplicationUses
  thirdPartyApplicationUse_value?: (typeof lookups.thirdPartyApplicationUses)[keyof typeof lookups.thirdPartyApplicationUses]

  thirdPartyPhone?: string
  authorizationServerUri?: objectTypes.urlString
  authorizationServerRegistrationEndpoint?: objectTypes.urlString
  dataCustodianBulkRequestURI: objectTypes.urlString
  thirdPartyScopeSelectionScreenURI: objectTypes.urlString
  thirdPartyUserPortalScreenURI?: objectTypes.urlString
  logo_uri?: objectTypes.urlString
  client_name: string
  client_uri?: objectTypes.urlString
  tos_uri?: objectTypes.urlString
  policy_uri?: objectTypes.urlString
  software_id: string
  software_version: string
  client_id_issued_at: objectTypes.timestampNumber
  client_secret_expires_at: objectTypes.timestampNumber
  contacts?: string[]
  token_endpoint_auth_method: string
  scope: string[]

  grant_types?: Array<keyof typeof lookups.grantTypes>
  grant_types_values?: Array<
    (typeof lookups.grantTypes)[keyof typeof lookups.grantTypes]
  >

  response_types: keyof typeof lookups.responseTypes
  response_types_value?: (typeof lookups.responseTypes)[keyof typeof lookups.responseTypes]

  registration_client_uri: objectTypes.urlString
  dataCustodianId: string
  dataCustodianScopeSelectionScreenURI: objectTypes.urlString
}

export interface AuthorizationContent {
  authorizedPeriod?: objectTypes.GreenButtonDuration
  publishedPeriod?: objectTypes.GreenButtonDuration

  status: keyof typeof lookups.authorizationStatuses
  status_value?: (typeof lookups.authorizationStatuses)[keyof typeof lookups.authorizationStatuses]

  expires_at: objectTypes.timestampNumber

  grant_type?: keyof typeof lookups.grantTypes
  grant_type_value?: (typeof lookups.grantTypes)[keyof typeof lookups.grantTypes]

  scope: string

  token_type: keyof typeof lookups.tokenTypes
  token_type_value: (typeof lookups.tokenTypes)[keyof typeof lookups.tokenTypes]

  error?: keyof typeof lookups.authorizationErrors
  error_value?: (typeof lookups.authorizationErrors)[keyof typeof lookups.authorizationErrors]

  error_description?: string
  error_uri?: objectTypes.urlString

  resourceURI: objectTypes.urlString
  authorizationURI: objectTypes.urlString
  customerResourceURI: objectTypes.urlString
}

export interface BatchListContent {
  resources: objectTypes.urlString[]
}

export interface CustomerContent {
  kind?: keyof typeof lookups.customerKinds
  kind_value?: (typeof lookups.customerKinds)[keyof typeof lookups.customerKinds]

  specialNeed?: string
  vip?: objectTypes.booleanString
  pucNumber?: string
  status?: objectTypes.GreenButtonStatus
  priority?: {
    value?: string
    dateTime?: objectTypes.timestampNumber
    remark?: string
    reason?: string
  }
  locale?: string
  customerName?: string
}

export interface CustomerAccountContent {
  type?: string
  authorName?: string
  createdDateTime?: objectTypes.timestampNumber
  lastModifiedDateTime?: objectTypes.timestampNumber
  revisionNumber?: string
  electronicAddress?: objectTypes.GreenButtonElectronicAddress
  subject?: string
  title?: string
  docStatus?: objectTypes.GreenButtonStatus
  status?: objectTypes.GreenButtonStatus
  comment?: string
  billingCycle?: string
  budgetBill?: string
  lastBillAmount?: number
  notifications?: objectTypes.GreenButtonCustomerAccountNotification[]
  contactInfo?: objectTypes.GreenButtonContactInfo
  accountId?: string
}

export interface CustomerAgreementContent {
  type?: string
  authorName?: string
  createdDateTime?: objectTypes.timestampNumber
  lastModifiedDateTime?: objectTypes.timestampNumber
  revisionNumber?: string
  electronicAddress?: objectTypes.GreenButtonElectronicAddress
  subject?: string
  title?: string
  docStatus?: objectTypes.GreenButtonStatus
  status?: objectTypes.GreenButtonStatus
  comment?: string
  signDate?: objectTypes.timestampNumber
  validityInterval?: objectTypes.GreenButtonDuration
  loadMgmt?: string
  isPrePay?: objectTypes.booleanString
  shutOffDateTime?: objectTypes.timestampNumber
  DemandResponseProgram?: objectTypes.GreenButtonDemandResponseProgram[]
  PricingStructures?: objectTypes.urlString[]

  currency?: keyof typeof lookups.currencies
  currency_value?: (typeof lookups.currencies)[keyof typeof lookups.currencies]

  futureStatus?: objectTypes.GreenButtonStatus
  agreementId?: string
}

export interface ElectricPowerQualitySummaryContent {
  summaryInterval: objectTypes.GreenButtonDuration
  flickerPlt?: number
  flickerPst?: number
  harmonicVoltage?: number
  longInterruptions?: number
  mainsVoltage?: number
  measurementProtocol?: number
  powerFrequency?: number
  rapidVoltageChanges?: number
  shortInterruptions?: number
  supplyVoltageDips?: number
  supplyVoltageVariations?: number
  tempOvervoltage?: number
}

export interface IntervalBlockContent {
  interval: objectTypes.GreenButtonDuration
  IntervalReading?: objectTypes.GreenButtonIntervalReading[]
}

export interface LocalTimeParametersContent {
  dstEndRule: string
  dstOffset: number
  dstStartRule: string
  tzOffset: number
}

export interface MeterContent {
  type?: string
  utcNumber?: string
  serialNumber?: string
  lotNumber?: string
  purchasePrice?: string
  critical?: objectTypes.booleanString
  electronicAddress?: objectTypes.GreenButtonElectronicAddress
  lifecycle?: {
    manufacturedDate?: objectTypes.timestampNumber
    purchaseDate?: objectTypes.timestampNumber
    receivedDate?: objectTypes.timestampNumber
    installationDate?: objectTypes.timestampNumber
    removalDate?: objectTypes.timestampNumber
    retiredDate?: objectTypes.timestampNumber
  }
  acceptanceTest?: {
    type?: string
    success?: objectTypes.booleanString
    dateTime?: objectTypes.timestampNumber
  }
  initialCondition?: string
  initialLossOfLife?: number
  isVirtual?: objectTypes.booleanString
  isPan?: objectTypes.booleanString
  installCode?: string
  amrSystem?: string
  formNumber?: string
  MeterMultipliers?: objectTypes.GreenButtonMeterMultiplier[]
  intervalLength?: number
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeterReadingContent {}

export interface ReadingTypeContent {
  accumulationBehaviour?: keyof typeof lookups.accumulationBehaviours
  accumulationBehaviour_value?: (typeof lookups.accumulationBehaviours)[keyof typeof lookups.accumulationBehaviours]

  commodity?: keyof typeof lookups.commodities
  commodity_value?: (typeof lookups.commodities)[keyof typeof lookups.commodities]

  consumptionTier?: number

  currency?: keyof typeof lookups.currencies
  currency_value?: (typeof lookups.currencies)[keyof typeof lookups.currencies]

  dataQualifier?: keyof typeof lookups.dataQualifiers
  dataQualifier_value?: (typeof lookups.dataQualifiers)[keyof typeof lookups.dataQualifiers]

  defaultQuality?: keyof typeof lookups.readingQualities
  defaultQuality_value?: (typeof lookups.readingQualities)[keyof typeof lookups.readingQualities]

  flowDirection?: keyof typeof lookups.flowDirections
  flowDirection_value?: (typeof lookups.flowDirections)[keyof typeof lookups.flowDirections]

  intervalLength?: number

  kind?: keyof typeof lookups.readingTypeKinds
  kind_value?: (typeof lookups.readingTypeKinds)[keyof typeof lookups.readingTypeKinds]

  phase?: keyof typeof lookups.phaseCodes
  phase_value?: (typeof lookups.phaseCodes)[keyof typeof lookups.phaseCodes]

  powerOfTenMultiplier?: keyof typeof lookups.powerOfTenMultipliers
  powerOfTenMultiplier_value?: (typeof lookups.powerOfTenMultipliers)[keyof typeof lookups.powerOfTenMultipliers]

  timeAttribute?: keyof typeof lookups.timeAttributes
  timeAttribute_value?: (typeof lookups.timeAttributes)[keyof typeof lookups.timeAttributes]

  tou?: number

  uom?: keyof typeof lookups.unitsOfMeasurement
  uom_value?: (typeof lookups.unitsOfMeasurement)[keyof typeof lookups.unitsOfMeasurement]

  cpp?: number
  interharmonic?: number

  measuringPeriod?: keyof typeof lookups.measuringPeriods
  measuringPeriod_value?: (typeof lookups.measuringPeriods)[keyof typeof lookups.measuringPeriods]

  argument?: number
}

export interface ServiceLocationContent {
  type?: string
  mainAddress?: objectTypes.GreenButtonStreetAddress
  secondaryAddress?: objectTypes.GreenButtonStreetAddress
  phone1?: objectTypes.GreenButtonTelephoneNumber
  phone2?: objectTypes.GreenButtonTelephoneNumber
  electronicAddress?: objectTypes.GreenButtonElectronicAddress
  geoInfoReference?: string
  direction?: string
  status?: objectTypes.GreenButtonStatus
  positionPoints?: objectTypes.GreenButtonPositionPoint[]
  accessMethod?: string
  siteAccessProblem?: string
  needsInspection?: objectTypes.booleanString
  UsagePoints?: objectTypes.GreenButtonUsagePoint[]
  outageBlock?: string
}

export interface ServiceStatusContent {
  currentStatus: keyof typeof lookups.currentStatuses
  currentStatus_value?: (typeof lookups.currentStatuses)[keyof typeof lookups.currentStatuses]
}

export interface ServiceSupplierContent {
  Organisation?: objectTypes.GreenButtonContactInfo

  kind?: keyof typeof lookups.serviceSupplierKinds
  kind_value?: (typeof lookups.serviceSupplierKinds)[keyof typeof lookups.serviceSupplierKinds]

  issuerIdentificationNumber?: string
  effectiveDate?: objectTypes.timestampNumber
}

// eslint-disable-next-line import/namespace
export interface UsagePointContent extends objectTypes.GreenButtonUsagePoint {}

export interface UsageSummaryContent {
  billingPeriod: objectTypes.GreenButtonDuration
  statusTimeStamp: objectTypes.timestampNumber
  billLastPeriod?: number
  billToDate?: number
  costAdditionalLastPeriod?: number
  costAdditionalDetailsLastPeriod?: objectTypes.GreenButtonCostAdditionalDetail[]

  currency?: keyof typeof lookups.currencies
  currency_value?: (typeof lookups.currencies)[keyof typeof lookups.currencies]

  overallConsumptionLastPeriod?: objectTypes.GreenButtonSummaryMeasurement
  currentBillingPeriodOverAllConsumption?: objectTypes.GreenButtonSummaryMeasurement
  currentDayLastYearNetConsumption?: objectTypes.GreenButtonSummaryMeasurement
  currentDayNetConsumption?: objectTypes.GreenButtonSummaryMeasurement
  currentDayOverallConsumption?: objectTypes.GreenButtonSummaryMeasurement
  peakDemand?: objectTypes.GreenButtonSummaryMeasurement
  previousDayLastYearOverallConsumption?: objectTypes.GreenButtonSummaryMeasurement
  previousDayNetConsumption?: objectTypes.GreenButtonSummaryMeasurement
  previousDayOverallConsumption?: objectTypes.GreenButtonSummaryMeasurement

  qualityOfReading?: keyof typeof lookups.readingQualities
  qualityOfReading_value?: (typeof lookups.readingQualities)[keyof typeof lookups.readingQualities]

  ratchetDemand?: objectTypes.GreenButtonSummaryMeasurement
  ratchetDemandPeriod?: objectTypes.GreenButtonDuration

  commodity?: keyof typeof lookups.commodities
  commodity_value?: (typeof lookups.commodities)[keyof typeof lookups.commodities]

  tariffProfile?: string
  readCycle?: string
  tariffRiderRefs?: {
    tariffRiderRef?: objectTypes.GreenButtonTariffRider[]
  }
  billingChargeSource?: {
    agencyName?: string
  }
}

export type GreenButtonContentType =
  | 'ApplicationInformation'
  | 'Authorization'
  | 'BatchList'
  | 'Customer'
  | 'CustomerAccount'
  | 'CustomerAgreement'
  | 'ElectricPowerQualitySummary'
  | 'ElectricPowerUsageSummary'
  | 'EnergyUsageSummary'
  | 'IntervalBlock'
  | 'LocalTimeParameters'
  | 'Meter'
  | 'MeterReading'
  | 'ReadingType'
  | 'ServiceLocation'
  | 'ServiceStatus'
  | 'ServiceSupplier'
  | 'UsagePoint'
  | 'UsageSummary'

export type GreenButtonContent =
  | ApplicationInformationContent
  | AuthorizationContent
  | BatchListContent
  | CustomerContent
  | CustomerAccountContent
  | CustomerAgreementContent
  | ElectricPowerQualitySummaryContent
  | IntervalBlockContent
  | LocalTimeParametersContent
  | MeterContent
  | MeterReadingContent
  | ReadingTypeContent
  | ServiceLocationContent
  | ServiceStatusContent
  | ServiceSupplierContent
  | UsagePointContent
  | UsageSummaryContent

/*
 * Entries with Content
 */

export interface GreenButtonEntryWithApplicationInformationContent
  extends GreenButtonEntry {
  content: {
    ApplicationInformation: ApplicationInformationContent
  }
}

export interface GreenButtonEntryWithAuthorizationContent
  extends GreenButtonEntry {
  content: {
    Authorization: AuthorizationContent
  }
}

export interface GreenButtonEntryWithBatchListContent extends GreenButtonEntry {
  content: {
    BatchList: BatchListContent
  }
}

export interface GreenButtonEntryWithCustomerContent extends GreenButtonEntry {
  content: {
    Customer: CustomerContent
  }
}

export interface GreenButtonEntryWithCustomerAccountContent
  extends GreenButtonEntry {
  content: {
    CustomerAccount: CustomerAccountContent
  }
}

export interface GreenButtonEntryWithCustomerAgreementContent
  extends GreenButtonEntry {
  content: {
    CustomerAgreement: CustomerAgreementContent
  }
}

export interface GreenButtonEntryWithElectricPowerQualitySummaryContent
  extends GreenButtonEntry {
  content: {
    ElectricPowerQualitySummary: ElectricPowerQualitySummaryContent
  }
}

export interface GreenButtonEntryWithIntervalBlockContent
  extends GreenButtonEntry {
  content: {
    IntervalBlock: IntervalBlockContent[]
  }
}

export interface GreenButtonEntryWithLocalTimeParametersContent
  extends GreenButtonEntry {
  content: {
    LocalTimeParameters: LocalTimeParametersContent
  }
}

export interface GreenButtonEntryWithMeterContent extends GreenButtonEntry {
  content: {
    Meter: MeterContent
  }
}

export interface GreenButtonEntryWithMeterReadingContent
  extends GreenButtonEntry {
  content: {
    MeterReading: MeterReadingContent
  }
}

export interface GreenButtonEntryWithReadingTypeContent
  extends GreenButtonEntry {
  content: {
    ReadingType: ReadingTypeContent
  }
}

export interface GreenButtonEntryWithServiceLocationContent
  extends GreenButtonEntry {
  content: {
    ServiceLocation: ServiceLocationContent
  }
}

export interface GreenButtonEntryWithServiceStatusContent
  extends GreenButtonEntry {
  content: {
    ServiceStatus: ServiceStatusContent
  }
}

export interface GreenButtonEntryWithServiceSupplierContent
  extends GreenButtonEntry {
  content: {
    ServiceSupplier: ServiceSupplierContent
  }
}

export interface GreenButtonEntryWithUsagePointContent
  extends GreenButtonEntry {
  content: {
    UsagePoint: UsagePointContent
  }
}

export interface GreenButtonEntryWithUsageSummaryContent
  extends GreenButtonEntry {
  content: {
    UsageSummary: UsageSummaryContent
  }
}
