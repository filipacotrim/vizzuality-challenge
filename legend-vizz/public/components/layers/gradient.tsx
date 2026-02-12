import { LegendItem } from '../utils';

export function Gradient({ item }: { item: LegendItem }) {
    const gradient = `linear-gradient( to right, ${item.items?.map((i: { name: string; color: string }) => i.color).join(',')})`;

    return (
        <div style={{ width: '100%' }}>
            <div style={{height: '0.5rem', width: '100%', background: gradient}}/>
            <div style={{ display: 'flex', width: '100%' }}>
                {item.items?.map((subItem: { name: string; color: string }, idx: number) => (
                <div key={idx} style={{ width: `${100 / item.items!.length}%`, display: 'flex', alignItems: 'center', justifyContent: idx === 0 ? 'flex-start' : 'flex-end' }}>
                    <p style={{ marginTop: '0.25rem', fontSize: 'clamp(0.75rem, 2.2vw, 0.75rem)', fontFamily: 'Open Sans' }}>
                        {subItem.name}
                    </p>
                </div>
                ))}
            </div>
        </div>

    );
}