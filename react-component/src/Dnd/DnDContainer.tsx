import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

type Props = {
  children: React.ReactNode;
  onDragEnd: (event: DragEndEvent) => void;
};

export function DnDContainer({ children, onDragEnd }: Props) {
  return (
    <DndContext modifiers={[restrictToWindowEdges]} onDragEnd={onDragEnd}>
      {children}
    </DndContext>
  );
}
