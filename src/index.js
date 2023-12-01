import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addMessage, subscribe, updateMessageText} from './redux/State'
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let render = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 newMessage={addMessage}
                 updateMessageText={updateMessageText}/>
        </React.StrictMode>
    );
}

subscribe(render)
render(state);
reportWebVitals();
