import navBar from './NavBar.module.css'
import Profile from "./profile/Profile";
import {Course} from "./course/Course";
import {Community} from "./community/Community";
export const NavBar = () => {
    return (
        <nav className={navBar.navBar}>
            <Profile/>
            <Course/>
            <Community/>
        </nav>
    )
}

export default NavBar;