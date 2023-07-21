import * as lookups from './lookups.js'
import {
  updateCostAdditionalDetail,
  updateTariffRider,
  updateUsagePoint
} from './objectUpdaters.js'
import type {
  ApplicationInformationContent,
  AuthorizationContent,
  BatchListContent,
  CustomerAccountContent,
  CustomerAgreementContent,
  CustomerContent,
  GreenButtonContent,
  GreenButtonContentType,
  IntervalBlockContent,
  MeterContent,
  ReadingTypeContent,
  ServiceLocationContent,
  ServiceStatusContent,
  ServiceSupplierContent,
  UsagePointContent,
  UsageSummaryContent
} from './types/contentTypes.js'

function updateApplicationInformationContent(
  content: ApplicationInformationContent
): void {
  content.dataCustodianApplicationStatusValue =
    lookups.dataCustodianApplicationStatuses[
      content.dataCustodianApplicationStatus
    ]

  if (content.thirdPartyApplicationStatus !== undefined) {
    content.thirdPartyApplicationStatus_value =
      lookups.thirdPartyApplicationStatuses[content.thirdPartyApplicationStatus]
  }

  if (content.thirdPartyApplicationType !== undefined) {
    content.thirdPartyApplicationType_value =
      lookups.thirdPartyApplicationTypes[content.thirdPartyApplicationType]
  }

  if (content.thirdPartyApplicationUse !== undefined) {
    content.thirdPartyApplicationUse_value =
      lookups.thirdPartyApplicationUses[content.thirdPartyApplicationUse]
  }

  if (!Array.isArray(content.grant_types)) {
    content.grant_types = [content.grant_types]
  }

  if (content.contacts !== undefined && !Array.isArray(content.contacts)) {
    content.contacts = [content.contacts]
  }

  if (!Array.isArray(content.scope)) {
    content.scope = [content.scope]
  }

  content.grant_types_values = []

  for (const grantType of content.grant_types) {
    content.grant_types_values.push(lookups.grantTypes[grantType])
  }

  content.response_types_value = lookups.responseTypes[content.response_types]
}

function updateAuthorizationContent(content: AuthorizationContent): void {
  content.status_value = lookups.authorizationStatuses[content.status]

  if (content.grant_type !== undefined) {
    content.grant_type_value = lookups.grantTypes[content.grant_type]
  }

  content.token_type_value = lookups.grantTypes[content.token_type]

  if (content.error !== undefined) {
    content.error_value = lookups.authorizationErrors[content.error]
  }
}

function updateBatchListContent(content: BatchListContent): void {
  if (!Array.isArray(content.resources)) {
    content.resources = [content.resources]
  }
}

function updateCustomerContent(content: CustomerContent): void {
  if (content.kind !== undefined) {
    content.kind_value = lookups.customerKinds[content.kind]
  }
}

function updateCustomerAccountContent(content: CustomerAccountContent): void {
  if (content.notifications !== undefined) {
    if (!Array.isArray(content.notifications)) {
      content.notifications = [content.notifications]
    }

    for (const notification of content.notifications) {
      notification.methodKind_value =
        lookups.notificationMethodKinds[notification.methodKind]
    }
  }
}

function updateCustomerAgreementContent(
  content: CustomerAgreementContent
): void {
  if (content.DemandResponseProgram !== undefined) {
    if (!Array.isArray(content.DemandResponseProgram)) {
      content.DemandResponseProgram = [content.DemandResponseProgram]
    }

    for (const program of content.DemandResponseProgram) {
      if (program.enrollmentStatus !== undefined) {
        program.enrollmentStatus_value =
          lookups.enrollmentStatuses[program.enrollmentStatus]
      }
    }
  }

  if (
    content.PricingStructures !== undefined &&
    !Array.isArray(content.PricingStructures)
  ) {
    content.PricingStructures = [content.PricingStructures]
  }

  if (content.currency !== undefined) {
    content.currency_value = lookups.currencies[content.currency]
  }
}

function updateIntervalBlockContent(content: IntervalBlockContent): void {
  if (!Array.isArray(content.IntervalReading)) {
    content.IntervalReading = [content.IntervalReading]
  }

  for (const reading of content.IntervalReading) {
    if (reading.ReadingQuality !== undefined) {
      if (!Array.isArray(reading.ReadingQuality)) {
        reading.ReadingQuality = [reading.ReadingQuality]
      }

      reading.ReadingQuality_values = []

      for (const quality of reading.ReadingQuality) {
        reading.ReadingQuality_values.push(lookups.readingQualities[quality])
      }
    }
  }
}

function updateMeterContent(content: MeterContent): void {
  if (content.MeterMultipliers !== undefined) {
    if (!Array.isArray(content.MeterMultipliers)) {
      content.MeterMultipliers = [content.MeterMultipliers]
    }

    for (const multiplier of content.MeterMultipliers) {
      if (multiplier.kind !== undefined) {
        multiplier.kind_value = lookups.meterMultiplierKinds[multiplier.kind]
      }
    }
  }
}

