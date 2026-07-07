import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

// Shared UI package styles
import "ifamished-ui/styles/index.css"
import "ifamished-ui/styles/themes/solid/violet.css"

// Site-specific background styles
import "./styles/background.css"

import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
