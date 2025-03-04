import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { Draggable } from "../Dnd/Draggable";
import styles from "./index.module.css";

type Coordinates = {
  x: number;
  y: number;
};

export function Playground() {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    x: 0,
    y: 0,
  });
  return (
    <div>
      <h1 className="text-gray-700">Playground</h1>
      <div>
        <DndContext
          onDragEnd={({ delta }) => {
            setCoordinates(({ x, y }) => {
              return {
                x: x + delta.x,
                y: y + delta.y,
              };
            });
          }}
        >
          <DragItem coordinate={coordinates} />
        </DndContext>
      </div>
    </div>
  );
}

type Props = {
  coordinate: Coordinates;
};

function DragItem({ coordinate: { x, y } }: Props) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Draggable x={x} y={y}>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        {/* biome-ignore lint/a11y/useFocusableInteractive: <explanation> */}
        <div
          // biome-ignore lint/a11y/useSemanticElements: <explanation>
          role="button"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.preventDefault();
            alert("button clicked");
            setOpen(true);
          }}
          className={styles.square}
        >
          Drag Me2
        </div>
        {open && <ChatWindow />}
      </Draggable>
    </>
  );
}

function ChatWindow() {
  return (
    <div className={styles.chat}>
      <div>this is ChatWindow</div>
    </div>
  );
}
