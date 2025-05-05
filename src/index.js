import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./style.css";
import { createRoot } from 'react-dom/client'; // Replaces ReactDOM.render in React 18^


/*
ReactDOM.render(					
	<Router>				
		<App />				
	</Router>,			
	document.getElementById("root")	
);	
*/

const rootElement = document.getElementById('root');
    const root = createRoot(rootElement);

    root.render(
      <React.StrictMode>
        <Router>				
			<App />				
		</Router>,	
      </React.StrictMode>
    );
