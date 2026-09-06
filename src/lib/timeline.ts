export type Track = 'praca' | 'artefakt' | 'edukacja';

export interface TimelineEntry {
  id: string;
  track: Track;
  /** 'YYYY-MM' or 'YYYY'; null = not dated (skipped) */
  start: string | null;
  /** 'YYYY-MM' or 'YYYY'; null = ongoing (praca / ongoing flag) or a one-month point */
  end: string | null;
  ongoing?: boolean;
  /** end month is known well enough to place the bar, but the card shows the year only */
  endApprox?: boolean;
}

export interface Span {
  id: string;
  track: Track;
  /** absolute month: year * 12 + (month - 1) */
  startMonth: number;
  /** inclusive; may be layout-adjusted by applyTouching or clamped to now */
  endMonth: number;
  /** the declared end month, unaffected by layout adjustments; used for display */
  displayEndMonth: number;
  approxStart: boolean;
  approxEnd: boolean;
  ongoing: boolean;
  point: boolean;
}

const DATE_RE = /^(\d{4})(?:-(0[1-9]|1[0-2]))?$/;

export function monthIndex(value: string, edge: 'start' | 'end'): { month: number; approx: boolean } {
  const m = DATE_RE.exec(value);
  if (!m) throw new Error(`Timeline date "${value}" must be YYYY or YYYY-MM`);
  const year = Number(m[1]);
  if (m[2] === undefined) {
    return { month: year * 12 + (edge === 'start' ? 0 : 11), approx: true };
  }
  return { month: year * 12 + Number(m[2]) - 1, approx: false };
}

export function currentMonth(date: Date = new Date()): number {
  return date.getFullYear() * 12 + date.getMonth();
}

export function resolveSpans(entries: TimelineEntry[], now: number): Span[] {
  const spans: Span[] = [];
  for (const e of entries) {
    if (e.start === null) continue;
    const start = monthIndex(e.start, 'start');
    if (start.month > now) continue;
    const ongoing = e.end === null && (e.track === 'praca' || e.ongoing === true);
    let endMonth = start.month;
    let displayEndMonth = start.month;
    let approxEnd = false;
    let point = false;
    if (ongoing) {
      endMonth = now;
      displayEndMonth = now;
    } else if (e.end === null) {
      point = true;
    } else {
      const end = monthIndex(e.end, 'end');
      if (end.month < start.month) {
        throw new Error(`Timeline entry "${e.id}" ends (${e.end}) before it starts (${e.start})`);
      }
      endMonth = Math.min(end.month, now);
      displayEndMonth = end.month;
      approxEnd = end.approx || e.endApprox === true;
    }
    spans.push({
      id: e.id, track: e.track,
      startMonth: start.month, endMonth, displayEndMonth,
      approxStart: start.approx, approxEnd, ongoing, point,
    });
  }
  return spans;
}

/** A closed span ending in the month the next span of the same track starts gets an exclusive end. */
export function applyTouching(spans: Span[]): Span[] {
  return spans.map((a) => {
    if (a.ongoing || a.point) return a;
    const touches = spans.some(
      (b) => b !== a && b.track === a.track && b.startMonth === a.endMonth && b.startMonth > a.startMonth,
    );
    return touches ? { ...a, endMonth: a.endMonth - 1 } : a;
  });
}

export function findOverlaps(spans: Span[]): Array<[string, string]> {
  const out: Array<[string, string]> = [];
  for (let i = 0; i < spans.length; i++) {
    for (let j = i + 1; j < spans.length; j++) {
      const a = spans[i]!;
      const b = spans[j]!;
      if (a.track === b.track && a.startMonth <= b.endMonth && b.startMonth <= a.endMonth) {
        out.push([a.id, b.id]);
      }
    }
  }
  return out;
}

/** Row 1 is the top (current) month; each older month is one row further down. */
export function rowOf(month: number, top: number): number {
  return top - month + 1;
}

export interface Grid {
  top: number;
  bottom: number;
  rowCount: number;
  years: Array<{ year: number; row: number }>;
}

export function buildGrid(spans: Span[], now: number): Grid {
  if (spans.length === 0) throw new Error('buildGrid needs at least one span');
  const bottom = Math.min(...spans.map((s) => s.startMonth));
  const top = now;
  const years: Grid['years'] = [];
  const currentYear = Math.floor(top / 12);
  for (let year = currentYear; year >= Math.floor(bottom / 12); year--) {
    const isCurrentYear = year === currentYear;
    const baseMonth = isCurrentYear ? top : year * 12;
    const month = Math.max(bottom, Math.min(top, baseMonth));
    years.push({ year, row: rowOf(month, top) });
  }
  return { top, bottom, rowCount: top - bottom + 1, years };
}

export function formatMonth(month: number, approx: boolean): string {
  const year = Math.floor(month / 12);
  if (approx) return String(year);
  return `${year}-${String((month % 12) + 1).padStart(2, '0')}`;
}

export function formatRange(span: Span): string {
  const start = formatMonth(span.startMonth, span.approxStart);
  if (span.ongoing) return `${start} → trwa`;
  if (span.point) return start;
  return `${start} → ${formatMonth(span.displayEndMonth, span.approxEnd)}`;
}
