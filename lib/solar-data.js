/**
 * Solar calculator data and calculation engine.
 *
 * Formulas derived from real SolarSquare calculator outputs and
 * verified against test cases for Wardha (442001) and Hyderabad (500089).
 *
 * Key assumptions (matching industry standard):
 *  - Performance ratio: 0.78
 *  - Panel degradation: 1% per year
 *  - Inflation on tariff: 3% per year
 *  - System lifetime: 25 years
 *  - EMI interest rate: 12% p.a.
 */

const PERFORMANCE_RATIO = 0.78;
const DEGRADATION_RATE = 0.01;
const TARIFF_INFLATION = 0.03;
const SYSTEM_LIFETIME_YEARS = 25;
const EMI_ANNUAL_RATE = 0.12;
const SQ_FT_PER_KW = 60;
const CO2_KG_PER_KW_YEAR = 1176;
const TREES_PER_KG_CO2 = 1 / 30;
const KM_PER_KG_CO2 = 8.9;

// State-level effective residential electricity rate (₹/unit, weighted toward
// upper consumption slabs that solar offsets first) and average peak sun hours.
const STATE_DATA = {
  'Andhra Pradesh':     { rate: 7.5,  sunHours: 5.2 },
  'Arunachal Pradesh':  { rate: 5.5,  sunHours: 4.0 },
  'Assam':              { rate: 6.5,  sunHours: 4.2 },
  'Bihar':              { rate: 7.0,  sunHours: 4.8 },
  'Chhattisgarh':       { rate: 6.5,  sunHours: 5.0 },
  'Delhi':              { rate: 8.0,  sunHours: 5.0 },
  'Goa':                { rate: 5.0,  sunHours: 5.2 },
  'Gujarat':            { rate: 5.5,  sunHours: 5.6 },
  'Haryana':            { rate: 7.0,  sunHours: 5.2 },
  'Himachal Pradesh':   { rate: 5.0,  sunHours: 4.8 },
  'Jharkhand':          { rate: 6.5,  sunHours: 4.8 },
  'Karnataka':          { rate: 8.0,  sunHours: 5.4 },
  'Kerala':             { rate: 7.0,  sunHours: 4.6 },
  'Madhya Pradesh':     { rate: 7.5,  sunHours: 5.4 },
  'Maharashtra':        { rate: 12.0, sunHours: 5.2 },
  'Manipur':            { rate: 6.0,  sunHours: 4.2 },
  'Meghalaya':          { rate: 5.5,  sunHours: 4.0 },
  'Mizoram':            { rate: 6.0,  sunHours: 4.2 },
  'Nagaland':           { rate: 6.0,  sunHours: 4.2 },
  'Odisha':             { rate: 6.5,  sunHours: 5.0 },
  'Punjab':             { rate: 8.0,  sunHours: 5.2 },
  'Rajasthan':          { rate: 8.0,  sunHours: 5.8 },
  'Sikkim':             { rate: 4.5,  sunHours: 4.0 },
  'Tamil Nadu':         { rate: 6.5,  sunHours: 5.2 },
  'Telangana':          { rate: 7.0,  sunHours: 5.0 },
  'Tripura':            { rate: 6.0,  sunHours: 4.2 },
  'Uttar Pradesh':      { rate: 7.0,  sunHours: 5.0 },
  'Uttarakhand':        { rate: 6.0,  sunHours: 5.0 },
  'West Bengal':        { rate: 8.0,  sunHours: 4.6 },
  'Jammu and Kashmir':  { rate: 4.0,  sunHours: 5.0 },
  'Ladakh':             { rate: 4.0,  sunHours: 5.8 },
  'Chandigarh':         { rate: 5.5,  sunHours: 5.2 },
  'Puducherry':         { rate: 5.0,  sunHours: 5.2 },
};

const DEFAULT_STATE_DATA = { rate: 8.0, sunHours: 5.0 };

export function getStateData(state) {
  if (!state) return DEFAULT_STATE_DATA;
  const key = Object.keys(STATE_DATA).find(
    (k) => k.toLowerCase() === state.toLowerCase()
  );
  return key ? STATE_DATA[key] : DEFAULT_STATE_DATA;
}

