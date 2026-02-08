
export function InfoModal({ description }: { description: string }) {
    console.log(description);
    return (
        <div className="prose" style={{ marginTop: '0.5rem', padding: '0.75rem', backgroundColor: '#f9f9f9',
          fontSize: '13px', color: '#555',  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', paddingLeft: '1.5rem' }} dangerouslySetInnerHTML={{ __html: description }}>
        </div>
    );
}