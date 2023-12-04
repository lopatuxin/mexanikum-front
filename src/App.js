import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import {Messages} from "./components/content/profile/messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Achievements} from "./components/content/profile/achievements/Achievements";
import {Messaging} from "./components/content/profile/messaging/Messaging";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className='content'>
                    <Routes>
                        <Route path='/messages' element={<Messages messages={props.state.messagesPage.messages}/>}/>
                        <Route path='/achievements' element={<Achievements/>}/>
                        <Route path='messages/1' element={<Messaging dispatch={props.dispatch}
                                                                     messageText={props.state.messagesPage.messageText}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
