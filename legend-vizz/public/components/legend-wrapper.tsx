'use client';
import { useState } from 'react';
import "@fontsource/lato"; 
import { Basic } from './basic';

type LegendWrapperProps = {
  items: any[],
};

export function LegendWrapper({ items }: LegendWrapperProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div style={{ border: '2px solid #ccc', borderRadius: '17px', width: '35rem', backgroundColor: '#ffffff', padding: '1rem' }}>
      {items.map((item, idx) => (
        <div
          key={item.id}
          style={{
            borderBottom: '1px solid #eee',
            height: expanded === idx ? 'auto' : 'fit-content',
            overflow: 'hidden',
            position: 'relative',
            transition: 'height 0.3s',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
            <div style={{ flex: 1,fontFamily: 'Lato', fontWeight: '700', fontSize: '16px'}}>
              <span>{item.name}</span>
            </div>
            <img
              src="/assets/arrow-down.svg"
              alt="Expand"
              style={{
                position: 'relative',
                flex: '0 0 auto',
                cursor: 'pointer',
                width: '1rem',
                height: '1rem',
                transform: expanded === idx ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.3s',
              }}
              onClick={() => setExpanded(expanded === idx ? null : idx)}
            />
          </div>
          {
            // switch cases for different types of legends
            item.type === 'basic' && (
              <Basic item={item} />
            )
          }
        </div>
      ))}
    </div>
  );
}