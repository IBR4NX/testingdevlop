import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/Store.ts";
import App from "./App.tsx";
import "./index.css";
import "./i18n/index.ts";
// import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <Provider store={store} >
      <App />
     </Provider>
// </StrictMode>
);
