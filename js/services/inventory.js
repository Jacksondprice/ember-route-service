// inventory helpers for event booking service

export function inventoryStep0(records, limit = 339) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep1(records, limit = 93) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep2(records, limit = 119) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep3(records, limit = 463) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep4(records, limit = 166) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function inventoryStep5(records, limit = 262) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('inventory step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
