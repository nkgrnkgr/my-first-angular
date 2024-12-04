import { useEffect, useState } from "react";

export function EventListener() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.addEventListener("react-event", () => {
      setCount(count + 1);
    });
  }, [count]);

  return <div>EventListener {count}</div>;
}
