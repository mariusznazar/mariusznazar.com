import { describe, expect, test } from 'vitest';
import {
  applyTouching,
  buildGrid,
  currentMonth,
  findOverlaps,
  formatRange,
  monthIndex,
  resolveSpans,
  rowOf,
  type Span,
  type TimelineEntry,
} from './timeline';

const M = (y: number, m: number) => y * 12 + (m - 1);
const NOW = M(2026, 9);

describe('monthIndex', () => {
  test('parses year-month', () => {
    expect(monthIndex('2021-12', 'start')).toEqual({ month: M(2021, 12), approx: false });
  });
  test('year only: start is January, end is December, both approx', () => {
    expect(monthIndex('2020', 'start')).toEqual({ month: M(2020, 1), approx: true });
    expect(monthIndex('2021', 'end')).toEqual({ month: M(2021, 12), approx: true });
  });
  test('rejects other formats', () => {
    expect(() => monthIndex('12/2021', 'start')).toThrow();
  });
});

test('currentMonth', () => {
  expect(currentMonth(new Date(2026, 8, 5))).toBe(NOW);
});

describe('resolveSpans', () => {
  const entries: TimelineEntry[] = [
    { id: 'job', track: 'praca', start: '2021-12', end: null },
    { id: 'site', track: 'artefakt', start: '2026-09', end: null, ongoing: true },
    { id: 'canvas', track: 'artefakt', start: '2026-06', end: null },
    { id: 'course', track: 'edukacja', start: '2026-05', end: '2026-06' },
    { id: 'planned', track: 'edukacja', start: '2026-10', end: '2026-11' },
    { id: 'started-planned', track: 'edukacja', start: '2026-09', end: '2026-11' },
    { id: 'undated', track: 'edukacja', start: null, end: null },
    { id: 'swps', track: 'edukacja', start: '2020', end: '2021' },
  ];
  const spans = resolveSpans(entries, NOW);
  const by = (id: string) => spans.find((s) => s.id === id)!;

  test('praca without end is ongoing to now', () => {
    expect(by('job')).toMatchObject({ startMonth: M(2021, 12), endMonth: NOW, ongoing: true, point: false });
  });
  test('artefakt with ongoing flag is ongoing', () => {
    expect(by('site')).toMatchObject({ endMonth: NOW, ongoing: true });
  });
  test('artefakt without end is a one-month point', () => {
    expect(by('canvas')).toMatchObject({ startMonth: M(2026, 6), endMonth: M(2026, 6), point: true, ongoing: false });
  });
  test('closed range keeps both months', () => {
    expect(by('course')).toMatchObject({ startMonth: M(2026, 5), endMonth: M(2026, 6), approxStart: false, approxEnd: false });
  });
  test('future start is skipped, end after now is clamped', () => {
    expect(spans.some((s) => s.id === 'planned')).toBe(false);
    expect(by('started-planned').endMonth).toBe(NOW);
  });
  test('missing start is skipped', () => {
    expect(spans.some((s) => s.id === 'undated')).toBe(false);
  });
  test('year-only dates are approx', () => {
    expect(by('swps')).toMatchObject({ startMonth: M(2020, 1), endMonth: M(2021, 12), approxStart: true, approxEnd: true });
  });
});

const span = (p: Partial<Span> & Pick<Span, 'id' | 'track' | 'startMonth' | 'endMonth'>): Span => ({
  approxStart: false, approxEnd: false, ongoing: false, point: false, ...p,
});

