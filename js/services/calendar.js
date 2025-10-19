// calendar helpers for event booking service

export function calendarStep0(records, limit = 41) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep1(records, limit = 452) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep2(records, limit = 317) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep3(records, limit = 386) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep4(records, limit = 369) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep5(records, limit = 393) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep6(records, limit = 483) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep7(records, limit = 264) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
