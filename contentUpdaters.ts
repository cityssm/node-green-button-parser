// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-named-as-default-member */

import lookups from './lookups.js'
import {
  parseAuthorizationScope,
  updateCostAdditionalDetail,
  updateSummaryMeasurement,
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
  GreenButtonEntryContent,
  IntervalBlockContent,
  MeterContent,
  ReadingTypeContent,
  ServiceLocationContent,
  ServiceStatusContent,
  ServiceSupplierContent,
  UsagePointContent,
  UsageSummaryContent
} from './types/entryTypes.js'
import { ensureArray } from './utilities.js'

function updateApplicationInformationContent(
  content?: ApplicationInformationContent
): void {
  if (content === undefined) {
    return
  }

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

  ensureArray(content, 'contacts')
  ensureArray(content, 'scope')

  if (content.grant_types !== undefined) {
    ensureArray(content, 'grant_types')

    content.grant_types_values = []

    for (const grantType of content.grant_types) {
      content.grant_types_values.push(lookups.grantTypes[grantType])
    }
  }

  content.response_types_value = lookups.responseTypes[content.response_types]
}

function updateAuthorizationContent(content?: AuthorizationContent): void {
  if (content === undefined) {
    return
  }

  content.status_value = lookups.authorizationStatuses[content.status]

  if (content.grant_type !== undefined) {
    content.grant_type_value = lookups.grantTypes[content.grant_type]
  }

  content.token_type_value = lookups.grantTypes[content.token_type]

  if (content.error !== undefined) {
    content.error_value = lookups.authorizationErrors[content.error]
  }

  content.scope_functionBlock = parseAuthorizationScope(content.scope)
}

function updateBatchListContent(content?: BatchListContent): void {
  if (content === undefined) {
    return
  }

  ensureArray(content, 'resources')
}

function updateCustomerContent(content?: CustomerContent): void {
  if (content === undefined) {
    return
  }

  if (content.kind !== undefined) {
    content.kind_value = lookups.customerKinds[content.kind]
  }
}

function updateCustomerAccountContent(content?: CustomerAccountContent): void {
  if (content === undefined) {
    return
  }

  if (content.notifications !== undefined) {
    ensureArray(content, 'notifications')

    for (const notification of content.notifications) {
      notification.methodKind_value =
        lookups.notificationMethodKinds[notification.methodKind]
    }
  }
}

function updateCustomerAgreementContent(
  content?: CustomerAgreementContent
): void {
  if (content === undefined) {
    return
  }

  if (content.DemandResponseProgram !== undefined) {
    ensureArray(content, 'DemandResponseProgram')

    for (const program of content.DemandResponseProgram) {
      if (program.enrollmentStatus !== undefined) {
        program.enrollmentStatus_value =
          lookups.enrollmentStatuses[program.enrollmentStatus]
      }

      updateSummaryMeasurement(program.capacityReservationLevel)
      updateSummaryMeasurement(program.DRProgramNomination)
    }
  }

  ensureArray(content, 'PricingStructures')

  if (content.currency !== undefined) {
    content.currency_value = lookups.currencies[content.currency]
  }
}

function updateIntervalBlockContent(content?: IntervalBlockContent): void {
  if (content === undefined) {
    return
  }

  ensureArray(content, 'IntervalReading')

  for (const reading of content.IntervalReading ?? []) {
    if (reading.ReadingQuality !== undefined) {
      ensureArray(reading, 'ReadingQuality')

      reading.ReadingQuality_values = []

      for (const quality of reading.ReadingQuality) {
        reading.ReadingQuality_values.push(lookups.readingQualities[quality])
      }
    }
  }
}

function updateMeterContent(content?: MeterContent): void {
  if (content === undefined) {
    return
  }

  if (content.MeterMultipliers !== undefined) {
    ensureArray(content, 'MeterMultipliers')

    for (const multiplier of content.MeterMultipliers) {
      if (multiplier.kind !== undefined) {
        multiplier.kind_value = lookups.meterMultiplierKinds[multiplier.kind]
      }
    }
  }
}

function updateReadingTypeContent(content?: ReadingTypeContent): void {
  if (content === undefined) {
    return
  }

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

  if (content.uom !== undefined) {
    content.uom_value = lookups.unitsOfMeasurement[content.uom]
  }

  if (content.measuringPeriod !== undefined) {
    content.measuringPeriod_value =
      lookups.measuringPeriods[content.measuringPeriod]
  }
}