describe('applyTouching', () => {
  test('end becomes exclusive when the next entry in the track starts that month', () => {
    const vd = span({ id: 'vd', track: 'praca', startMonth: M(2019, 1), endMonth: M(2021, 6) });
    const esvelo = span({ id: 'esvelo', track: 'praca', startMonth: M(2021, 6), endMonth: M(2021, 11) });
    const out = applyTouching([vd, esvelo]);
    expect(out.find((s) => s.id === 'vd')!.endMonth).toBe(M(2021, 5));
    expect(out.find((s) => s.id === 'esvelo')!.endMonth).toBe(M(2021, 11));
  });
  test('other tracks and points are untouched', () => {
    const a = span({ id: 'a', track: 'praca', startMonth: M(2019, 1), endMonth: M(2021, 6) });
    const b = span({ id: 'b', track: 'artefakt', startMonth: M(2021, 6), endMonth: M(2021, 6), point: true });
    expect(applyTouching([a, b])).toEqual([a, b]);
  });
});

describe('findOverlaps', () => {
  test('reports pairs in the same track that share a month', () => {
    const a = span({ id: 'a', track: 'edukacja', startMonth: M(2026, 3), endMonth: M(2026, 4) });
    const b = span({ id: 'b', track: 'edukacja', startMonth: M(2026, 4), endMonth: M(2026, 5) });
    expect(findOverlaps([a, b])).toEqual([['a', 'b']]);
  });
  test('touching after applyTouching is not an overlap', () => {
    const vd = span({ id: 'vd', track: 'praca', startMonth: M(2019, 1), endMonth: M(2021, 6) });
    const esvelo = span({ id: 'esvelo', track: 'praca', startMonth: M(2021, 6), endMonth: M(2021, 11) });
    expect(findOverlaps(applyTouching([vd, esvelo]))).toEqual([]);
  });
  test('different tracks never overlap', () => {
    const a = span({ id: 'a', track: 'praca', startMonth: M(2021, 12), endMonth: NOW });
    const b = span({ id: 'b', track: 'edukacja', startMonth: M(2024, 11), endMonth: M(2024, 12) });
    expect(findOverlaps([a, b])).toEqual([]);
  });
});

describe('grid', () => {
  const spans = [
    span({ id: 'job', track: 'praca', startMonth: M(2021, 12), endMonth: NOW, ongoing: true }),
    span({ id: 'old', track: 'edukacja', startMonth: M(2011, 7), endMonth: M(2011, 12) }),
  ];
  const grid = buildGrid(spans, NOW);
  test('rows cover now down to the oldest start', () => {
    expect(grid.top).toBe(NOW);
    expect(grid.bottom).toBe(M(2011, 7));
    expect(grid.rowCount).toBe(NOW - M(2011, 7) + 1);
  });
  test('rowOf: top month is row 1, older months go down', () => {
    expect(rowOf(NOW, NOW)).toBe(1);
    expect(rowOf(M(2026, 8), NOW)).toBe(2);
  });
  test('years: current year sits at row 1, others at their January, bottom year at bottom', () => {
    expect(grid.years[0]).toEqual({ year: 2026, row: 1 });
    expect(grid.years.find((y) => y.year === 2025)).toEqual({ year: 2025, row: rowOf(M(2025, 1), NOW) });
    expect(grid.years.at(-1)).toEqual({ year: 2011, row: rowOf(M(2011, 7), NOW) });
  });
});

describe('formatRange', () => {
  test('ongoing', () => {
    expect(formatRange(span({ id: 'a', track: 'praca', startMonth: M(2021, 12), endMonth: NOW, ongoing: true }))).toBe('2021-12 → trwa');
  });
  test('closed', () => {
    expect(formatRange(span({ id: 'a', track: 'edukacja', startMonth: M(2026, 5), endMonth: M(2026, 6) }))).toBe('2026-05 → 2026-06');
  });
  test('point', () => {
    expect(formatRange(span({ id: 'a', track: 'artefakt', startMonth: M(2026, 6), endMonth: M(2026, 6), point: true }))).toBe('2026-06');
  });
  test('approx shows years only', () => {
    expect(formatRange(span({ id: 'a', track: 'edukacja', startMonth: M(2020, 1), endMonth: M(2021, 12), approxStart: true, approxEnd: true }))).toBe('2020 → 2021');
  });
});
