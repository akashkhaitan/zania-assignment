import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { worker } from "./mocks/browser.ts";

await worker.start();

createRoot(document.getElementById("root")!).render(<App />);
