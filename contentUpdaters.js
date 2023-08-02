import 'core-js';
import * as lookups from './lookups.js';
import { updateCostAdditionalDetail, updateSummaryMeasurement, updateTariffRider, updateUsagePoint } from './objectUpdaters.js';
function updateApplicationInformationContent(content) {
    if (content === undefined) {
        return;
    }
    content.dataCustodianApplicationStatusValue =
        lookups.dataCustodianApplicationStatuses[content.dataCustodianApplicationStatus];
    if (content.thirdPartyApplicationStatus !== undefined) {
        content.thirdPartyApplicationStatus_value =
            lookups.thirdPartyApplicationStatuses[content.thirdPartyApplicationStatus];
    }
    if (content.thirdPartyApplicationType !== undefined) {
        content.thirdPartyApplicationType_value =
            lookups.thirdPartyApplicationTypes[content.thirdPartyApplicationType];
    }
    if (content.thirdPartyApplicationUse !== undefined) {
        content.thirdPartyApplicationUse_value =
            lookups.thirdPartyApplicationUses[content.thirdPartyApplicationUse];
    }
    if (!Array.isArray(content.grant_types)) {
        content.grant_types = [content.grant_types];
    }
    if (content.contacts !== undefined && !Array.isArray(content.contacts)) {
        content.contacts = [content.contacts];
    }
    if (!Array.isArray(content.scope)) {
        content.scope = [content.scope];
    }
    content.grant_types_values = [];
    for (const grantType of content.grant_types) {
        content.grant_types_values.push(lookups.grantTypes[grantType]);
    }
    content.response_types_value = lookups.responseTypes[content.response_types];
}
function updateAuthorizationContent(content) {
    if (content === undefined) {
        return;
    }
    content.status_value = lookups.authorizationStatuses[content.status];
    if (content.grant_type !== undefined) {
        content.grant_type_value = lookups.grantTypes[content.grant_type];
    }
    content.token_type_value = lookups.grantTypes[content.token_type];
    if (content.error !== undefined) {
        content.error_value = lookups.authorizationErrors[content.error];
    }
}
function updateBatchListContent(content) {
    if (content === undefined) {
        return;
    }
    if (!Array.isArray(content.resources)) {
        content.resources = [content.resources];
    }
}
function updateCustomerContent(content) {
    if (content === undefined) {
        return;
    }
    if (content.kind !== undefined) {
        content.kind_value = lookups.customerKinds[content.kind];
    }
}
function updateCustomerAccountContent(content) {
    if (content === undefined) {
        return;
    }
    if (content.notifications !== undefined) {
        if (!Array.isArray(content.notifications)) {
            content.notifications = [content.notifications];
        }
        for (const notification of content.notifications) {
            notification.methodKind_value =
                lookups.notificationMethodKinds[notification.methodKind];
        }
    }
}
function updateCustomerAgreementContent(content) {
    if (content === undefined) {
        return;
    }
    if (content.DemandResponseProgram !== undefined) {
        if (!Array.isArray(content.DemandResponseProgram)) {
            content.DemandResponseProgram = [content.DemandResponseProgram];
        }
        for (const program of content.DemandResponseProgram) {
            if (program.enrollmentStatus !== undefined) {
                program.enrollmentStatus_value =
                    lookups.enrollmentStatuses[program.enrollmentStatus];
            }
            updateSummaryMeasurement(program.capacityReservationLevel);
            updateSummaryMeasurement(program.DRProgramNomination);
        }
    }
    if (content.PricingStructures !== undefined &&
        !Array.isArray(content.PricingStructures)) {
        content.PricingStructures = [content.PricingStructures];
    }
    if (content.currency !== undefined) {
        content.currency_value = lookups.currencies[content.currency];
    }
}
function updateIntervalBlockContent(content) {
    if (content === undefined) {
        return;
    }
    if (content.IntervalReading !== undefined &&
        !Array.isArray(content.IntervalReading)) {
        content.IntervalReading = [content.IntervalReading];
    }
    for (const reading of content.IntervalReading ?? []) {
        if (reading.ReadingQuality !== undefined) {
            if (!Array.isArray(reading.ReadingQuality)) {
                reading.ReadingQuality = [reading.ReadingQuality];
            }
            reading.ReadingQuality_values = [];
            for (const quality of reading.ReadingQuality) {
                reading.ReadingQuality_values.push(lookups.readingQualities[quality]);
            }
        }
    }
}
function updateMeterContent(content) {
    if (content === undefined) {
        return;
    }
    if (content.MeterMultipliers !== undefined) {
        if (!Array.isArray(content.MeterMultipliers)) {
            content.MeterMultipliers = [content.MeterMultipliers];
        }
        for (const multiplier of content.MeterMultipliers) {
            if (multiplier.kind !== undefined) {
                multiplier.kind_value = lookups.meterMultiplierKinds[multiplier.kind];
            }
        }
    }
}
function updateReadingTypeContent(content) {
    if (content === undefined) {
        return;
    }
    if (content.accumulationBehaviour !== undefined) {
        content.accumulationBehaviour_value =
            lookups.accumulationBehaviours[content.accumulationBehaviour];
    }
    if (content.commodity !== undefined) {
        content.commodity_value = lookups.commodities[content.commodity];
    }
    if (content.currency !== undefined) {
        content.currency_value = lookups.currencies[content.currency];
    }
    if (content.dataQualifier !== undefined) {
        content.dataQualifier_value = lookups.dataQualifiers[content.dataQualifier];
    }
    if (content.defaultQuality !== undefined) {
        content.defaultQuality_value =
            lookups.readingQualities[content.defaultQuality];
    }
    if (content.flowDirection !== undefined) {
        content.flowDirection_value = lookups.flowDirections[content.flowDirection];
    }
    if (content.kind !== undefined) {
        content.kind_value = lookups.readingTypeKinds[content.kind];
    }
    if (content.phase !== undefined) {
        content.phase_value = lookups.phaseCodes[content.phase];
    }
    if (content.powerOfTenMultiplier !== undefined) {
        content.powerOfTenMultiplier_value =
            lookups.powerOfTenMultipliers[content.powerOfTenMultiplier];
    }
    if (content.timeAttribute !== undefined) {
        content.timeAttribute_value = lookups.timeAttributes[content.timeAttribute];
    }
    if (content.uom !== undefined) {
        content.uom_value = lookups.unitsOfMeasurement[content.uom];
    }
    if (content.measuringPeriod !== undefined) {
        content.measuringPeriod_value =
            lookups.measuringPeriods[content.measuringPeriod];
    }
}
function updateServiceLocationContent(content) {
    if (content === undefined) {
        return;
    }
    if (content.positionPoints !== undefined &&
        !Array.isArray(content.positionPoints)) {
        content.positionPoints = [content.positionPoints];
    }
    if (content.UsagePoints !== undefined) {
        if (!Array.isArray(content.UsagePoints)) {
            content.UsagePoints = [content.UsagePoints];
        }
        for (const usagePoint of content.UsagePoints) {
            updateUsagePoint(usagePoint);
        }
    }
}
function updateServiceStatusContent(content) {
    if (content === undefined) {
        return;
    }
    content.currentStatus_value = lookups.currentStatuses[content.currentStatus];
}
function updateServiceSupplierContent(content) {
    if (content === undefined) {
        return;
    }
    if (content.kind !== undefined) {
        content.kind_value = lookups.serviceSupplierKinds[content.kind];
    }
}
function updateUsagePointContent(content) {
    if (content === undefined) {
        return;
    }
    updateUsagePoint(content);
}
function updateUsageSummaryContent(content) {
    if (content === undefined) {
        return;
    }
    if (content.costAdditionalDetailsLastPeriod !== undefined) {
        if (!Array.isArray(content.costAdditionalDetailsLastPeriod)) {
            content.costAdditionalDetailsLastPeriod = [
                content.costAdditionalDetailsLastPeriod
            ];
        }
        for (const additionalDetail of content.costAdditionalDetailsLastPeriod) {
            updateCostAdditionalDetail(additionalDetail);
        }
    }
    if (content.currency !== undefined) {
        content.currency_value = lookups.currencies[content.currency];
    }
    updateSummaryMeasurement(content.overallConsumptionLastPeriod);
    updateSummaryMeasurement(content.currentBillingPeriodOverAllConsumption);
    updateSummaryMeasurement(content.currentDayLastYearNetConsumption);
    updateSummaryMeasurement(content.currentDayNetConsumption);
    updateSummaryMeasurement(content.currentDayOverallConsumption);
    updateSummaryMeasurement(content.peakDemand);
    updateSummaryMeasurement(content.previousDayLastYearOverallConsumption);
    updateSummaryMeasurement(content.previousDayNetConsumption);
    updateSummaryMeasurement(content.previousDayOverallConsumption);
    if (content.qualityOfReading !== undefined) {
        content.qualityOfReading_value =
            lookups.readingQualities[content.qualityOfReading];
    }
    updateSummaryMeasurement(content.ratchetDemand);
    if (content.commodity !== undefined) {
        content.commodity_value = lookups.commodities[content.commodity];
    }
    if (content.tariffRiderRefs?.tariffRiderRef !== undefined) {
        if (!Array.isArray(content.tariffRiderRefs.tariffRiderRef)) {
            content.tariffRiderRefs.tariffRiderRef = [
                content.tariffRiderRefs.tariffRiderRef
            ];
        }
        for (const tariffRider of content.tariffRiderRefs.tariffRiderRef) {
            updateTariffRider(tariffRider);
        }
    }
}
export function updateGreenButtonContent(entryContent) {
    if (entryContent.EnergyUsageSummary !== undefined) {
        entryContent.UsageSummary = entryContent.EnergyUsageSummary;
        delete entryContent.EnergyUsageSummary;
    }
    if (entryContent.ElectricPowerUsageSummary !== undefined) {
        entryContent.UsageSummary = entryContent.ElectricPowerUsageSummary;
        delete entryContent.ElectricPowerUsageSummary;
    }
    updateApplicationInformationContent(entryContent.ApplicationInformation);
    updateAuthorizationContent(entryContent.Authorization);
    updateBatchListContent(entryContent.BatchList);
    updateCustomerContent(entryContent.Customer);
    updateCustomerAccountContent(entryContent.CustomerAccount);
    updateCustomerAgreementContent(entryContent.CustomerAgreement);
    for (const block of entryContent.IntervalBlock ?? []) {
        updateIntervalBlockContent(block);
    }
    updateMeterContent(entryContent.Meter);
    updateReadingTypeContent(entryContent.ReadingType);
    updateServiceLocationContent(entryContent.ServiceLocation);
    updateServiceStatusContent(entryContent.ServiceStatus);
    updateServiceSupplierContent(entryContent.ServiceSupplier);
    updateUsagePointContent(entryContent.UsagePoint);
    updateUsageSummaryContent(entryContent.UsageSummary);
}
