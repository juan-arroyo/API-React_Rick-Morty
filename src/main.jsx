import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TaskContextProvider } from "./Context/Contexto";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<TaskContextProvider>
			<App />
		</TaskContextProvider>
	</React.StrictMode>
);
