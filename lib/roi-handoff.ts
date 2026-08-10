export const ROI_ESTIMATE_STORAGE_KEY = 'alastoora_roi_estimate_v2';

export type RoiEstimate = {
  market: string;
  marketLabel: string;
  locale: string;
  currency: string;
  hourlyBillableRate: number;
  weeklyDocumentHours: number;
  activeStaffCount: number;
  monthlyLostHours: number;
  lostMonthlyRevenue: number;
  recoverableMonthlyRevenue: number;
  recoverableBillableHours: number;
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
  const hourlyRate = formatRoiCurrency(
    estimate.hourlyBillableRate,
    estimate.locale,
    estimate.currency,
  );

  return [
    `Average Hourly Billable Rate: ${hourlyRate}/hr`,
    `Hours Spent Chasing Documents Weekly: ${estimate.weeklyDocumentHours} hrs/week`,
    `Number of Active Staff/Partners: ${estimate.activeStaffCount}`,
    `Estimated unbillable revenue lost: ${lostRevenue}/month`,
    `Recoverable Billable Revenue: ${recoverableRevenue}/month (${Math.round(estimate.recoverableBillableHours)} hrs reclaimed)`,
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
      parsed.hourlyBillableRate,
      parsed.weeklyDocumentHours,
      parsed.activeStaffCount,
      parsed.monthlyLostHours,
      parsed.lostMonthlyRevenue,
      parsed.recoverableMonthlyRevenue,
      parsed.recoverableBillableHours,
    ];

    if (
      typeof parsed.market !== 'string' ||
      typeof parsed.marketLabel !== 'string' ||
      typeof parsed.locale !== 'string' ||
      typeof parsed.currency !== 'string' ||
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

