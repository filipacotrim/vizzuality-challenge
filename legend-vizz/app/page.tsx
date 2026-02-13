import { LegendWrapper } from '../public/components/legend-wrapper';
import { LegendItem } from '../public/components/utils';

export default async function Home() {
  const baseUrl =
    process.env.VERCEL_URL
      ? `` // deployed
      : 'http://localhost:3000';            // local dev

  const response = await fetch(`${baseUrl}/api/data`, { cache: 'no-store' });
  const data = await response.json() as LegendItem[];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: '2rem auto'
      }}
    >
    <LegendWrapper initialItems={data} />
  </div>
  );
}