
import { InfoModal } from './info-modal';
import { Tooltip } from './tooltip';

type HeaderProps = {
    name: string,
    expanded: boolean,
    onChangeCollapse: (idx: number) => void,
    visible: boolean,
    onChangeVisibility: (idx: number) => void,
    info: boolean,
    onChangeInfo: (idx: number) => void,
    id: number,
    description?: string,
};

export function Header({ name, expanded, onChangeCollapse, id, visible, onChangeVisibility, info, onChangeInfo, description }: HeaderProps) {
    return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <img
              src="/assets/drag-dots.svg"
              alt="Expand"
              style={{
                position: 'relative',
                flex: '0 0 auto',
                cursor: 'pointer',
                width: '1rem',
                height: '1rem',
                marginRight: '0.5rem',
                transform:  'none',
                transition: 'transform 0.3s',
              }}
              onClick={() => console.log('drag')} // To-do ; onChangeOrder
            />
            <div style={{ flex: 1,fontFamily: 'Lato', fontWeight: '700', fontSize: '16px'}}>
              <span>{name}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: '0.5rem', alignItems: 'center' }}>
            <Tooltip content={visible ? "Hide layer" : "Show layer"}>
            <img
              src={visible ? "/assets/hide.svg" : "/assets/show.svg"}
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
              onClick={() => onChangeVisibility(id)}
            />
            </Tooltip>
            <div style={{ position: "relative", display: "inline-block" }}>
              <Tooltip content={info ? "Hide info" : "Show info"}>
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
                  onClick={() => onChangeInfo(id)}
                />
              </Tooltip>
              {info && (
                <div style={{
                  position: "absolute",
                  left: "120%",
                  top: "50%",
                  borderRadius: '17px',
                  height: "10rem",
                  width: "15rem",
                  overflow: "auto",
                  zIndex: 2000,
                }}>
                  <InfoModal description={description!} />
                </div>
              )}
          </div>
            <Tooltip content={expanded ? "Collapse" : "Expand"}>
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
            </Tooltip>
            </div>
          </div>
    );
}

