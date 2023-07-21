import * as lookups from './lookups.js'
import type {
  GreenButtonCostAdditionalDetail,
  GreenButtonTariffRider,
  GreenButtonUsagePoint
} from './objectTypes.js'

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
}

export function updateCostAdditionalDetail(
  additionalDetail: GreenButtonCostAdditionalDetail
): void {
  additionalDetail.itemKind_value =
    lookups.costDetailItemKinds[additionalDetail.itemKind]
}
