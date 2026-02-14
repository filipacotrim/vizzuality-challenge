import { normalizeToYear } from './utils';
import { CSS } from '@dnd-kit/utilities';
import { Basic } from './layers/basic';
import { Header } from './header/header';
import { Gradient } from './layers/gradient';
import { Choropleth } from './layers/choropleth';
import { Timeline } from './layers/timeline';
import { useSortable } from '@dnd-kit/sortable';
import { LegendItem } from './utils';

type SortableLegendItemProps = {
  item: LegendItem;
  expanded: boolean;
  visibility: boolean;
  info: boolean;
  onChangeCollapse: (id: string) => void;
  onChangeVisibility: (id: string) => void;
  onChangeInfo: (id: string) => void;
  startValue: number;
  endValue: number;
  onChangeDate: (start: number, end: number) => void;
};

export function SortableLegendItem({
  item,
  expanded,
  visibility,
  info,
  onChangeCollapse,
  onChangeVisibility,
  onChangeInfo,
  startValue,
  endValue,
  onChangeDate
}: SortableLegendItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: item.id });

    const headerStyle: React.CSSProperties = {
        transform: CSS.Transform.toString(transform) || '',
        transition: transition || '',
        borderBottom: '1px solid #eee',
        height: expanded ? 'auto' : 'fit-content',
        overflow: 'visible',
        position: 'relative',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
    };
    

  return (
    <div ref={setNodeRef} style={headerStyle}>
      <Header
        name={item.name}
        expanded={expanded}
        onChangeCollapse={onChangeCollapse}
        id={item.id}
        visible={visibility}
        onChangeVisibility={onChangeVisibility}
        info={info}
        onChangeInfo={onChangeInfo}
        description={item.description}
        dragHandleProps={{ ...attributes, ...listeners }} 
      />
      {item.type === 'basic' && expanded && !isDragging && <Basic item={item} />}
      {item.type === 'gradient' && expanded && !isDragging && <Gradient item={item} />}
      {item.type === 'choropleth' && expanded && !isDragging && <Choropleth item={item} />}
      {item.timeline && expanded && !isDragging && (
        <Timeline
          start={normalizeToYear(new Date(item.timeline.minDate))}
          end={normalizeToYear(new Date(item.timeline.maxDate))}
          step={item.timeline.step}
          startValue={startValue}
          endValue={endValue}
          onChangeDate={onChangeDate}
        />
      )}
    </div>
  );
}