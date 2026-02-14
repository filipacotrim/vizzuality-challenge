import "@fontsource/open-sans"; 
import { LegendItem } from '../utils';

export function Basic({ item }: { item: LegendItem }) {
    return (
        <div style={{marginBottom: "2rem", marginLeft: "1.5rem"}}>
            {item.items?.map((subItem: { name: string; color: string }, idx: number) => (
                <div key={idx} style={{display: 'flex', flexDirection: 'row', marginBottom: "-1rem"}}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: subItem.color, marginRight: '5px', alignSelf: 'center' }}></div>
                    <h2 style={{ fontFamily: 'Open Sans', fontSize: 'clamp(13px, 2.2vw, 12px)', fontWeight: 400, color: "#606060", display: 'flex', alignItems: 'center'}}>{subItem.name}</h2>
                </div>
            ))}
        
        </div>
    );
}