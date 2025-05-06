import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./store";

// Set initial direction based on stored language
const storedLang = localStorage.getItem("i18nextLng") || "en";
document.documentElement.dir = storedLang === "ar" ? "rtl" : "ltr";
document.documentElement.lang = storedLang;

createRoot(document.getElementById("root")!).render(<App />);
