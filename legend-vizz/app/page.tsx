import { LegendWrapper } from '../public/components/legend-wrapper';

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/data`, { cache: 'no-store' });
  const data = await response.json();

  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      minHeight: '100vh',
      margin: '2rem auto',
    }}
  >
    <LegendWrapper items={data} />
  </div>
  );
}