import navBar from './NavBar.module.css'
import Profile from "./profile/Profile";
import {School} from "./school/School";
import {Community} from "./community/Community";
export const NavBar = () => {
    return (
        <nav className={navBar.navBar}>
            <Profile/>
            <School/>
            <Community/>
        </nav>
    )
}

export default NavBar;