import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";

const el = document.getElementById("root") as HTMLElement;
if (el.hasChildNodes()) hydrateRoot(el, <App />);
else createRoot(el).render(<App />);
