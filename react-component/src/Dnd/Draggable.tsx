import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  x: number;
  y: number;
};

export function Draggable({ children, x, y }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    top: `${y}px`,
    left: `${x}px`,
  };

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={styles.dragItem}
    >
      {children}
    </button>
  );
}
