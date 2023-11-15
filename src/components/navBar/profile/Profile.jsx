import profile from './Profile.module.css'
import {NavLink} from "react-router-dom";

export const Profile = () => {
    return (
        <div className={profile.profile}>
            <div className={profile.header}>
                <h3>Профиль</h3>
                <hr className={profile.separator}/>
            </div>
            <div className={profile.links}>
                <div>
                    <NavLink className={link => link.isActive ? profile.active : profile.links}
                             to='/messages'>Сообщения</NavLink>
                </div>
                <div>
                    <NavLink className={link => link.isActive ? profile.active : profile.links}
                             to='/achievements'>Достижения</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Profile