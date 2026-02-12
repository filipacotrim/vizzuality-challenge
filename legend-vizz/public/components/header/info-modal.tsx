
export function InfoModal({ description }: { description: string }) {
    return (
        <div className="prose" style={{ padding: '0.75rem', backgroundColor: '#f9f9f9',
          fontFamily: 'Open Sans', fontSize: 'clamp(13px, 2.2vw, 13px)',  color: '#555',  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', paddingLeft: '1.5rem' }} dangerouslySetInnerHTML={{ __html: description }}>
        </div>
    );
}