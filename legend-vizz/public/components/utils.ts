export type LegendItem = {
  id: string;
  name: string;
  type: 'basic' | 'gradient' | 'choropleth';
  description?: string;
  timeline?: { dateFormats: string[]; maxDate: Date; minDate: Date, speed: number, step: number };
  items?: { name: string; color: string }[];
};

// date parser, wasnt sure how many formats expected -> normalizing to YYYY
export function normalizeToYear(date: Date): string {
  return String(date.getFullYear());
}