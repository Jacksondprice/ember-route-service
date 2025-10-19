// roster helpers for event booking service

export function rosterStep0(records, limit = 254) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep1(records, limit = 65) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep2(records, limit = 314) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep3(records, limit = 443) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep4(records, limit = 486) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep5(records, limit = 21) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
