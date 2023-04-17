import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { EmailProvider } from "./context/EmailContext";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <EmailProvider>
        <App />
      </EmailProvider>
    </Router>
  </StrictMode>
);
