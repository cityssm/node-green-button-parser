// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/indent */

import type lookups from '../lookups.js'

export type GBBooleanString = 'true' | 'false'
export type GBTimestampNumber = number
export type GBUrlString = `http://${string}` | `https://${string}`

export interface GreenButtonDuration {
  duration: number
  start: number
}

export interface GreenButtonStatus {
  value?: string
  dateTime?: number
  remark?: string
  reason?: string
}

export interface GreenButtonElectronicAddress {
  lan?: string
  mac?: string
  email1?: string
  email2?: string
  web?: string
  radio?: string
  userID?: string
  password?: string
}

export interface GreenButtonStreetAddress {
  streetDetail?: {
    number?: string
    name?: string
    suffix?: string
    prefix?: string
    type?: string
    code?: string
    buildingName?: string
    suiteNumber?: string
    addressGeneral?: string
    addressGeneral2?: string
    addressGeneral3?: string
    withinTownLimits?: GBBooleanString
  }
  townDetail?: {
    code?: string
    section?: string
    name?: string
    county?: string
    stateOrProvince?: string
    country?: string
  }
  status?: GreenButtonStatus
  postalCode?: string
  poBox?: string
}

export interface GreenButtonTelephoneNumber {
  countryCode?: string | number
  areaCode?: string | number
  cityCode?: string | number
  localNumber?: string | number
  ext?: string | number
  dialOut?: string | number
  internationalPrefix?: string | number
  ituPhone?: string
}

export interface GreenButtonContactInfo {
  streetAddress?: GreenButtonStreetAddress
  postalAddress?: GreenButtonStreetAddress
  phone1?: GreenButtonTelephoneNumber
  phone2?: GreenButtonTelephoneNumber
  electronicAddress?: GreenButtonElectronicAddress
  organisationName?: string
}

export interface GreenButtonSummaryMeasurement {
  powerOfTenMultiplier?: keyof typeof lookups.powerOfTenMultipliers
  powerOfTenMultiplier_value?: (typeof lookups.powerOfTenMultipliers)[keyof typeof lookups.powerOfTenMultipliers]

  timeStamp?: GBTimestampNumber

  uom?: keyof typeof lookups.unitsOfMeasurement
  uom_value?: (typeof lookups.unitsOfMeasurement)[keyof typeof lookups.unitsOfMeasurement]

  value?: number
  readingTypeRef?: GBUrlString
}

export interface GreenButtonCustomerAccountNotification {
  methodKind: keyof typeof lookups.notificationMethodKinds
  methodKind_value: (typeof lookups.notificationMethodKinds)[keyof typeof lookups.notificationMethodKinds]

  time: GBTimestampNumber
  note: string
  customerNotificationKind: string
}

export interface GreenButtonDemandResponseProgram {
  programName?: string

  enrollmentStatus?: keyof typeof lookups.enrollmentStatuses
  enrollmentStatus_value?: (typeof lookups.enrollmentStatuses)[keyof typeof lookups.enrollmentStatuses]

  programDescription?: GBUrlString
  programDate?: {
    programDate?: GBTimestampNumber
    programDateDescription?: string
  }
  capacityReservationLevel?: GreenButtonSummaryMeasurement
  DRProgramNomination?: GreenButtonSummaryMeasurement
}

export interface GreenButtonIntervalReading {
  timePeriod?: GreenButtonDuration
  value?: number
  cost?: number

  ReadingQuality?: Array<keyof typeof lookups.readingQualities>
  ReadingQuality_values: Array<
    (typeof lookups.readingQualities)[keyof typeof lookups.readingQualities]
  >

  consumptionTier?: number

  /** Time of Use Code */
  tou?: number

  /** Critical Peak Period */
  cpp?: number
}

export interface GreenButtonMeterMultiplier {
  kind?: keyof typeof lookups.meterMultiplierKinds
  kind_value?: (typeof lookups.meterMultiplierKinds)[keyof typeof lookups.meterMultiplierKinds]

