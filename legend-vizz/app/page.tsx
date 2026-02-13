import { LegendWrapper } from '../public/components/legend-wrapper';
import { LegendItem } from '../public/components/utils';

export default function Home() {
  //const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/data`, { cache: 'no-store' });
  //const data = await response.json() as LegendItem[];
  console.log("Rendering Home page");
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: '2rem auto'
      }}
    >
    <LegendWrapper  />
  </div>
  );
}