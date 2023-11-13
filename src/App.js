import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Content from "./components/content/Content";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <Content/>
        </div>
    );
}
export default App;
