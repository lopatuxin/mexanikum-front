import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/State'
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let render = () => {
    root.render(
        <React.StrictMode>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}

store.subscribe(render)
render(store.getState());
reportWebVitals();
