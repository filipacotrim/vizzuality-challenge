import "@fontsource/open-sans"; 

export function Basic({ item }: { item: any }) {
    return (
        <div style={{marginBottom: "2rem"}}>
            {item.items.map((subItem: any, idx: number) => (
                <div key={idx} style={{display: 'flex', flexDirection: 'row', marginBottom: "-1rem"}}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: subItem.color, marginRight: '5px', alignSelf: 'center' }}></div>
                    <h2 style={{ fontFamily: 'Open Sans', fontSize: '14px', fontWeight: 400, color: "#606060", display: 'flex', alignItems: 'center'}}>{subItem.name}</h2>
                </div>
            ))}
        
        </div>
    );
}