function updateReadingTypeContent(content: ReadingTypeContent): void {
  if (content.accumulationBehaviour !== undefined) {
    content.accumulationBehaviour_value =
      lookups.accumulationBehaviours[content.accumulationBehaviour]
  }

  if (content.commodity !== undefined) {
    content.commodity_value = lookups.commodities[content.commodity]
  }

  if (content.currency !== undefined) {
    content.currency_value = lookups.currencies[content.currency]
  }

  if (content.dataQualifier !== undefined) {
    content.dataQualifier_value = lookups.dataQualifiers[content.dataQualifier]
  }

  if (content.defaultQuality !== undefined) {
    content.defaultQuality_value =
      lookups.readingQualities[content.defaultQuality]
  }

  if (content.flowDirection !== undefined) {
    content.flowDirection_value = lookups.flowDirections[content.flowDirection]
  }

  if (content.kind !== undefined) {
    content.kind_value = lookups.readingTypeKinds[content.kind]
  }

  if (content.phase !== undefined) {
    content.phase_value = lookups.phaseCodes[content.phase]
  }

  if (content.powerOfTenMultiplier !== undefined) {
    content.powerOfTenMultiplier_value =
      lookups.powerOfTenMultipliers[content.powerOfTenMultiplier]
  }

  if (content.timeAttribute !== undefined) {
    content.timeAttribute_value = lookups.timeAttributes[content.timeAttribute]
  }

  if (content.measuringPeriod !== undefined) {
    content.measuringPeriod_value =
      lookups.measuringPeriods[content.measuringPeriod]
  }
}

function updateServiceLocationContent(content: ServiceLocationContent): void {
  if (
    content.positionPoints !== undefined &&
    !Array.isArray(content.positionPoints)
  ) {
    content.positionPoints = [content.positionPoints]
  }

  if (content.UsagePoints !== undefined) {
    if (!Array.isArray(content.UsagePoints)) {
      content.UsagePoints = [content.UsagePoints]
    }

    for (const usagePoint of content.UsagePoints) {
      updateUsagePoint(usagePoint)
    }
  }
}

function updateServiceStatusContent(content: ServiceStatusContent): void {
  content.currentStatus_value = lookups.currentStatuses[content.currentStatus]
}

function updateServiceSupplierContent(content: ServiceSupplierContent): void {
  if (content.kind !== undefined) {
    content.kind_value = lookups.serviceSupplierKinds[content.kind]
  }
}

function updateUsagePointContent(content: UsagePointContent): void {
  updateUsagePoint(content)
}

function updateUsageSummaryContent(content: UsageSummaryContent): void {
  if (content.costAdditionalDetailsLastPeriod !== undefined) {
    if (!Array.isArray(content.costAdditionalDetailsLastPeriod)) {
      content.costAdditionalDetailsLastPeriod = [
        content.costAdditionalDetailsLastPeriod
      ]
    }

    for (const additionalDetail of content.costAdditionalDetailsLastPeriod) {
      updateCostAdditionalDetail(additionalDetail)
    }
  }

  if (content.currency !== undefined) {
    content.currency_value = lookups.currencies[content.currency]
  }

  if (content.qualityOfReading !== undefined) {
    content.qualityOfReading_value =
      lookups.readingQualities[content.qualityOfReading]
  }

  if (content.commodity !== undefined) {
    content.commodity_value = lookups.commodities[content.commodity]
  }

  if (content.tariffRiderRefs?.tariffRiderRef !== undefined) {
    if (!Array.isArray(content.tariffRiderRefs.tariffRiderRef)) {
      content.tariffRiderRefs.tariffRiderRef = [
        content.tariffRiderRefs.tariffRiderRef
      ]
    }

    for (const tariffRider of content.tariffRiderRefs.tariffRiderRef) {
      updateTariffRider(tariffRider)
    }
  }
}

export function updateGreenButtonContent(content: GreenButtonContent): void {
  // Fix renamed types
  if (
    (content.contentType as GreenButtonContentType) === 'EnergyUsageSummary' ||
    (content.contentType as GreenButtonContentType) ===
      'ElectricPowerUsageSummary'
  ) {
    content.contentType = 'UsageSummary'
  }

  switch (content.contentType) {
    case 'ApplicationInformation': {
      updateApplicationInformationContent(content)
      break
    }
    case 'Authorization': {
      updateAuthorizationContent(content)
      break
    }
    case 'BatchList': {
      updateBatchListContent(content)
      break
    }
    case 'Customer': {
      updateCustomerContent(content)
      break
    }
    case 'CustomerAccount': {
      updateCustomerAccountContent(content)
      break
    }
    case 'CustomerAgreement': {
      updateCustomerAgreementContent(content)
      break
    }
    case 'IntervalBlock': {
      updateIntervalBlockContent(content)
      break
    }
    case 'Meter': {
      updateMeterContent(content)
      break
    }
    case 'ReadingType': {
      updateReadingTypeContent(content)
      break
    }
    case 'ServiceLocation': {
      updateServiceLocationContent(content)
      break
    }
    case 'ServiceStatus': {
      updateServiceStatusContent(content)
      break
    }
    case 'ServiceSupplier': {
      updateServiceSupplierContent(content)
      break
    }
    case 'UsagePoint': {
      updateUsagePointContent(content)
      break
    }
    case 'UsageSummary': {
      updateUsageSummaryContent(content)
      break
    }
  }
}
