import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./Button";
import { EventListener } from "./EventListener";

createRoot(document.getElementById("react-root")!).render(
  <StrictMode>
    <div>
      <Button />
      <EventListener />
    </div>
  </StrictMode>
);
