'use client';
import { useState } from 'react';
import "@fontsource/lato"; 
import { SortableLegendItem } from './sortable-item';
import { LegendItem } from './utils';

import { DndContext, closestCenter, DragEndEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

type LegendWrapperProps = {
  items: LegendItem[],
  onChangeOrder: (newOrder: string[]) => void;
  onChangeCollapse: (id: string) => void;
  onChangeVisibility: (id: string) => void;
  onChangeInfo: (id: string) => void;
  onChangeDate: (start: number, end: number) => void;
  expanded: string[];
  visibility: string[];
  info: string[];
  startValue: number;
  endValue: number;

};

export function SortableWrapper({ items, onChangeOrder, onChangeCollapse, onChangeVisibility, onChangeInfo, onChangeDate, expanded, visibility, info, startValue, endValue }: LegendWrapperProps) {
  const sensors = useSensors(useSensor(PointerSensor));
  
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex(i => i.id === active.id);
    const newIndex = items.findIndex(i => i.id === over.id);

    const newItems = arrayMove(items, oldIndex, newIndex);

    onChangeOrder(newItems.map(i => i.id));
  }


  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
        <div style={{ border: '2px solid #ccc', borderRadius: '17px', width: "80%", maxWidth: '35rem', backgroundColor: '#ffffff', padding: '1rem' }}>
          {items.map((item, idx) => (
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