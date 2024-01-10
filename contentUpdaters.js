// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-named-as-default-member */
import { accumulationBehaviours, authorizationErrors, authorizationStatuses, commodities, currencies, currentStatuses, customerKinds, dataCustodianApplicationStatuses, dataQualifiers, enrollmentStatuses, flowDirections, grantTypes, measuringPeriods, meterMultiplierKinds, notificationMethodKinds, phaseCodes, powerOfTenMultipliers, readingQualities, readingTypeKinds, responseTypes, serviceSupplierKinds, thirdPartyApplicationStatuses, thirdPartyApplicationTypes, thirdPartyApplicationUses, timeAttributes, unitsOfMeasurement } from './lookups.js';
import { parseAuthorizationScope, updateCostAdditionalDetail, updateSummaryMeasurement, updateTariffRider, updateUsagePoint } from './objectUpdaters.js';
import { ensureArray } from './utilities.js';
function updateApplicationInformationContent(content) {
    if (content === undefined) {
        return;
    }
    content.dataCustodianApplicationStatusValue =
        dataCustodianApplicationStatuses[content.dataCustodianApplicationStatus];
    if (content.thirdPartyApplicationStatus !== undefined) {
        content.thirdPartyApplicationStatus_value =
            thirdPartyApplicationStatuses[content.thirdPartyApplicationStatus];
    }
    if (content.thirdPartyApplicationType !== undefined) {
        content.thirdPartyApplicationType_value =
            thirdPartyApplicationTypes[content.thirdPartyApplicationType];
    }
    if (content.thirdPartyApplicationUse !== undefined) {
        content.thirdPartyApplicationUse_value =
            thirdPartyApplicationUses[content.thirdPartyApplicationUse];
    }
    ensureArray(content, 'contacts');
    ensureArray(content, 'scope');
    if (content.grant_types !== undefined) {
        ensureArray(content, 'grant_types');
        content.grant_types_values = [];
        for (const grantType of content.grant_types) {
            content.grant_types_values.push(grantTypes[grantType]);
        }
    }
    content.response_types_value = responseTypes[content.response_types];
}
function updateAuthorizationContent(content) {
    if (content === undefined) {
        return;
    }
    content.status_value = authorizationStatuses[content.status];
    if (content.grant_type !== undefined) {
        content.grant_type_value = grantTypes[content.grant_type];
    }
    content.token_type_value = grantTypes[content.token_type];
    if (content.error !== undefined) {
        content.error_value = authorizationErrors[content.error];
    }
    content.scope_functionBlock = parseAuthorizationScope(content.scope);
}
function updateBatchListContent(content) {
    if (content === undefined) {
        return;
    }
    ensureArray(content, 'resources');
}
function updateCustomerContent(content) {
    if (content === undefined) {
        return;
    }
    if (content.kind !== undefined) {
        content.kind_value = customerKinds[content.kind];
    }
}
function updateCustomerAccountContent(content) {
    if (content === undefined) {
        return;
    }
    if (content.notifications !== undefined) {
        ensureArray(content, 'notifications');
        for (const notification of content.notifications) {
            notification.methodKind_value =
                notificationMethodKinds[notification.methodKind];
        }
    }
}
function updateCustomerAgreementContent(content) {
    if (content === undefined) {
        return;
    }
    if (content.DemandResponseProgram !== undefined) {
        ensureArray(content, 'DemandResponseProgram');
        for (const program of content.DemandResponseProgram) {
            if (program.enrollmentStatus !== undefined) {
                program.enrollmentStatus_value =
                    enrollmentStatuses[program.enrollmentStatus];
            }
            updateSummaryMeasurement(program.capacityReservationLevel);
            updateSummaryMeasurement(program.DRProgramNomination);
        }
    }
    ensureArray(content, 'PricingStructures');
    if (content.currency !== undefined) {
        content.currency_value = currencies[content.currency];
    }
}
function updateIntervalBlockContent(content) {
    if (content === undefined) {
        return;
    }
    ensureArray(content, 'IntervalReading');
    for (const reading of content.IntervalReading ?? []) {
        if (reading.ReadingQuality !== undefined) {
            ensureArray(reading, 'ReadingQuality');
            reading.ReadingQuality_values = [];
            for (const quality of reading.ReadingQuality) {
                reading.ReadingQuality_values.push(readingQualities[quality]);
            }
        }
    }
}
function updateMeterContent(content) {
    if (content === undefined) {
        return;
    }
    if (content.MeterMultipliers !== undefined) {
        ensureArray(content, 'MeterMultipliers');
        for (const multiplier of content.MeterMultipliers) {
            if (multiplier.kind !== undefined) {
                multiplier.kind_value = meterMultiplierKinds[multiplier.kind];
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
            accumulationBehaviours[content.accumulationBehaviour];
    }
    if (content.commodity !== undefined) {
        content.commodity_value = commodities[content.commodity];
    }
    if (content.currency !== undefined) {
        content.currency_value = currencies[content.currency];
    }
    if (content.dataQualifier !== undefined) {
        content.dataQualifier_value = dataQualifiers[content.dataQualifier];
    }
    if (content.defaultQuality !== undefined) {
        content.defaultQuality_value = readingQualities[content.defaultQuality];
    }
    if (content.flowDirection !== undefined) {
        content.flowDirection_value = flowDirections[content.flowDirection];
    }
    if (content.kind !== undefined) {
        content.kind_value = readingTypeKinds[content.kind];
    }
    if (content.phase !== undefined) {
        content.phase_value = phaseCodes[content.phase];
    }
    if (content.powerOfTenMultiplier !== undefined) {
        content.powerOfTenMultiplier_value =
            powerOfTenMultipliers[content.powerOfTenMultiplier];
    }
    if (content.timeAttribute !== undefined) {
        content.timeAttribute_value = timeAttributes[content.timeAttribute];
    }
    if (content.uom !== undefined) {
        content.uom_value = unitsOfMeasurement[content.uom];
    }
    if (content.measuringPeriod !== undefined) {
        content.measuringPeriod_value = measuringPeriods[content.measuringPeriod];
    }
}
function updateServiceLocationContent(content) {
    if (content === undefined) {
        return;
    }
    ensureArray(content, 'positionPoints');
    if (content.UsagePoints !== undefined) {
        ensureArray(content, 'UsagePoints');
        for (const usagePoint of content.UsagePoints) {
            updateUsagePoint(usagePoint);
        }
    }
}
function updateServiceStatusContent(content) {
    if (content === undefined) {
        return;
    }
    content.currentStatus_value = currentStatuses[content.currentStatus];
}
function updateServiceSupplierContent(content) {
    if (content === undefined) {
        return;
    }
    if (content.kind !== undefined) {
        content.kind_value = serviceSupplierKinds[content.kind];
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
        ensureArray(content, 'costAdditionalDetailsLastPeriod');
        for (const additionalDetail of content.costAdditionalDetailsLastPeriod) {
            updateCostAdditionalDetail(additionalDetail);
        }
    }
    if (content.currency !== undefined) {
        content.currency_value = currencies[content.currency];
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
        content.qualityOfReading_value = readingQualities[content.qualityOfReading];
    }
    updateSummaryMeasurement(content.ratchetDemand);
    if (content.commodity !== undefined) {
        content.commodity_value = commodities[content.commodity];
    }
    if (content.tariffRiderRefs?.tariffRiderRef !== undefined) {
        ensureArray(content.tariffRiderRefs, 'tariffRiderRef');
        for (const tariffRider of content.tariffRiderRefs.tariffRiderRef) {
            updateTariffRider(tariffRider);
        }
    }
}
export function updateGreenButtonContent(entryContent) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    // Fix renamed EnergyUsageSummary
    if (entryContent.EnergyUsageSummary !== undefined) {
        entryContent.UsageSummary = entryContent.EnergyUsageSummary;
        delete entryContent.EnergyUsageSummary;
    }
    // Fix renamed ElectricPowerUsageSummary
    if (entryContent.ElectricPowerUsageSummary !== undefined) {
        entryContent.UsageSummary = entryContent.ElectricPowerUsageSummary;
        delete entryContent.ElectricPowerUsageSummary;
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
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
