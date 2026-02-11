'use client';
import { useState, useRef, useEffect } from 'react';

type TimelineProps = {
  start: string,
  end: string,
  step: number,
  startValue: number,
  endValue: number,
  onChangeDate: (value_start: number, value_end: number) => void
};

export function Timeline({ start, end, step, startValue, endValue, onChangeDate }: TimelineProps) {
  const min = Number(start);
  const max = Number(end);

  useEffect(() => {
    if (startValue === 0 && endValue === 0) {
      onChangeDate(min, max);
    }
  }, [min, max, onChangeDate, startValue, endValue]);

  const trackRef = useRef<HTMLDivElement>(null);

  const valueToPercent = (value: number) => ((value - min) / (max - min)) * 100;
  const percentToValue = (percent: number) => Math.round((percent / 100) * (max - min) / step) * step + min;

  const handleDrag = (handle: 'start' | 'end', e: React.PointerEvent) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const percent = ((e.clientX - rect.left) / rect.width) * 100;
    const value = Math.min(Math.max(percentToValue(percent), min), max);

    if (handle === 'start') {
      onChangeDate(Math.min(value, endValue), endValue);
    } else {
      onChangeDate(startValue, Math.max(value, startValue));
    }
  };

  return (
    <div style={{ width: '100%', marginTop: '1rem', position: 'relative' }}>
      <div ref={trackRef} style={{position: 'relative', height: '3px', backgroundColor: '#ccc', borderRadius: '4px'}}>
        <div
          style={{
            position: 'absolute',
            left: `${valueToPercent(startValue)}%`,
            width: `${valueToPercent(endValue) - valueToPercent(startValue)}%`,
            height: '100%',
            backgroundColor: '#CAB2D6',
            borderRadius: '4px',
          }}
        />
        {/* start handle */}
        <div
          onPointerDown={e => {
            e.preventDefault();
            const move = (event: PointerEvent) => handleDrag('start', event as any);
            const up = () => {
              window.removeEventListener('pointermove', move);
              window.removeEventListener('pointerup', up);
            };
            window.addEventListener('pointermove', move);
            window.addEventListener('pointerup', up);
          }}
          style={{
            position: 'absolute',
            left: `${valueToPercent(startValue)}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#CAB2D6',
            cursor: 'pointer',
            zIndex: 2,
            touchAction: 'none',
          }}
        />

        {/* end handle */}
        <div
          onPointerDown={e => {
            e.preventDefault();
            const move = (event: PointerEvent) => handleDrag('end', event as any);
            const up = () => {
              window.removeEventListener('pointermove', move);
              window.removeEventListener('pointerup', up);
            };
            window.addEventListener('pointermove', move);
            window.addEventListener('pointerup', up);
          }}
          style={{
            position: 'absolute',
            left: `${valueToPercent(endValue)}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#CAB2D6',
            cursor: 'pointer',
            zIndex: 2,
            touchAction: 'none',
          }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginTop: '0.5rem' }}>
        <span>{startValue}</span>
        <span>{endValue}</span>
      </div>
    </div>
  );
}
