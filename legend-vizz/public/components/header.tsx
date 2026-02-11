
'use client';
import { InfoModal } from './info-modal';
import { Tooltip } from './tooltip';
import { useEffect, useRef, useState } from 'react';


type HeaderProps = {
    name: string;
    expanded: boolean;
    onChangeCollapse: (id: string) => void;
    visible: boolean;
    onChangeVisibility: (id: string) => void;
    info: boolean;
    onChangeInfo: (id: string) => void;
    id: string; 
    description?: string;
    dragHandleProps: any;
};

export function Header({ name, expanded, onChangeCollapse, id, visible, onChangeVisibility, info, onChangeInfo, description, dragHandleProps }: HeaderProps) {
    const infoRef = useRef<HTMLDivElement | null>(null); // to-do: i dont know if i like this

    useEffect(() => {
      if (!info) return;

      const handleClickOutside = (event: MouseEvent) => { // to-do: i dont know if i like this
        if (infoRef.current && !infoRef.current.contains(event.target as Node)) {
          onChangeInfo(id);
        }
      };

      document.addEventListener('mouseup', handleClickOutside);

      return () => {
        document.removeEventListener('mouseup', handleClickOutside);
      };
    }, [info, id, onChangeInfo]);

    return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginBottom: '0.5rem', gap: '0.5rem' }}>
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
          touchAction: 'none',
        }}
        {...dragHandleProps}
      />
      <div style={{ flex: 1, minWidth: 0, fontFamily: 'Lato', fontWeight: '700', fontSize: 'clamp(13px, 2.2vw, 16px)', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flexWrap: 'wrap' }}>
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
          <div ref={infoRef}
          className="info-modal-wrapper">
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
          transition: 'transform 0.3s',
          transform: expanded ? 'none' : 'rotate(180deg)',
        }}
        onClick={() => {
          onChangeCollapse(id);
        }}
      />
      </Tooltip>
      </div>
    </div>
    );
}

