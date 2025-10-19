// scheduling helpers for event booking service

export function schedulingStep0(records, limit = 353) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep1(records, limit = 400) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep2(records, limit = 322) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep3(records, limit = 450) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep4(records, limit = 310) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep5(records, limit = 226) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep6(records, limit = 428) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep7(records, limit = 48) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
