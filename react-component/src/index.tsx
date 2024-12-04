import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./Button";
import { EventListener } from "./EventListener";

createRoot(document.getElementById("react-root")!).render(
  <StrictMode>
    <div style={{marginTop: '100px'}}>
      <h1>This is React Component</h1>
      <Button />
      <EventListener />
    </div>
  </StrictMode>
);
