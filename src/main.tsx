import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/fontFace.css";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/Store.ts";
// import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <Provider store={store} >
      <App />
     </Provider>
// </StrictMode>
);
