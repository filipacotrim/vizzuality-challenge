'use client';
import { useState } from 'react';
import "@fontsource/lato"; 
import { Basic } from './basic';
import { Header } from './header';
import { Gradient } from './gradient';
import { Choropleth } from './choropleth';
import { Timeline } from './timeline';
import { normalizeToYear } from './utils';

type LegendWrapperProps = {
  items: any[],
};

export function LegendWrapper({ items }: LegendWrapperProps) {
  const [expanded, setExpanded] = useState<number[]>([]);
  const [visibility, setVisibility] = useState<number[]>([]);
  const [info, setInfo] = useState<number[]>([]);
  
  const [startValue, setStart] = useState<number>(0);
  const [endValue, setEnd] = useState<number>(0);

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

  function onChangeDate(value_start: number, value_end: number) {
    setStart(value_start);
    setEnd(value_end);
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
            marginBottom: '1rem',
            flexDirection: 'column',
          }}
        >
          <Header name={item.name} expanded={expanded.includes(idx)} onChangeCollapse={onChangeCollapse} id={idx} visible={visibility.includes(idx)} onChangeVisibility={onChangeVisibility} info={info.includes(idx)} onChangeInfo={onChangeInfo} description={item.description} />
          {item.type === 'basic' && expanded.includes(idx) && (
              <Basic item={item} />
          )}
          {item.type === 'gradient' && expanded.includes(idx) && (
              <Gradient item={item} />
          )}
          {item.type === 'choropleth' && expanded.includes(idx) && (
              <Choropleth item={item} />
          )}
          {item.timeline && (() => {
            const startYear = normalizeToYear(new Date(item.timeline.minDate));
            const endYear = normalizeToYear(new Date(item.timeline.maxDate));

            return (
              <div key={item.id}>
                {expanded.includes(idx) && (
                  <Timeline
                    start={startYear}
                    end={endYear}
                    step={item.timeline.step}
                    startValue={startValue}
                    endValue={endValue}
                    onChangeDate={onChangeDate}
                  />
                )}
              </div>
            );
          })()}
        </div>
      ))}
    </div>
  );
}