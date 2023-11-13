import navBar from './NavBar.module.css'
export const NavBar = () => {
    return (
        <nav className={navBar.navBar}>
            <div className={navBar.profile}>Профиль</div>
            <div className={navBar.course}>Курс</div>
            <div className={navBar.community}>Сообщество</div>
        </nav>
    )
}

export default NavBar;