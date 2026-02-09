'use client';
import { useState } from 'react';
import "@fontsource/lato"; 
import { SortableLegendItem } from './sortable-item';

import { DndContext, closestCenter, DragEndEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type LegendItem = {
  id: string;
  name: string;
  type: 'basic' | 'gradient' | 'choropleth';
  description?: string;
  timeline?: any;
};

type LegendWrapperProps = {
  items: LegendItem[],
};

export function LegendWrapper({ items }: LegendWrapperProps) {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [visibility, setVisibility] = useState<string[]>([]);
  const [info, setInfo] = useState<string[]>([]);
  
  const [startValue, setStart] = useState<number>(0);
  const [endValue, setEnd] = useState<number>(0);

  const [draggedItems, setDraggedItems] = useState(items);
  const sensors = useSensors(useSensor(PointerSensor));

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
        : [...prev, id]
    );
  }

  function onChangeDate(value_start: number, value_end: number) {
    setStart(value_start);
    setEnd(value_end);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = draggedItems.findIndex(i => i.id === active.id);
      const newIndex = draggedItems.findIndex(i => i.id === over.id);
      setDraggedItems(arrayMove(draggedItems, oldIndex, newIndex));
    }
  }


  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={draggedItems.map(i => i.id)} strategy={verticalListSortingStrategy}>
        <div style={{ border: '2px solid #ccc', borderRadius: '17px', width: '35rem', backgroundColor: '#ffffff', padding: '1rem' }}>
          {draggedItems.map((item, idx) => (
            <SortableLegendItem
              key={item.id}
              item={item}
              expanded={expanded.includes(item.id)}
              visibility={visibility.includes(item.id)}
              info={info.includes(item.id)}
              onChangeCollapse={onChangeCollapse}
              onChangeVisibility={onChangeVisibility}
              onChangeInfo={onChangeInfo}
              startValue={startValue}
              endValue={endValue}
              onChangeDate={onChangeDate}
            />
          ))}

        </div>
       </SortableContext>
    </DndContext>
  );
}