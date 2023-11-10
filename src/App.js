import './App.css';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <ul>
                <li>css</li>
                <li>crp</li>
                <li>rpg</li>
                <li>html</li>
            </ul>
        </div>
    );
}

const NavBar = () => {
    return (
        <div>
            <a href='/'>Форум</a>
            <a href='/'>Сообщения</a>
            <a href='/'>Настройки</a>
        </div>
    );
}
export default App;