  value?: number
}

export interface GreenButtonPositionPoint {
  xPosition?: string
  yPosition?: string
  zPosition?: string
}

export interface GreenButtonTariffRider {
  riderType: string

  enrollmentStatus: keyof typeof lookups.enrollmentStatuses
  enrollmentStatus_value?: (typeof lookups.enrollmentStatuses)[keyof typeof lookups.enrollmentStatuses]

  effectiveDate: GBTimestampNumber
}

export interface GreenButtonPNode {
  apnodeType: keyof typeof lookups.pnodeTypes
  apnodeType_value?: (typeof lookups.pnodeTypes)[keyof typeof lookups.pnodeTypes]
  ref: string
  startEffectiveDate?: GBTimestampNumber
  endEffectiveDate?: GBTimestampNumber
}

export interface GreenButtonAggregateNode {
  anodeType: keyof typeof lookups.anodeTypes
  anodeType_value?: (typeof lookups.anodeTypes)[keyof typeof lookups.anodeTypes]
  ref: string
  startEffectiveDate?: GBTimestampNumber
  endEffectiveDate?: GBTimestampNumber
}

export interface GreenButtonUsagePoint {
  roleFlags?: string
  ServiceCategory?: {
    kind: keyof typeof lookups.serviceCategoryKinds
    kind_value: (typeof lookups.serviceCategoryKinds)[keyof typeof lookups.serviceCategoryKinds]
  }
  status?: 0 | 1
  ServiceDeliveryPoint?: {
    name?: string
    tariffProfile?: string
    customerAgreement?: string
    tariffRiderRefs?: {
      tariffRiderRef?: GreenButtonTariffRider[]
    }
  }

  amiBillingReady?: keyof typeof lookups.amiBillingReadyStatuses
  amiBillingReady_value?: (typeof lookups.amiBillingReadyStatuses)[keyof typeof lookups.amiBillingReadyStatuses]

  checkBilling?: GBBooleanString

  connectionState?: keyof typeof lookups.connectionStates
  connectionState_value?: (typeof lookups.connectionStates)[keyof typeof lookups.connectionStates]

  estimatedLoad?: GreenButtonSummaryMeasurement
  grounded?: GBBooleanString

  /** Is Service Delivery Point */
  isSdp?: GBBooleanString
  isVirtual?: GBBooleanString
  minimalUsageExpected?: GBBooleanString
  nominalServiceVoltage?: GreenButtonSummaryMeasurement
  outageRegion?: string

  phaseCode?: keyof typeof lookups.phaseCodes
  phaseCode_value?: (typeof lookups.phaseCodes)[keyof typeof lookups.phaseCodes]

  ratedCurrent?: GreenButtonSummaryMeasurement
  ratedPower?: GreenButtonSummaryMeasurement
  readCycle?: string
  readRoute?: string
  serviceDeliveryRemark?: string
  servicePriority?: string
  pnodeRefs?: {
    pnodeRef: GreenButtonPNode[]
  }
  aggregateNodeRefs?: {
    aggregateNodeRef: GreenButtonAggregateNode[]
  }
}

export interface GreenButtonCostAdditionalDetail {
  itemKind: keyof typeof lookups.costDetailItemKinds
  itemKind_value?: (typeof lookups.costDetailItemKinds)[keyof typeof lookups.costDetailItemKinds]

  note: string
  amount?: number
  rounding?: number
  dateTime?: GBTimestampNumber
  measurement?: GreenButtonSummaryMeasurement
  unitCost?: GreenButtonSummaryMeasurement
  itemPeriod?: GreenButtonSummaryMeasurement
}

export interface GreenButtonFunctionBlock {
  functionBlocks: number[]

  /**
   * FB=1
   */
  common: boolean

  /**
   * FB=2
   */
  downloadMyData: boolean

  /**
   * FB=3
   */
  connectMyData: boolean

  /**
   * FB=4
   */
  intervalMetering: boolean

