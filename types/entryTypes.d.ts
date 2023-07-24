import type { ApplicationInformationContent, AuthorizationContent, BatchListContent, CustomerAccountContent, CustomerAgreementContent, CustomerContent, ElectricPowerQualitySummaryContent, IntervalBlockContent, LocalTimeParametersContent, MeterContent, MeterReadingContent, ReadingTypeContent, ServiceLocationContent, ServiceStatusContent, ServiceSupplierContent, UsagePointContent, UsageSummaryContent } from './contentTypes.js';
export interface GreenButtonJson {
    id: string;
    title: string;
    updatedDate: Date;
    link: string;
    entries: GreenButtonEntry[];
}
interface BaseEntry<GreenButtonContent> {
    id: string;
    title: string;
    link: string;
    publishedDate: Date;
    content: GreenButtonContent;
}
export interface ApplicationInformationEntry extends BaseEntry<ApplicationInformationContent> {
    content: ApplicationInformationContent;
}
export interface AuthorizationEntry extends BaseEntry<AuthorizationContent> {
    content: AuthorizationContent;
}
export interface BatchListEntry extends BaseEntry<BatchListContent> {
    content: BatchListContent;
}
export interface CustomerEntry extends BaseEntry<CustomerContent> {
    content: CustomerContent;
}
export interface CustomerAccountEntry extends BaseEntry<CustomerAccountContent> {
    content: CustomerAccountContent;
}
export interface CustomerAgreementEntry extends BaseEntry<CustomerAgreementContent> {
    content: CustomerAgreementContent;
}
export interface ElectricPowerQualitySummaryEntry extends BaseEntry<ElectricPowerQualitySummaryContent> {
    content: ElectricPowerQualitySummaryContent;
}
export interface IntervalBlockEntry extends BaseEntry<IntervalBlockContent> {
    content: IntervalBlockContent;
}
export interface LocalTimeParametersEntry extends BaseEntry<LocalTimeParametersContent> {
    content: LocalTimeParametersContent;
}
export interface MeterEntry extends BaseEntry<MeterContent> {
    content: MeterContent;
}
export interface MeterReadingEntry extends BaseEntry<MeterReadingContent> {
    content: MeterReadingContent;
}
export interface ReadingTypeEntry extends BaseEntry<ReadingTypeContent> {
    content: ReadingTypeContent;
}
export interface ServiceLocationEntry extends BaseEntry<ServiceLocationContent> {
    content: ServiceLocationContent;
}
export interface ServiceStatusEntry extends BaseEntry<ServiceStatusContent> {
    content: ServiceStatusContent;
}
export interface ServiceSupplierEntry extends BaseEntry<ServiceSupplierContent> {
    content: ServiceSupplierContent;
}
export interface UsagePointEntry extends BaseEntry<UsagePointContent> {
    content: UsagePointContent;
}
export interface UsageSummaryEntry extends BaseEntry<UsageSummaryContent> {
    content: UsageSummaryContent;
}
export type GreenButtonEntry = ApplicationInformationEntry | AuthorizationEntry | BatchListEntry | CustomerEntry | CustomerAccountEntry | CustomerAgreementEntry | ElectricPowerQualitySummaryEntry | IntervalBlockEntry | LocalTimeParametersEntry | MeterEntry | MeterReadingEntry | ReadingTypeEntry | ServiceLocationEntry | ServiceStatusEntry | ServiceSupplierEntry | UsagePointEntry | UsageSummaryEntry;
export {};
