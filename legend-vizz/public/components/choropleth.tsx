import { LegendItem } from './utils';

export function Choropleth({ item }: { item: LegendItem }) {
    return (
        <div style={{ display: 'flex', width: '100%'}}>
            {item.items?.map((subItem: { name: string; color: string }, idx: number) => (
                <div key={idx} style={{width: `${100 / item.items!.length}%`, display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
                <div style={{ height: '0.5rem', width: '100%', backgroundColor: subItem.color}}/>
                <p style={{ marginTop: '0.25rem', fontSize: '0.75rem' }}>
                    {subItem.name}
                </p>
                </div>
            ))}
        </div>
    );
}