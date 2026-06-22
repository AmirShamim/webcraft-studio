export const ROI_ESTIMATE_STORAGE_KEY = 'alastoora_roi_estimate_v1';

export type RoiEstimate = {
  market: string;
  marketLabel: string;
  locale: string;
  currency: string;
  dailyMissedInquiries: number;
  averageCustomerValue: number;
  scenarioTitle: string;
  conversionRate: number;
  lostMonthlyRevenue: number;
  recoverableMonthlyRevenue: number;
  recoveredClientsPerMonth: number;
  updatedAt: string;
};

export function formatRoiCurrency(value: number, locale: string, currency: string) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

export function formatRoiEstimateForMessage(estimate: RoiEstimate) {
  const lostRevenue = formatRoiCurrency(
    estimate.lostMonthlyRevenue,
    estimate.locale,
    estimate.currency,
  );
  const recoverableRevenue = formatRoiCurrency(
    estimate.recoverableMonthlyRevenue,
    estimate.locale,
    estimate.currency,
  );
  const averageCustomerValue = formatRoiCurrency(
    estimate.averageCustomerValue,
    estimate.locale,
    estimate.currency,
  );

  return [
    `Estimated lost monthly revenue: ${lostRevenue}`,
    `Estimated recoverable revenue: ${recoverableRevenue}/month`,
    `Daily missed inquiries: ${estimate.dailyMissedInquiries}`,
    `Average customer value: ${averageCustomerValue}`,
    `Conversion benchmark: ${estimate.scenarioTitle} (${estimate.conversionRate}%)`,
    `Estimated recovered clients: ${estimate.recoveredClientsPerMonth}/month`,
  ];
}

export function serializeRoiEstimate(estimate: RoiEstimate) {
  return JSON.stringify(estimate);
}

export function parseStoredRoiEstimate(value: string | null): RoiEstimate | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as Partial<RoiEstimate>;
    const requiredNumbers = [
      parsed.dailyMissedInquiries,
      parsed.averageCustomerValue,
      parsed.conversionRate,
      parsed.lostMonthlyRevenue,
      parsed.recoverableMonthlyRevenue,
      parsed.recoveredClientsPerMonth,
    ];

    if (
      typeof parsed.market !== 'string' ||
      typeof parsed.marketLabel !== 'string' ||
      typeof parsed.locale !== 'string' ||
      typeof parsed.currency !== 'string' ||
      typeof parsed.scenarioTitle !== 'string' ||
      typeof parsed.updatedAt !== 'string' ||
      requiredNumbers.some((number) => !Number.isFinite(number))
    ) {
      return null;
    }

    return parsed as RoiEstimate;
  } catch {
    return null;
  }
}
