import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./Button";
import { EventListener } from "./EventListener";
import { Playground } from "./Playground";
// import styles from "./index.module.css";

const root = document.getElementById("react-root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <div
        // className={styles.root}
        style={{ margin: "100px 20px", backgroundColor: "skyblue" }}
      >
        <h1>This is React Component</h1>
        <Button />
        <EventListener />
        <Playground />
      </div>
    </StrictMode>,
  );
}
