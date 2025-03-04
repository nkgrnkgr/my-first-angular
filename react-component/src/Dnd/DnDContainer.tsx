import { DndContext } from "@dnd-kit/core";

type Props = {
  children: React.ReactNode;
};

export function DnDContainer({ children }: Props) {
  return <DndContext>{children}</DndContext>;
}