  /**
   * FB=5
   */
  intervalElectricityMetering: boolean

  /**
   * FB=6
   */
  demandElectricityMetering: boolean

  /**
   * FB=7
   */
  netMetering: boolean

  /**
   * FB=8
   */
  forwardAndReverseMetering: boolean

  /**
   * FB=9
   */
  registerValues: boolean

  /**
   * FB=10
   */
  gas: boolean

  /**
   * FB=11
   */
  water: boolean

  /**
   * FB=12
   */
  costOfIntervalData: boolean

  /**
   * FB=13
   */
  securityAndPrivacyClasses: boolean

  /**
   * FB=15
   */
  usageSummary: boolean

  /**
   * FB=16
   */
  usageSummaryWithCost: boolean

  /**
   * FB=17
   */
  powerQualitySummary: boolean

  /**
   * FB=18
   */
  multipleUsagePoints: boolean

  /**
   * FB=19
   */
  partialUpdateData: boolean

  /**
   * FB=27
   */
  usageSummaryWithDemandsAndPreviousDayAttributes: boolean

  /**
   * FB=28
   */
  usageSummaryCostsForCurrentBillingPeriod: boolean

  /**
   * FB=29
   */
  temperatureIntervalMetering: boolean

  /**
   * FB=30
   */
  commonUserExperience: boolean

  /**
   * FB=31
   */
  authorizationAndAuthentication: boolean

  /**
   * FB=32
   */
  resourceLevelRest: boolean

  /**
   * FB=33
   */
  managementRestServices: boolean

  /**
   * FB=34
   */
  sftpForBulk: boolean

  /**
   * FB=35
   */
  restForBulk: boolean

  /**
   * FB=36
   */
  thirdPartyDynamicRegistration: boolean

  /**
   * FB=37
   */
  queryParameters: boolean

  /**
   * FB=38
   */
  onDemandRequests: boolean

  /**
   * FB=39
   */
  pushModel: boolean

  /**
   * FB=40
   */
  offlineAuthorization: boolean

  /**
   * FB=41
   */
  manageApplicationInformationResource: boolean

  /**
   * FB=44
   */
  manageAuthorizationResource: boolean

  /**
   * FB=49
   */
  retailCustomerManagementRest: boolean

  /**
   * FB=50
   */
  retailCustomerResourceLevelRest: boolean

  /**
   * FB=51
   */
  retailCustomerCommon: boolean

  /**
   * FB=52
   */
  retailCustomerDownloadMyData: boolean

  /**
   * FB=53
   */
  retailCustomerConnectMyData: boolean

  /**
   * FB=54
   */
  retailCustomerBasicInformation: boolean

  /**
   * FB=55
   */
  retailCustomerDemographicInformation: boolean

  /**
   * FB=56
   */
  retailCustomerBillingInformation: boolean

  /**
   * FB=57
   */
  retailCustomerAccountAgreementInformation: boolean

  /**
   * FB=58
   */
  retailCustomerServiceLocationInformation: boolean

  /**
   * FB=59
   */
  retailCustomerServiceSupplierInformation: boolean

  /**
   * FB=60
   */
  retailCustomerMeterInformation: boolean

  /**
   * FB=61
   */
  retailCustomerEndDeviceInformation: boolean

  /**
   * FB=62
   */
  retailCustomerProgramDateIdMappingsInformation: boolean

  /**
   * FB=64
   */
  retailCustomerSecurityAndPrivacy: boolean

  /**
   * FB=65
   */
  retailCustomerAuthorizationAndAuthentication: boolean

  /**
   * FB=66
   */
  sftpForRetailCustomerBulk: boolean

  /**
   * FB=67
   */
  restForRetailCustomerBulk: boolean

  /**
   * FB=68
   */
  retailCustomerQueryParameters: boolean

  /**
   * FB=69
   */
  retailCustomerPushModel: boolean

  /**
   * FB=70
   */
  retailCustomerOfflineAuthorization: boolean
}
