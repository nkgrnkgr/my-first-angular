import { DragOverlay } from "@dnd-kit/core";

type Props = {
  children: React.ReactNode;
};

export function DnDOverlay({ children }: Props) {
  return <DragOverlay>{children}</DragOverlay>;
}
