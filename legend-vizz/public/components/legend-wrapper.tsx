'use client';

import { useEffect, useState } from 'react';
import { SortableWrapper } from './sortable-wrapper';
import { LegendItem } from './utils';


export function LegendWrapper( ) {
  const [items, setItems] = useState<LegendItem[]>([]);
  const [expanded, setExpanded] = useState<string[]>([]);
  const [visibility, setVisibility] = useState<string[]>([]);
  const [info, setInfo] = useState<string[]>([]);

  useEffect(() => {
    const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
    fetch(`${BASE_PATH}/data.json`)
      .then(res => res.json())
      .then(setItems)
      .catch(console.error);
  }, []);

  const [startValue, setStart] = useState<number>(0);
  const [endValue, setEnd] = useState<number>(0);

  function onChangeOrder(newIds: string[]) {
    const reordered = newIds.map(id =>
      items.find(item => item.id === id)!
    );

    setItems(reordered);
  }

  function onChangeCollapse(id: string) {
    setExpanded(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  }

  function onChangeVisibility(id: string) {
    setVisibility(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  }

  function onChangeInfo(id: string) {
    setInfo(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [id] // also closes others when opening a new one
    );
  }

  function onChangeDate(value_start: number, value_end: number) {
    setStart(value_start);
    setEnd(value_end);
  }


  return (
    <SortableWrapper
        items={items}
        onChangeOrder={onChangeOrder}
        onChangeCollapse={onChangeCollapse}
        onChangeVisibility={onChangeVisibility}
        onChangeInfo={onChangeInfo}
        onChangeDate={onChangeDate}
        expanded={expanded}
        visibility={visibility}
        info={info}
        startValue={startValue}
        endValue={endValue}
    />
  );
}
