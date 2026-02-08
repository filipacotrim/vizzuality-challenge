'use client';
import { useState } from 'react';
import "@fontsource/lato"; 
import { Basic } from './basic';
import { Header } from './header';
import { Gradient } from './gradient';
import { Choropleth } from './choropleth';

type LegendWrapperProps = {
  items: any[],
};

export function LegendWrapper({ items }: LegendWrapperProps) {
  const [expanded, setExpanded] = useState<number[]>([]);
  const [visibility, setVisibility] = useState<number[]>([]);
  const [info, setInfo] = useState<number[]>([]);

  function onChangeCollapse(idx: number) {
    setExpanded(prev =>
      prev.includes(idx)
        ? prev.filter(i => i !== idx) 
        : [...prev, idx]
    );
  }

  function onChangeVisibility(idx: number) {
    setVisibility(prev =>
      prev.includes(idx)
        ? prev.filter(i => i !== idx) 
        : [...prev, idx] 
    );
  }

  function onChangeInfo(idx: number) {
    setInfo(prev =>
      prev.includes(idx)
        ? prev.filter(i => i !== idx) 
        : [...prev, idx] 
    );
  }


  return (
    <div style={{ border: '2px solid #ccc', borderRadius: '17px', width: '35rem', backgroundColor: '#ffffff', padding: '1rem' }}>
      {items.map((item, idx) => (
        <div
          key={item.id}
          style={{
            borderBottom: '1px solid #eee',
            height: expanded.includes(idx) ? 'auto' : 'fit-content',
            overflow: 'visible',
            position: 'relative',
            transition: 'height 0.3s',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
            flexDirection: 'column',
          }}
        >
          <Header name={item.name} expanded={expanded.includes(idx)} onChangeCollapse={onChangeCollapse} id={idx} visible={visibility.includes(idx)} onChangeVisibility={onChangeVisibility} info={info.includes(idx)} onChangeInfo={onChangeInfo} />
          {
            item.type === 'basic' && expanded.includes(idx) && (
              <Basic item={item} />
          )}
          {item.type === 'gradient' && expanded.includes(idx) && (
              <Gradient item={item} />
          )}
          {item.type === 'choropleth' && expanded.includes(idx) && (
              <Choropleth item={item} />
          )}
        </div>
      ))}
    </div>
  );
}