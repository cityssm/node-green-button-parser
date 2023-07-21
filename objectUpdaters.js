import * as lookups from './lookups.js';
export function updateTariffRider(tariffRider) {
    tariffRider.enrollmentStatus_value =
        lookups.enrollmentStatuses[tariffRider.enrollmentStatus];
}
export function updateUsagePoint(usagePoint) {
    if (usagePoint.ServiceCategory !== undefined) {
        usagePoint.ServiceCategory.kind_value =
            lookups.serviceCategoryKinds[usagePoint.ServiceCategory.kind];
    }
    if (usagePoint.ServiceDeliveryPoint?.tariffRiderRefs?.tariffRiderRef !==
        undefined) {
        if (!Array.isArray(usagePoint.ServiceDeliveryPoint.tariffRiderRefs.tariffRiderRef)) {
            usagePoint.ServiceDeliveryPoint.tariffRiderRefs.tariffRiderRef = [
                usagePoint.ServiceDeliveryPoint.tariffRiderRefs.tariffRiderRef
            ];
        }
        for (const tariffRider of usagePoint.ServiceDeliveryPoint.tariffRiderRefs
            .tariffRiderRef) {
            updateTariffRider(tariffRider);
        }
    }
}
export function updateCostAdditionalDetail(additionalDetail) {
    additionalDetail.itemKind_value =
        lookups.costDetailItemKinds[additionalDetail.itemKind];
}
