// webhooks helpers for event booking service

export function webhooksStep0(records, limit = 126) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep1(records, limit = 247) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep2(records, limit = 370) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep3(records, limit = 333) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep4(records, limit = 404) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep5(records, limit = 229) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep6(records, limit = 127) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep7(records, limit = 175) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
