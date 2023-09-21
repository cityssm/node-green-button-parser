import lookups from './lookups.js';
import { ensureArray } from './utilities.js';
export function updateSummaryMeasurement(measurement) {
    if (measurement === undefined) {
        return;
    }
    if (measurement.powerOfTenMultiplier !== undefined) {
        measurement.powerOfTenMultiplier_value =
            lookups.powerOfTenMultipliers[measurement.powerOfTenMultiplier];
    }
    if (measurement.uom !== undefined) {
        measurement.uom_value = lookups.unitsOfMeasurement[measurement.uom];
    }
}
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
        ensureArray(usagePoint.ServiceDeliveryPoint.tariffRiderRefs, 'tariffRiderRef');
        for (const tariffRider of usagePoint.ServiceDeliveryPoint.tariffRiderRefs
            .tariffRiderRef) {
            updateTariffRider(tariffRider);
        }
    }
    if (usagePoint.amiBillingReady !== undefined) {
        usagePoint.amiBillingReady_value =
            lookups.amiBillingReadyStatuses[usagePoint.amiBillingReady];
    }
    if (usagePoint.connectionState !== undefined) {
        usagePoint.connectionState_value =
            lookups.connectionStates[usagePoint.connectionState];
    }
    updateSummaryMeasurement(usagePoint.estimatedLoad);
    updateSummaryMeasurement(usagePoint.nominalServiceVoltage);
    if (usagePoint.phaseCode !== undefined) {
        usagePoint.phaseCode_value = lookups.phaseCodes[usagePoint.phaseCode];
    }
    updateSummaryMeasurement(usagePoint.ratedCurrent);
    updateSummaryMeasurement(usagePoint.ratedPower);
    if (usagePoint.pnodeRefs !== undefined) {
        ensureArray(usagePoint.pnodeRefs, 'pnodeRef');
        for (const pnode of usagePoint.pnodeRefs.pnodeRef) {
            pnode.apnodeType_value = lookups.pnodeTypes[pnode.apnodeType];
        }
    }
    if (usagePoint.aggregateNodeRefs !== undefined) {
        ensureArray(usagePoint.aggregateNodeRefs, 'aggregateNodeRef');
        for (const anode of usagePoint.aggregateNodeRefs.aggregateNodeRef) {
            anode.anodeType_value = lookups.anodeTypes[anode.anodeType];
        }
    }
}
export function updateCostAdditionalDetail(additionalDetail) {
    additionalDetail.itemKind_value =
        lookups.costDetailItemKinds[additionalDetail.itemKind];
    updateSummaryMeasurement(additionalDetail.measurement);
    updateSummaryMeasurement(additionalDetail.unitCost);
    updateSummaryMeasurement(additionalDetail.itemPeriod);
}
export function parseAuthorizationScope(scope) {
    const scopeString = scope + ';';
    const functionBlockPieces = scopeString
        .slice(3, scopeString.indexOf(';'))
        .split('_');
    const functionBlocks = [];
    for (const functionBlockPiece of functionBlockPieces) {
        functionBlocks.push(Number.parseInt(functionBlockPiece, 10));
    }
    return {
        functionBlocks,
        common: functionBlocks.includes(1),
        downloadMyData: functionBlocks.includes(2),
        connectMyData: functionBlocks.includes(3),
        intervalMetering: functionBlocks.includes(4),
        intervalElectricityMetering: functionBlocks.includes(5),
        demandElectricityMetering: functionBlocks.includes(6),
        netMetering: functionBlocks.includes(7),
        forwardAndReverseMetering: functionBlocks.includes(8),
        registerValues: functionBlocks.includes(9),
        gas: functionBlocks.includes(10),
        water: functionBlocks.includes(11),
        costOfIntervalData: functionBlocks.includes(12),
        securityAndPrivacyClasses: functionBlocks.includes(13),
        usageSummary: functionBlocks.includes(15),
        usageSummaryWithCost: functionBlocks.includes(16),
        powerQualitySummary: functionBlocks.includes(17),
        multipleUsagePoints: functionBlocks.includes(18),
        partialUpdateData: functionBlocks.includes(19),
        usageSummaryWithDemandsAndPreviousDayAttributes: functionBlocks.includes(27),
        usageSummaryCostsForCurrentBillingPeriod: functionBlocks.includes(28),
        temperatureIntervalMetering: functionBlocks.includes(29),
        commonUserExperience: functionBlocks.includes(30),
        authorizationAndAuthentication: functionBlocks.includes(31),
        resourceLevelRest: functionBlocks.includes(32),
        managementRestServices: functionBlocks.includes(33),
        sftpForBulk: functionBlocks.includes(34),
        restForBulk: functionBlocks.includes(35),
        thirdPartyDynamicRegistration: functionBlocks.includes(36),
        queryParameters: functionBlocks.includes(37),
        onDemandRequests: functionBlocks.includes(38),
        pushModel: functionBlocks.includes(39),
        offlineAuthorization: functionBlocks.includes(40),
        manageApplicationInformationResource: functionBlocks.includes(41),
        manageAuthorizationResource: functionBlocks.includes(44),
        retailCustomerManagementRest: functionBlocks.includes(49),
        retailCustomerResourceLevelRest: functionBlocks.includes(50),
        retailCustomerCommon: functionBlocks.includes(51),
        retailCustomerDownloadMyData: functionBlocks.includes(52),
        retailCustomerConnectMyData: functionBlocks.includes(53),
        retailCustomerBasicInformation: functionBlocks.includes(54),
        retailCustomerDemographicInformation: functionBlocks.includes(55),
        retailCustomerBillingInformation: functionBlocks.includes(56),
        retailCustomerAccountAgreementInformation: functionBlocks.includes(57),
        retailCustomerServiceLocationInformation: functionBlocks.includes(58),
        retailCustomerServiceSupplierInformation: functionBlocks.includes(59),
        retailCustomerMeterInformation: functionBlocks.includes(60),
        retailCustomerEndDeviceInformation: functionBlocks.includes(61),
        retailCustomerProgramDateIdMappingsInformation: functionBlocks.includes(62),
        retailCustomerSecurityAndPrivacy: functionBlocks.includes(64),
        retailCustomerAuthorizationAndAuthentication: functionBlocks.includes(65),
        sftpForRetailCustomerBulk: functionBlocks.includes(66),
        restForRetailCustomerBulk: functionBlocks.includes(67),
        retailCustomerQueryParameters: functionBlocks.includes(68),
        retailCustomerPushModel: functionBlocks.includes(69),
        retailCustomerOfflineAuthorization: functionBlocks.includes(70)
    };
}
