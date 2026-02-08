
export function Basic({ item }: { item: any }) {
    return (
        <div style={{ padding: '1rem', fontSize: '14px', color: '#555' }}>
            <p>{item.description}</p>
           
        </div>
    );
}