function updateServiceLocationContent(content?: ServiceLocationContent): void {
  if (content === undefined) {
    return
  }

  ensureArray(content, 'positionPoints')

  if (content.UsagePoints !== undefined) {
    ensureArray(content, 'UsagePoints')

    for (const usagePoint of content.UsagePoints) {
      updateUsagePoint(usagePoint)
    }
  }
}

function updateServiceStatusContent(content?: ServiceStatusContent): void {
  if (content === undefined) {
    return
  }

  content.currentStatus_value = lookups.currentStatuses[content.currentStatus]
}

function updateServiceSupplierContent(content?: ServiceSupplierContent): void {
  if (content === undefined) {
    return
  }

  if (content.kind !== undefined) {
    content.kind_value = lookups.serviceSupplierKinds[content.kind]
  }
}

function updateUsagePointContent(content?: UsagePointContent): void {
  if (content === undefined) {
    return
  }

  updateUsagePoint(content)
}

function updateUsageSummaryContent(content?: UsageSummaryContent): void {
  if (content === undefined) {
    return
  }

  if (content.costAdditionalDetailsLastPeriod !== undefined) {
    ensureArray(content, 'costAdditionalDetailsLastPeriod')

    for (const additionalDetail of content.costAdditionalDetailsLastPeriod) {
      updateCostAdditionalDetail(additionalDetail)
    }
  }

  if (content.currency !== undefined) {
    content.currency_value = lookups.currencies[content.currency]
  }

  updateSummaryMeasurement(content.overallConsumptionLastPeriod)
  updateSummaryMeasurement(content.currentBillingPeriodOverAllConsumption)
  updateSummaryMeasurement(content.currentDayLastYearNetConsumption)
  updateSummaryMeasurement(content.currentDayNetConsumption)
  updateSummaryMeasurement(content.currentDayOverallConsumption)
  updateSummaryMeasurement(content.peakDemand)
  updateSummaryMeasurement(content.previousDayLastYearOverallConsumption)
  updateSummaryMeasurement(content.previousDayNetConsumption)
  updateSummaryMeasurement(content.previousDayOverallConsumption)

  if (content.qualityOfReading !== undefined) {
    content.qualityOfReading_value =
      lookups.readingQualities[content.qualityOfReading]
  }

  updateSummaryMeasurement(content.ratchetDemand)

  if (content.commodity !== undefined) {
    content.commodity_value = lookups.commodities[content.commodity]
  }

  if (content.tariffRiderRefs?.tariffRiderRef !== undefined) {
    ensureArray(content.tariffRiderRefs, 'tariffRiderRef')

    for (const tariffRider of content.tariffRiderRefs.tariffRiderRef) {
      updateTariffRider(tariffRider)
    }
  }
}

export function updateGreenButtonContent(
  entryContent: GreenButtonEntryContent
): void {
  /* eslint-disable @typescript-eslint/no-explicit-any */

  // Fix renamed EnergyUsageSummary
  if ((entryContent as any).EnergyUsageSummary !== undefined) {
    entryContent.UsageSummary = (entryContent as any).EnergyUsageSummary
    delete (entryContent as any).EnergyUsageSummary
  }

  // Fix renamed ElectricPowerUsageSummary
  if ((entryContent as any).ElectricPowerUsageSummary !== undefined) {
    entryContent.UsageSummary = (entryContent as any).ElectricPowerUsageSummary
    delete (entryContent as any).ElectricPowerUsageSummary
  }

  /* eslint-enable @typescript-eslint/no-explicit-any */

  updateApplicationInformationContent(entryContent.ApplicationInformation)
  updateAuthorizationContent(entryContent.Authorization)
  updateBatchListContent(entryContent.BatchList)
  updateCustomerContent(entryContent.Customer)
  updateCustomerAccountContent(entryContent.CustomerAccount)
  updateCustomerAgreementContent(entryContent.CustomerAgreement)

  for (const block of entryContent.IntervalBlock ?? []) {
    updateIntervalBlockContent(block)
  }

  updateMeterContent(entryContent.Meter)
  updateReadingTypeContent(entryContent.ReadingType)
  updateServiceLocationContent(entryContent.ServiceLocation)
  updateServiceStatusContent(entryContent.ServiceStatus)
  updateServiceSupplierContent(entryContent.ServiceSupplier)
  updateUsagePointContent(entryContent.UsagePoint)
  updateUsageSummaryContent(entryContent.UsageSummary)
}
