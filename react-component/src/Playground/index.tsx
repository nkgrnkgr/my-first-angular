import { useState } from "react";
import { DnDContainer } from "../Dnd/DnDContainer";
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
        <DnDContainer
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
        </DnDContainer>
      </div>
    </div>
  );
}

type Props = {
  coordinate: Coordinates;
};

function DragItem({ coordinate: { x, y } }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Draggable x={x} y={y}>
      <button
        type="button"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className={styles.square}
      >
        Chat icon
      </button>
      {open && <ChatWindow />}
    </Draggable>
  );
}

function ChatWindow() {
  return (
    <div className={styles.chat}>
      <div>this is ChatWindow</div>
    </div>
  );
}
