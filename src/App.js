import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import {Messages} from "./components/content/profile/messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Achievements} from "./components/content/profile/achievements/Achievements";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className='content'>
                    <Routes>
                        <Route path='/messages' element={<Messages messages={props.messages}/>}/>
                        <Route path='/achievements' element={<Achievements/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
