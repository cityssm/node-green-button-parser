import type { GreenButtonCostAdditionalDetail, GreenButtonFunctionBlock, GreenButtonSummaryMeasurement, GreenButtonTariffRider, GreenButtonUsagePoint } from './types/objectTypes.js';
export declare function updateSummaryMeasurement(measurement?: GreenButtonSummaryMeasurement): void;
export declare function updateTariffRider(tariffRider: GreenButtonTariffRider): void;
export declare function updateUsagePoint(usagePoint: GreenButtonUsagePoint): void;
export declare function updateCostAdditionalDetail(additionalDetail: GreenButtonCostAdditionalDetail): void;
export declare function parseAuthorizationScope(scope: string): GreenButtonFunctionBlock;
