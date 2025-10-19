// billing helpers for event booking service

export function billingStep0(records, limit = 388) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep1(records, limit = 64) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep2(records, limit = 434) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep3(records, limit = 58) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep4(records, limit = 112) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep5(records, limit = 379) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep6(records, limit = 231) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep7(records, limit = 48) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep8(records, limit = 25) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
