import * as lookups from './lookups.js'
import type {
  GreenButtonCostAdditionalDetail,
  GreenButtonSummaryMeasurement,
  GreenButtonTariffRider,
  GreenButtonUsagePoint
} from './types/objectTypes.js'

export function updateSummaryMeasurement(
  measurement?: GreenButtonSummaryMeasurement
): void {
  if (measurement === undefined) {
    return
  }

  if (measurement.powerOfTenMultiplier !== undefined) {
    measurement.powerOfTenMultiplier_value =
      lookups.powerOfTenMultipliers[measurement.powerOfTenMultiplier]
  }

  if (measurement.uom !== undefined) {
    measurement.uom_value = lookups.unitsOfMeasurement[measurement.uom]
  }
}

export function updateTariffRider(tariffRider: GreenButtonTariffRider): void {
  tariffRider.enrollmentStatus_value =
    lookups.enrollmentStatuses[tariffRider.enrollmentStatus]
}

export function updateUsagePoint(usagePoint: GreenButtonUsagePoint): void {
  if (usagePoint.ServiceCategory !== undefined) {
    usagePoint.ServiceCategory.kind_value =
      lookups.serviceCategoryKinds[usagePoint.ServiceCategory.kind]
  }

  if (
    usagePoint.ServiceDeliveryPoint?.tariffRiderRefs?.tariffRiderRef !==
    undefined
  ) {
    if (
      !Array.isArray(
        usagePoint.ServiceDeliveryPoint.tariffRiderRefs.tariffRiderRef
      )
    ) {
      usagePoint.ServiceDeliveryPoint.tariffRiderRefs.tariffRiderRef = [
        usagePoint.ServiceDeliveryPoint.tariffRiderRefs.tariffRiderRef
      ]
    }

    for (const tariffRider of usagePoint.ServiceDeliveryPoint.tariffRiderRefs
      .tariffRiderRef) {
      updateTariffRider(tariffRider)
    }
  }

  if (usagePoint.amiBillingReady !== undefined) {
    usagePoint.amiBillingReady_value =
      lookups.amiBillingReadyStatuses[usagePoint.amiBillingReady]
  }

  if (usagePoint.connectionState !== undefined) {
    usagePoint.connectionState_value =
      lookups.connectionStates[usagePoint.connectionState]
  }

  updateSummaryMeasurement(usagePoint.estimatedLoad)
  updateSummaryMeasurement(usagePoint.nominalServiceVoltage)

  if (usagePoint.phaseCode !== undefined) {
    usagePoint.phaseCode_value = lookups.phaseCodes[usagePoint.phaseCode]
  }

  updateSummaryMeasurement(usagePoint.ratedCurrent)
  updateSummaryMeasurement(usagePoint.ratedPower)

  if (usagePoint.pnodeRefs !== undefined) {
    if (!Array.isArray(usagePoint.pnodeRefs.pnodeRef)) {
      usagePoint.pnodeRefs.pnodeRef = [usagePoint.pnodeRefs.pnodeRef]
    }

    for (const pnode of usagePoint.pnodeRefs.pnodeRef) {
      pnode.apnodeType_value = lookups.pnodeTypes[pnode.apnodeType]
    }
  }

  if (usagePoint.aggregateNodeRefs !== undefined) {
    if (!Array.isArray(usagePoint.aggregateNodeRefs.aggregateNodeRef)) {
      usagePoint.aggregateNodeRefs.aggregateNodeRef = [
        usagePoint.aggregateNodeRefs.aggregateNodeRef
      ]
    }

    for (const anode of usagePoint.aggregateNodeRefs.aggregateNodeRef) {
      anode.anodeType_value = lookups.anodeTypes[anode.anodeType]
    }
  }
}

export function updateCostAdditionalDetail(
  additionalDetail: GreenButtonCostAdditionalDetail
): void {
  additionalDetail.itemKind_value =
    lookups.costDetailItemKinds[additionalDetail.itemKind]

  updateSummaryMeasurement(additionalDetail.measurement)
  updateSummaryMeasurement(additionalDetail.unitCost)
  updateSummaryMeasurement(additionalDetail.itemPeriod)
}
