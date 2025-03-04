import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./Button";
import { EventListener } from "./EventListener";

const root = document.getElementById("react-root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <div style={{ margin: "100px 20px", backgroundColor: "skyblue" }}>
        <h1>This is React Component</h1>
        <Button />
        <EventListener />
      </div>
    </StrictMode>,
  );
}