export async function lookupPincode(pincode) {
  try {
    const res = await fetch(
      `https://api.postalpincode.in/pincode/${pincode}`
    );
    const json = await res.json();
    if (json[0]?.Status === 'Success' && json[0]?.PostOffice?.length) {
      const po = json[0].PostOffice[0];
      return { city: po.District, state: po.State, found: true };
    }
  } catch {
    // fall through
  }
  return { city: '', state: '', found: false };
}

export function calcSystemSize(monthlyBill, rate, sunHours) {
  const size = monthlyBill / (rate * sunHours * 30 * PERFORMANCE_RATIO);
  return Math.max(1, parseFloat(size.toFixed(2)));
}

export function calcRoofArea(sizeKW) {
  return Math.round(sizeKW * SQ_FT_PER_KW);
}

export function calcInstallationCost(sizeKW) {
  let costPerKW;
  if (sizeKW <= 3) costPerKW = 87000;
  else if (sizeKW <= 10) costPerKW = 64000;
  else costPerKW = 59000;
  return Math.round((sizeKW * costPerKW) / 500) * 500;
}

export function calcSubsidy(sizeKW) {
  if (sizeKW <= 2) return Math.round(sizeKW * 30000);
  if (sizeKW <= 3) return Math.round(60000 + (sizeKW - 2) * 18000);
  return 78000;
}

export function calcMonthlySavings(sizeKW, rate, sunHours) {
  const unitsPerMonth = sizeKW * sunHours * 30 * PERFORMANCE_RATIO;
  return Math.round(unitsPerMonth * rate);
}

export function calcLifetimeSavings(yearlySavingsYear1) {
  let total = 0;
  for (let y = 0; y < SYSTEM_LIFETIME_YEARS; y++) {
    const degradation = Math.pow(1 - DEGRADATION_RATE, y);
    const inflation = Math.pow(1 + TARIFF_INFLATION, y);
    total += yearlySavingsYear1 * degradation * inflation;
  }
  return Math.round(total);
}

export function calcROI(yearlySavings, netCost) {
  if (netCost <= 0) return 0;
  return parseFloat(((yearlySavings / netCost) * 100).toFixed(1));
}

export function calcEMI(principal, tenureMonths) {
  const r = EMI_ANNUAL_RATE / 12;
  const n = tenureMonths;
  if (r === 0) return Math.round(principal / n);
  const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  return Math.round(emi);
}

export function calcEnvironmentalImpact(sizeKW) {
  const co2 = Math.round(sizeKW * CO2_KG_PER_KW_YEAR);
  return {
    co2,
    trees: Math.round(co2 * TREES_PER_KG_CO2),
    distanceKm: Math.round(co2 * KM_PER_KG_CO2),
  };
}

export function calculateAll(monthlyBill, state) {
  const { rate, sunHours } = getStateData(state);

  const sizeKW = calcSystemSize(monthlyBill, rate, sunHours);
  const roofArea = calcRoofArea(sizeKW);
  const totalCost = calcInstallationCost(sizeKW);
  const subsidy = calcSubsidy(sizeKW);
  const netCost = totalCost - subsidy;
  const monthlySavings = calcMonthlySavings(sizeKW, rate, sunHours);
  const yearlySavings = monthlySavings * 12;
  const lifetimeSavings = calcLifetimeSavings(yearlySavings);
  const roi = calcROI(yearlySavings, netCost);
  const downPayment = Math.min(subsidy, Math.round(totalCost * 0.15));
  const netDownPayment = Math.max(0, downPayment - subsidy);
  const emi60 = calcEMI(netCost, 60);
  const env = calcEnvironmentalImpact(sizeKW);

  return {
    sizeKW,
    roofArea,
    totalCost,
    subsidy,
    netCost,
    monthlySavings,
    yearlySavings,
    lifetimeSavings,
    roi,
    downPayment: subsidy,
    netDownPayment,
    emi60,
    co2: env.co2,
    trees: env.trees,
    distanceKm: env.distanceKm,
    rate,
    sunHours,
  };
}
