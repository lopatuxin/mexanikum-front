import {addMessage} from "../redux/State";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "../App";

export let render = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} newMessage={addMessage}/>
        </React.StrictMode>
    );
}