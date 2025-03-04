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
  return (
    <Draggable x={x} y={y}>
      <div className={styles.square}>Drag Me</div>
    </Draggable>
  );
}
