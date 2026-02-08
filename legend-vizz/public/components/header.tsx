type HeaderProps = {
    name: string,
    expanded: boolean,
    onChangeCollapse: (idx: number) => void,
    id: number,
};

export function Header({ name, expanded, onChangeCollapse, id }: HeaderProps) {
    return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <div style={{ flex: 1,fontFamily: 'Lato', fontWeight: '700', fontSize: '16px'}}>
              <span>{name}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: '0.5rem', alignItems: 'center' }}>
            <img
              src="/assets/hide.svg"
              alt="Expand"
              style={{
                position: 'relative',
                flex: '0 0 auto',
                cursor: 'pointer',
                width: '1rem',
                height: '1rem',
                transform:  'none',
                transition: 'transform 0.3s',
              }}
              onClick={() => console.log('Info clicked')}
            />
            <img
              src="/assets/info.svg"
              alt="Expand"
              style={{
                position: 'relative',
                flex: '0 0 auto',
                cursor: 'pointer',
                width: '1rem',
                height: '1rem',
                transform:  'none',
                transition: 'transform 0.3s',
              }}
              onClick={() => console.log('Info clicked')}
            />
            <img
              src="/assets/arrow-down.svg"
              alt="Expand"
              style={{
                position: 'relative',
                flex: '0 0 auto',
                cursor: 'pointer',
                width: '1rem',
                height: '1rem',
                transform: expanded ? 'none' : 'rotate(180deg)',
                transition: 'transform 0.3s',
              }}
              onClick={() => onChangeCollapse(id)}
            />
            </div>
          </div>
    );
}

