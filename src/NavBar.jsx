import navBar from './NavBar.module.css'
export const NavBar = () => {
    return (
        <nav className={navBar.navBar}>
            <div>Профиль</div>
            <div>Курс</div>
            <div>Сообщество</div>
        </nav>
    )
}

export default NavBar;