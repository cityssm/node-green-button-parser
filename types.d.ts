export type GreenButtonContentType = 'ElectricPowerUsageSummary' | 'IntervalBlock' | 'LocalTimeParameters' | 'ReadingType' | 'UsagePoint';
export interface GreenButtonJson {
    title: string;
    updatedDate: Date;
    link: string;
    items: GreenButtonItem[];
}
export interface BaseItem {
    id: string;
    title: string;
    link: string;
    publishedDate: Date;
    contentType: GreenButtonContentType;
}
export interface ElectricPowerUsageSummaryItem extends BaseItem {
    contentType: 'ElectricPowerUsageSummary';
    billingPeriod: {
        duration: number;
        start: number;
    };
    overallConsumptionLastPeriod: {
        powerOfTenMultiplier: number;
        uom: number;
        value: number;
    };
    currentBillingPeriodOverAllConsumption: {
        powerOfTenMultiplier: number;
        timeStamp: number;
        uom: number;
        value: number;
    };
    qualityOfReading: number;
    statusTimeStamp: number;
}
export interface IntervalBlockItem extends BaseItem {
    contentType: 'IntervalBlock';
    interval: {
        duration: number;
        start: number;
    };
    IntervalReading: Array<{
        timePeriod: {
            duration: number;
            start: number;
        };
        value: number;
    }>;
}
export interface LocalTimeParametersItem extends BaseItem {
    contentType: 'LocalTimeParameters';
    dstEndRule: string;
    dstOffset: number;
    dstStartRule: string;
    tzOffset: number;
}
export interface ReadingTypeItem extends BaseItem {
    contentType: 'ReadingType';
    accumulationBehaviour: number;
    commodity: number;
    currency: number;
    dataQualifier: number;
    flowDirection: number;
    intervalLength: number;
    kind: number;
    phase: number;
    powerOfTenMultiplier: number;
    timeAttribute: number;
    uom: number;
}
export interface UsagePointItem extends BaseItem {
    contentType: 'UsagePoint';
    ServiceCategory: {
        kind: number;
    };
}
export type GreenButtonItem = ElectricPowerUsageSummaryItem | IntervalBlockItem | LocalTimeParametersItem | ReadingTypeItem | UsagePointItem;
