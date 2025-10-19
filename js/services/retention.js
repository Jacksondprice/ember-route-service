// retention helpers for event booking service

export function retentionStep0(records, limit = 360) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep1(records, limit = 283) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep2(records, limit = 120) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep3(records, limit = 361) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep4(records, limit = 117) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep5(records, limit = 30) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep6(records, limit = 316) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep7(records, limit = 386) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep8(records, limit = 465) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep9(records, limit = 116) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
