// date parser, wasnt sure how many formats expected -> normalizing to YYYY
export function normalizeToYear(date: Date): string {
  return String(date.getFullYear());
}